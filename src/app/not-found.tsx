import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-4 text-[var(--ink)]">
      <div className="max-w-xl border-2 border-[var(--ink)] bg-[var(--card)] px-8 py-12 text-center">
        <p className="mb-4 font-archivo text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-text)]">
          Error 404
        </p>
        <h1 className="m-0 mb-4 font-playfair text-4xl font-bold tracking-[-0.03em] md:text-5xl">Page not found</h1>
        <p className="mb-8 font-lora text-lg text-[var(--muted-3)]">
          The page you&#8217;re looking for doesn&#8217;t exist or may have been moved. Let&#8217;s get you back to exploring projects.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-[var(--gold)] px-6 py-3 font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]"
          >
            Go to homepage
          </Link>
          <Link
            href="/contact"
            className="border border-[var(--ink)] px-6 py-3 font-archivo text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
