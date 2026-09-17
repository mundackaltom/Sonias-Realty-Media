"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{ background: "#f3f2f2", color: "#201f1d", fontFamily: "Lora, serif" }}
        className="flex min-h-screen items-center justify-center px-4"
      >
        <div style={{ background: "#f8f4f4", border: "2px solid #201f1d" }} className="max-w-xl px-8 py-12 text-center">
          <p
            style={{ color: "#7d5411", fontFamily: "Archivo, sans-serif" }}
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
          >
            Something went wrong
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="mb-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            We hit a snag
          </h1>
          <p style={{ color: "#605d5d" }} className="mb-6 text-lg">
            An unexpected error occurred while loading this page. You can try again, or head back to the homepage.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <p
              style={{ background: "#fef2f2", border: "1px solid #fee2e2", color: "#b91c1c" }}
              className="mb-6 max-h-40 overflow-auto px-4 py-3 text-left font-mono text-xs"
            >
              {error.message}
            </p>
          )}

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={reset}
              style={{ background: "#b68235", color: "#201f1d", fontFamily: "Archivo, sans-serif" }}
              className="px-6 py-3 text-[12.5px] font-bold uppercase tracking-[0.14em]"
            >
              Try again
            </button>
            <Link
              href="/"
              style={{ border: "1px solid #201f1d", color: "#201f1d", fontFamily: "Archivo, sans-serif" }}
              className="px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.14em]"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
