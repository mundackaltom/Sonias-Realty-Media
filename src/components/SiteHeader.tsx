"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname.startsWith("/projects");
    return pathname.startsWith(href);
  };

  // Close the drawer on navigation, including browser back/forward.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  // While the drawer is open, keep the page behind it still and allow Escape to close.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-[1560px] flex-nowrap items-stretch justify-between gap-x-4 px-[clamp(16px,3vw,32px)] min-[1150px]:flex-wrap min-[1150px]:gap-x-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 py-3 -ml-[clamp(10px,1.8vw,24px)] text-left sm:gap-3.5 sm:py-4"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Sonia's Realty Media"
            width={54}
            height={54}
            className="h-[38px] w-auto flex-none object-contain sm:h-[clamp(42px,3.6vw,54px)]"
          />
          <span className="ml-0.5 flex min-w-0 flex-col leading-[1.05] sm:ml-1.5">
            <span className="font-playfair text-[clamp(16px,4.4vw,19px)] font-bold tracking-[-0.015em] text-[var(--ink)] sm:text-[clamp(19px,2vw,24px)]">
              Sonia&#8217;s Realty Media
            </span>
            <span className="mt-1 font-archivo text-[7.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)] sm:mt-1.5 sm:text-[9.5px] sm:tracking-[0.26em]">
              Residential advisory &middot; Bengaluru
            </span>
          </span>
        </Link>

        {/* Mobile / tablet: hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 flex-none items-center justify-center self-center border border-[var(--hairline)] text-[var(--ink)] min-[1150px]:hidden"
        >
          <span className="relative block h-[14px] w-[22px]">
            <span
              className={`absolute left-0 block h-[2px] w-full bg-current transition-transform duration-200 ${
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full bg-current transition-transform duration-200 ${
                menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>

        {/* Desktop: full nav, unchanged */}
        <nav className="ml-auto hidden flex-wrap items-stretch justify-end font-archivo text-[12.5px] font-medium uppercase tracking-[0.1em] min-[1150px]:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center border-l border-[var(--hairline)] px-[clamp(12px,1.6vw,22px)] py-3.5 ${
                  active
                    ? "bg-[var(--placeholder-plate)] text-[var(--ink)] shadow-[inset_0_-3px_0_var(--gold)]"
                    : "bg-transparent text-[var(--muted-1)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="flex items-center justify-end border-l border-[var(--hairline)] pl-[clamp(24px,3vw,40px)]">
            <Link
              href="/contact"
              className="border border-[var(--gold)] px-[18px] py-2.5 font-archivo text-xs font-semibold uppercase tracking-[0.1em] text-[var(--gold-text)] transition-colors hover:bg-[rgba(182,130,53,.12)]"
            >
              Contact us
            </Link>
          </span>
        </nav>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="site-menu"
        inert={!menuOpen}
        className={`overflow-hidden border-t border-[var(--hairline)] bg-[var(--paper)] transition-[max-height] duration-300 ease-out min-[1150px]:hidden ${
          menuOpen ? "max-h-[calc(100dvh-72px)] overflow-y-auto" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col font-archivo text-[13px] font-medium uppercase tracking-[0.12em]">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center border-b border-[var(--hairline)] px-[clamp(16px,3vw,32px)] py-4 ${
                  active
                    ? "bg-[var(--placeholder-plate)] text-[var(--ink)] shadow-[inset_3px_0_0_var(--gold)]"
                    : "text-[var(--muted-3)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-2.5 px-[clamp(16px,3vw,32px)] py-5">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--gold)] py-3.5 text-center font-archivo text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--ink)]"
          >
            Contact us
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setMenuOpen(false)}
            className="border border-[var(--hairline)] py-3.5 text-center font-archivo text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--gold-text)] [font-feature-settings:'tnum']"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}
