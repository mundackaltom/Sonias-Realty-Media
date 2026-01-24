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
      <body className="min-h-screen flex items-center justify-center bg-[#F4F0EC] px-4">
        <div className="max-w-xl text-center bg-white rounded-3xl shadow-lg px-8 py-12">
          <p className="font-jost text-sm tracking-[0.3em] uppercase text-[#CDA274] mb-4">
            Something went wrong
          </p>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-[#292F36] font-bold mb-4">
            We hit a snag
          </h1>
          <p className="font-jost text-lg text-[#4D5053] mb-6">
            An unexpected error occurred while loading this page. You can try again,
            or head back to the homepage.
          </p>

          {process.env.NODE_ENV === "development" && error?.message && (
            <p className="font-mono text-xs text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3 mb-6 text-left overflow-auto max-h-40">
              {error.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={reset}
              className="bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-6 py-3 rounded-2xl transition duration-300"
            >
              Try again
            </button>
            <Link
              href="/"
              className="border-2 border-[#292F36] text-[#292F36] hover:bg-[#292F36] hover:text-white font-inter font-semibold text-lg px-6 py-3 rounded-2xl transition duration-300"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
