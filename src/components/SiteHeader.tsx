"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname.startsWith("/projects");
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-[1560px] flex-wrap items-stretch justify-between gap-x-8 px-[clamp(16px,3vw,32px)]">
        <Link
          href="/"
          className="flex items-center gap-3.5 py-4 -ml-[clamp(10px,1.8vw,24px)] text-left"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Sonia's Realty Media"
            width={54}
            height={54}
            className="h-[clamp(42px,3.6vw,54px)] w-auto object-contain"
          />
          <span className="ml-1.5 flex flex-col leading-[1.05]">
            <span className="font-playfair text-[clamp(19px,2vw,24px)] font-bold tracking-[-0.015em] text-[var(--ink)]">
              Sonia&#8217;s Realty Media
            </span>
            <span className="mt-1.5 font-archivo text-[9.5px] font-medium uppercase tracking-[0.26em] text-[var(--muted-1)]">
              Residential advisory &middot; Bengaluru
            </span>
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-stretch justify-end font-archivo text-[12.5px] font-medium uppercase tracking-[0.1em]">
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
    </header>
  );
}
