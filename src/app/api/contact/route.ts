import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
// Option A (testing): default to onboarding@resend.dev
// Option B (production): default to some@yourdomain.com after you verify the domain
const contactFromEmail =
  process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

if (!resendApiKey || !contactToEmail) {
  console.warn(
    "Contact API: RESEND_API_KEY or CONTACT_TO_EMAIL not configured.",
    {
      hasResendApiKey: !!resendApiKey,
      contactToEmail,
    }
  );
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Simple in-memory rate limiting (per IP)
// Note: This resets on server restart and is not suitable for very high-traffic apps,
// but it's enough to protect a small contact form from bursts of spam.
type RateEntry = { count: number; windowStart: number };
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 requests per IP per window
const rateLimitStore = new Map<string, RateEntry>();

function getClientIp(req: NextRequest): string {
  // Try common headers first (when behind proxy), then fall back to IP
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    return xff.split(",")[0].trim();
  }
  // req.ip is not available in NextRequest, but we can use this as a fallback identifier
  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();

  const entry = rateLimitStore.get(ip);

  if (!entry) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { limited: false } as const;
  }

  const { count, windowStart } = entry;
  if (now - windowStart > RATE_LIMIT_WINDOW_MS) {
    // Reset window
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { limited: false } as const;
  }

  if (count >= RATE_LIMIT_MAX_REQUESTS) {
    return { limited: true, retryAfterMs: RATE_LIMIT_WINDOW_MS - (now - windowStart) } as const;
  }

  rateLimitStore.set(ip, { count: count + 1, windowStart });
  return { limited: false } as const;
}

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const { limited, retryAfterMs } = isRateLimited(req);
    if (limited) {
      return NextResponse.json(
        {
          success: false,
          error:
            "You're sending messages too quickly. Please wait a moment before trying again.",
        },
        {
          status: 429,
          headers: retryAfterMs
            ? { "Retry-After": Math.ceil(retryAfterMs / 1000).toString() }
            : undefined,
        }
      );
    }

    const body = await req.json();
    const { name, email, phone, message, website } = body;

    // Honeypot check - if the hidden field is filled, it's a bot
    if (website) {
      console.log("Honeypot triggered - likely bot submission blocked");
      // Return success to not alert the bot, but don't actually process
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Enhanced validation
    const nameStr = String(name).trim();
    const emailStr = String(email).trim().toLowerCase();
    const phoneStr = String(phone).trim();
    const messageStr = String(message).trim();

    // Name validation
    if (nameStr.length < 2 || nameStr.length > 100) {
      return NextResponse.json(
        { success: false, error: "Invalid name length" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailStr) || emailStr.length > 254) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone validation (10-15 digits)
    const phoneDigits = phoneStr.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Message validation
    if (messageStr.length < 10 || messageStr.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message must be between 10 and 2000 characters" },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", { name: nameStr, email: emailStr, phone: phoneStr, message: messageStr });

    let resendStatus: unknown = null;

    if (resend && contactToEmail) {
      try {
        // NOTE: for Resend free tier, you must verify the recipient or use their test inbox.
        const result = await resend.emails.send({
          from: contactFromEmail,
          to: [contactToEmail],
          subject: `New Enquiry from ${nameStr}`,
          text: `
Name: ${nameStr}
Email: ${emailStr}
Phone: ${phoneStr}

Message:
${messageStr}
          `.trim(),
          replyTo: emailStr, // Allow direct reply to the customer
        });
        console.log("Contact API: Resend email result:", result);

        // Normalise success payload for the client
        resendStatus = {
          ok: true,
          id: (result as any)?.data?.id ?? null,
        };
      } catch (emailErr: any) {
        console.error("Contact API: failed to send email via Resend:", emailErr);

        // Extract common fields from Resend error shape
        const message =
          emailErr?.message ||
          emailErr?.error?.message ||
          emailErr?.error ||
          String(emailErr);

        const name = emailErr?.name || emailErr?.error?.name || undefined;
        const statusCode =
          emailErr?.statusCode || emailErr?.error?.statusCode || undefined;

        resendStatus = {
          ok: false,
          message,
          name,
          statusCode,
        };
      }
    } else {
      console.log(
        "Contact API: Resend not fully configured; skipping email send.",
        {
          hasResend: !!resend,
          hasApiKey: !!resendApiKey,
          contactToEmail,
        }
      );
      resendStatus = {
        ok: false,
        skipped: true,
        reason: "Resend not configured (missing API key or CONTACT_TO_EMAIL)",
      };
    }

    return NextResponse.json(
      { success: true, resendStatus },
      { status: 200 }
    );
  } catch (err) {
    console.error("API /api/contact error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Explicitly reject non-POST methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method GET not allowed." },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: "Method PUT not allowed." },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: "Method DELETE not allowed." },
    { status: 405 }
  );
}