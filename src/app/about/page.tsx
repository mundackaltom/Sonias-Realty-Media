import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { ABOUT_FAQS, CREDENTIALS, QUOTES, TIMELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "A three-person RERA-registered residential advisory in Bengaluru since 2020 — clean title, verified pricing and no fee to buyers. 108 homes handed over across 17 micro-markets.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Sonia's Realty Media", url: "/about" },
};

const FIGURES = [
  { value: "6", label: "Years advising" },
  { value: "108", label: "Homes handed over" },
  { value: String(PROJECTS.length), label: "Live projects" },
  { value: "0%", label: "Fee for buyers" },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(32px,3.6vw,48px)]">
          <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
            About the practice
          </div>
          <div className="mb-2.5 font-pinyon text-[clamp(34px,4.4vw,52px)] leading-none text-[var(--gold-text)]">Sonia&#8217;s</div>
          <h1 className="m-0 mb-[30px] max-w-[1000px] font-playfair text-[clamp(36px,6vw,74px)] font-bold leading-none tracking-[-0.035em]">
            A three-person advisory built for this city&#8217;s next phase
          </h1>
          <div className="grid gap-[clamp(24px,3.5vw,56px)] border-t-2 border-[var(--ink)] pt-7 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
            <p className="m-0 text-justify font-lora text-[clamp(15.5px,1.5vw,16.5px)] leading-[1.8] text-[var(--muted-4)]">
              Sonia&#8217;s Realty Media began in 2020 with one listing in Yeshwantpur and a conviction that buyers were being sold to rather than advised. Six years later the practice has handed over more than 108 homes across nine micro-markets, and the method has not changed: read the approval file first, walk the site twice, and put every number on the table before anyone signs.
            </p>
            <p className="m-0 text-justify font-lora text-[clamp(15.5px,1.5vw,16.5px)] leading-[1.8] text-[var(--muted-4)]">
              We work with seven developers and decline far more launches than we take. A project has to clear three tests &mdash; clean title, a builder who has handed over on time before, and a price that survives comparison with the street &mdash; before it appears on this site. That is why the list is thirty-four projects long and not four hundred.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)]">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
            {FIGURES.map((f) => (
              <div key={f.label} className="border-l border-[var(--hairline)] py-[30px] pr-5">
                <div className="pl-[22px]">
                  <div className="font-playfair text-[clamp(38px,4vw,52px)] font-bold leading-none tracking-[-0.03em] [font-feature-settings:'tnum']">
                    {f.value}
                  </div>
                  <div className="mt-3 font-archivo text-[10.5px] font-medium uppercase tracking-[0.2em] text-[var(--muted-1)]">{f.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-start gap-[clamp(32px,4vw,56px)] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="min-w-0 flex-1 basis-[460px]" style={{ flexGrow: 2 }}>
            <h2 className="m-0 mb-[26px] font-playfair text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.03em]">Six years, briefly</h2>
            <div className="relative">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className="relative flex gap-5 pb-9">
                  <div className="relative flex flex-none basis-[14px] justify-center">
                    <span
                      className="absolute top-0 w-px bg-black/20"
                      style={{ bottom: i === TIMELINE.length - 1 ? "calc(100% - 9px)" : "-36px" }}
                    />
                    <span className="relative z-10 mt-[3px] h-[11px] w-[11px] rounded-full border-2 border-[var(--gold)] bg-[var(--paper)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 font-archivo text-xs font-semibold tracking-[0.14em] text-[var(--gold-text)] [font-feature-settings:'tnum']">
                      {t.year}
                    </div>
                    <div className="font-lora text-base leading-[1.7] text-[var(--muted-4)]">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-1 basis-[420px] flex-col">
            <div className="mb-5 font-archivo text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-1)]">On record</div>
            <div className="border-t-2 border-[var(--ink)]">
              {CREDENTIALS.map((c) => (
                <div key={c.k} className="border-b border-[var(--hairline)] py-7">
                  <div className="mb-2.5 font-archivo text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">{c.k}</div>
                  <div className="break-words font-playfair text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.2]">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-t-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="mb-[30px] font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-1)]">Clients</div>
          <div className="grid border-l border-[var(--hairline)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
            {QUOTES.map((q) => (
              <figure key={q.who} className="m-0 border-r border-[var(--hairline)] px-[clamp(20px,2.6vw,40px)]">
                <blockquote className="m-0 mb-[22px] font-playfair text-[clamp(22px,2.4vw,27px)] italic leading-[1.38]">
                  &#8220;{q.text}&#8221;
                </blockquote>
                <figcaption className="font-archivo text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)]">{q.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <h2 className="m-0 mb-[30px] font-playfair text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.03em]">Questions we get often</h2>
          <div className="border-t-2 border-[var(--ink)]">
            {ABOUT_FAQS.map((f) => (
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
    </div>
  );
}
