import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICES_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Real Estate Services in Bengaluru",
  description: "Property search, home loan sanctioning across six banks, investment advisory, NRI asset management and registration & handover in Bengaluru — free to buyers, paid by the developer.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Real Estate Services in Bengaluru | Sonia's Realty Media", url: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-end gap-x-[clamp(32px,4vw,64px)] gap-y-6 px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(30px,3.4vw,44px)]">
          <div className="min-w-0 flex-1 basis-[520px]">
            <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">Services</div>
            <h1 className="m-0 max-w-[760px] font-playfair text-[clamp(34px,5.6vw,66px)] font-bold leading-[1.02] tracking-[-0.035em]">
              Five things we do, and the order we do them in
            </h1>
          </div>
          <p className="m-0 min-w-0 flex-1 basis-[340px] text-justify font-lora text-[clamp(15.5px,1.5vw,17px)] leading-[1.75] text-[var(--muted-3)]">
            Most buyers arrive with a budget and a shortlist off a portal. We start earlier than that &mdash; with what you can actually borrow &mdash; and stay until the sale deed is registered in your name.
          </p>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)]">
          {SERVICES.map((s) => (
            <div key={s.num} className="flex flex-wrap border-b border-[var(--hairline)] py-[clamp(28px,3.5vw,44px)]">
              <div className="flex-none basis-[90px] font-playfair text-[clamp(40px,4.6vw,56px)] font-bold leading-[.9] text-[#d7d3d3] [font-feature-settings:'tnum']">
                {s.num}
              </div>
              <div className="min-w-0 flex-1 basis-[380px] pr-0 lg:pr-[clamp(0px,3vw,48px)]" style={{ flexGrow: 2 }}>
                <h2 className="m-0 mb-3 font-playfair text-[clamp(26px,3.2vw,36px)] font-semibold tracking-[-0.025em]">{s.title}</h2>
                <p className="m-0 mb-[18px] max-w-[620px] text-justify font-lora text-[clamp(15.5px,1.5vw,16.5px)] leading-[1.75] text-[var(--muted-4)]">
                  {s.body}
                </p>
                <Link href={s.href} className="border-b border-[var(--gold)] pb-1 font-archivo text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]">
                  {s.cta}
                </Link>
              </div>
              <div className="min-w-0 flex-1 basis-[280px] border-l border-[var(--hairline)] pl-[clamp(16px,2.4vw,32px)]">
                <div className="mb-3 font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">What it includes</div>
                {s.includes.map((i) => (
                  <div key={i} className="flex gap-2.5 border-b border-black/10 py-2 font-lora text-[15px] text-[var(--muted-4)]">
                    <span className="text-[var(--gold)]">&mdash;</span>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <h2 className="m-0 mb-[30px] font-playfair text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.03em]">Questions we get often</h2>
          <div className="border-t-2 border-[var(--ink)]">
            {SERVICES_FAQS.map((f) => (
              <div key={f.q} className="flex flex-wrap gap-x-10 gap-y-1.5 border-b border-[var(--hairline)] py-[22px]">
                <div className="min-w-0 flex-1 basis-[320px] font-playfair text-[19px] font-semibold tracking-[-0.01em]">{f.q}</div>
                <div className="min-w-0 flex-1 basis-[420px] font-lora text-[15.5px] leading-[1.7] text-[var(--muted-4)]" style={{ flexGrow: 2 }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-t-2 border-[var(--ink)] bg-[var(--panel-dark)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-x-[clamp(32px,4vw,56px)] gap-y-7 px-[clamp(16px,3vw,32px)] py-[clamp(44px,5vw,64px)]">
          <div className="min-w-0 flex-1 basis-[520px]">
            <div className="mb-6 h-0.5 w-16 bg-[var(--gold)]" />
            <h2 className="m-0 mb-3.5 max-w-[760px] font-playfair text-[clamp(28px,4.2vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--card)]">
              Our fee comes from the developer. Our advice comes from six years of watching these projects hand over.
            </h2>
            <p className="m-0 max-w-[560px] font-lora text-[clamp(16px,1.6vw,17px)] leading-[1.7] text-white/[.66]">
              You pay nothing for the shortlist, the site visits, or the loan help.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-[var(--gold)] px-[30px] py-[17px] font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]"
          >
            Start with a call
          </Link>
        </div>
      </section>
    </div>
  );
}
