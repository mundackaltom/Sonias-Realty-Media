import { NextResponse } from "next/server";

const isDev = process.env.NODE_ENV === "development";

// No nonce/'strict-dynamic' here on purpose. Next only injects nonces into
// dynamically rendered pages; this site's pages are statically prerendered, so
// their cached HTML carries no nonce and a per-request nonce would block every
// chunk ('strict-dynamic' also disables the 'self' allowlist). Inline RSC
// bootstrap scripts rule out hashing, so scripts fall back to 'self' plus
// 'unsafe-inline' — external script origins are still blocked.
function buildCsp(): string {
  const scriptSrc = isDev
    ? `'self' 'unsafe-inline' 'unsafe-eval'` // Turbopack HMR needs eval in dev
    : `'self' 'unsafe-inline'`;

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

export function proxy() {
  const response = NextResponse.next();

  response.headers.set("Content-Security-Policy", buildCsp());
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
