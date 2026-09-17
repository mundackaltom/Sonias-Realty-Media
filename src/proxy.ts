import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isDev = process.env.NODE_ENV === "development";

// Per-request nonce lets script-src stay tight (no blanket 'unsafe-inline')
// while still allowing Next's own hydration/RSC-streaming inline scripts,
// which Next automatically nonces when it sees this exact header shape.
function buildCsp(nonce: string): string {
  const scriptSrc = isDev
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'` // Turbopack HMR needs eval in dev
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const connectSrc = isDev ? "'self' ws: http://localhost:*" : "'self'";

  const directives = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    // Nonces/hashes don't apply to inline style="" attributes (only <style>
    // elements), and this app relies on inline styles for per-project image
    // crops etc., so style-src stays pragmatic rather than nonce-strict.
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `img-src 'self' data: blob:`,
    `font-src 'self' https://fonts.gstatic.com`,
    `connect-src ${connectSrc}`,
    // Google Maps embeds on project-detail and contact pages.
    `frame-src https://www.google.com https://maps.google.com`,
    `frame-ancestors 'none'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ];

  return directives.join("; ");
}

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  );
  // Ignored by browsers over plain http (e.g. local dev); takes effect once served over https.
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
