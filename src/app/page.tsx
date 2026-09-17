import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { CREDENTIALS, DEVELOPER_LOGOS, LENDER_LOGOS, MARQUEE_ITEMS, QUOTES, whatsappUrl } from "@/lib/content";
import HomeSearchBand from "@/components/HomeSearchBand";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";

const FIGURES = [
  { value: "6", label: "Years advising" },
  { value: "108", label: "Homes handed over" },
  { value: String(PROJECTS.length), label: "Live projects" },
  { value: "0%", label: "Fee for buyers" },
];

export default function Home() {
  const featured = PROJECTS.slice(0, 3);
  const marqueeX2 = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      {/* Top marquee strip */}
      <div className="overflow-hidden whitespace-nowrap border-b border-black/[.15] bg-[var(--gold-text)]">
        <div className="srm-marquee-track flex w-max" style={{ "--srm-marquee-duration": "48s" } as React.CSSProperties}>
          {[...marqueeX2, ...marqueeX2].map((m, i) => (
            <span
              key={i}
              className="flex items-center border-l border-white/[.22] px-[clamp(18px,2.2vw,30px)] py-2 font-archivo text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--card)]"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative grid min-h-[clamp(560px,86vh,820px)] bg-[var(--ink)] md:grid-cols-[minmax(320px,46%)_1fr]">
        <div className="relative z-[2] flex flex-col justify-center gap-7 px-[clamp(24px,4vw,56px)] py-[clamp(40px,6vw,88px)]">
          <div className="font-archivo text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--gold-warm)]">
            Bengaluru residential advisory
          </div>
          <h1 className="m-0 font-playfair text-[clamp(40px,6vw,74px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--card)]">
            Find your dream home &mdash; the honest way
          </h1>
          <div className="h-px w-16 bg-[var(--gold)]" />
          <p className="m-0 max-w-[440px] font-lora text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-white/80">
            Independent advice on Bengaluru&#8217;s residential launches &mdash; every project verified, every number on the table before you commit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="bg-[var(--gold)] px-[30px] py-4 font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]"
            >
              Browse all projects
            </Link>
            <Link
              href="/contact"
              className="border border-white/50 px-[30px] py-4 font-archivo text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--card)] transition-colors hover:bg-white/10"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
        <div className="relative order-first overflow-hidden md:order-none">
          <Image
            src="/images/hero.jpg"
            alt="Bengaluru residential skyline"
            fill
            priority
            className="object-cover [filter:sepia(.14)_saturate(.8)_contrast(1.05)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(24,23,22,.9)] to-transparent md:[background:linear-gradient(90deg,rgba(24,23,22,.9)_0%,rgba(24,23,22,0)_16%)]" />
        </div>
      </section>

      <HomeSearchBand />

      {/* Figures */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)]">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
            {FIGURES.map((f) => (
              <div key={f.label} className="border-l border-[var(--hairline)] py-[30px] pr-5">
                <div className="pl-[22px]">
                  <div className="font-playfair text-[clamp(38px,4vw,52px)] font-bold leading-none tracking-[-0.03em] [font-feature-settings:'tnum']">
                    {f.value}
                  </div>
                  <div className="mt-3 font-archivo text-[10.5px] font-medium uppercase tracking-[0.2em] text-[var(--muted-1)]">
                    {f.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="mb-3.5 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div>
              <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
                Currently advising on
              </div>
              <h2 className="m-0 font-playfair text-[clamp(32px,4.4vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
                Featured projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="border-b border-[var(--gold)] py-1.5 font-archivo text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]"
            >
              All {PROJECTS.length} projects
            </Link>
          </div>
          <div className="h-0.5 bg-[var(--ink)]" />
          <div className="grid border-l border-[var(--hairline)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,264px),1fr))]">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Developers strip */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(26px,3vw,40px)]">
          <div className="mb-[clamp(18px,2.2vw,26px)] flex flex-wrap items-baseline justify-between gap-x-[clamp(28px,4vw,64px)] gap-y-2.5">
            <div className="font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
              Authorised channel partner
            </div>
            <p className="m-0 max-w-[640px] flex-1 basis-[420px] font-lora text-[clamp(14.5px,1.3vw,16px)] leading-[1.7] text-[var(--muted-3)]">
              We are an authorised channel partner for the developers below, which is how launch pricing reaches you before it reaches the portals.
            </p>
          </div>
          <Marquee logos={DEVELOPER_LOGOS} durationSeconds={136} />
        </div>
      </section>

      {/* Advisor */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-start gap-[clamp(32px,4vw,64px)] px-[clamp(16px,3vw,32px)] py-[clamp(44px,5vw,72px)]">
          <div className="min-w-0 flex-1 basis-[320px]">
            <div className="h-[clamp(320px,38vw,480px)] w-full overflow-hidden border border-[var(--hairline)]">
              <Image
                src="/images/sonia.jpeg"
                alt="Sonia"
                width={480}
                height={480}
                className="h-full w-full origin-[50%_28%] scale-125 object-cover [filter:sepia(.1)_saturate(.9)_contrast(1.03)]"
                style={{ objectPosition: "50% 28%" }}
              />
            </div>
            <div className="mt-2.5 font-archivo text-[10px] uppercase tracking-[0.16em] text-[var(--muted-2)]">Sonia</div>
          </div>
          <div className="min-w-0 flex-1 basis-[480px]">
            <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
              Who you deal with
            </div>
            <h2 className="m-0 mb-[22px] max-w-[640px] font-playfair text-[clamp(30px,4vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">
              One advisor, from shortlist to registration
            </h2>
            <p className="m-0 mb-[18px] max-w-[640px] text-justify font-lora text-[clamp(15.5px,1.5vw,17px)] leading-[1.78] text-[var(--muted-4)]">
              Sonia&#8217;s Realty Media is a three-person advisory, not a call centre. You speak to the same person through shortlisting, site visits, price negotiation, loan sanction and registration &mdash; and you get the numbers that builders normally leave out of the brochure.
            </p>
            <p className="m-0 mb-[30px] max-w-[640px] text-justify font-lora text-[clamp(15.5px,1.5vw,17px)] leading-[1.78] text-[var(--muted-4)]">
              We are paid by the developer on closing, so our advice costs you nothing &mdash; and we tell you when a project is wrong for you.
            </p>
            <div className="grid max-w-[640px] border-t-2 border-[var(--ink)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
              {CREDENTIALS.map((c) => (
                <div key={c.k} className="border-b border-[var(--hairline)] py-[18px] pr-5">
                  <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">
                    {c.k}
                  </div>
                  <div className="break-words font-lora text-base [font-feature-settings:'tnum']">{c.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener"
                className="bg-[var(--ink)] px-[26px] py-[15px] font-archivo text-xs font-bold uppercase tracking-[0.14em] text-[var(--card)] transition-colors hover:bg-[#444141]"
              >
                WhatsApp Sonia
              </a>
              <Link
                href="/about"
                className="border border-black/30 px-[26px] py-[15px] font-archivo text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
              >
                About the practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders strip */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(26px,3vw,40px)]">
          <div className="mb-[clamp(18px,2.2vw,26px)] flex flex-wrap items-baseline justify-between gap-x-[clamp(28px,4vw,64px)] gap-y-2.5">
            <div className="font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
              Home loan partners
            </div>
            <p className="m-0 max-w-[640px] flex-1 basis-[420px] font-lora text-[clamp(14.5px,1.3vw,16px)] leading-[1.7] text-[var(--muted-3)]">
              Loan files go to six lenders in parallel, not one &mdash; so the rate you are offered is a comparison, not a quote.
            </p>
          </div>
          <Marquee logos={LENDER_LOGOS} durationSeconds={112} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="mb-[30px] font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-1)]">
            Clients
          </div>
          <div className="grid border-l border-[var(--hairline)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
            {QUOTES.map((q) => (
              <figure key={q.who} className="m-0 border-r border-[var(--hairline)] px-[clamp(20px,2.6vw,40px)]">
                <blockquote className="m-0 mb-[22px] font-playfair text-[clamp(22px,2.4vw,27px)] italic leading-[1.38] text-[var(--ink)]">
                  &#8220;{q.text}&#8221;
                </blockquote>
                <figcaption className="font-archivo text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)]">
                  {q.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-b-2 border-[var(--ink)] bg-[var(--panel-dark)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-[clamp(28px,4vw,64px)] px-[clamp(16px,3vw,32px)] py-[clamp(56px,7vw,88px)]">
          <div className="min-w-0 flex-1 basis-[520px]">
            <div className="mb-[26px] h-0.5 w-16 bg-[var(--gold)]" />
            <h2 className="m-0 mb-[18px] max-w-[820px] font-playfair text-[clamp(32px,5vw,62px)] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--card)]">
              Tell us what you are looking for. We will tell you what it really costs.
            </h2>
            <p className="m-0 max-w-[560px] font-lora text-[clamp(16px,1.6vw,18px)] leading-[1.7] text-white/[.66]">
              A thirty-minute call, no obligation. Bring a budget and a locality; leave with a shortlist and a loan plan.
            </p>
          </div>
          <div className="flex min-w-[240px] flex-1 basis-[280px] flex-col gap-3">
            <Link
              href="/contact"
              className="bg-[var(--gold)] px-[30px] py-[17px] text-center font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]"
            >
              Book a consultation
            </Link>
            <a
              href="tel:+919036747821"
              className="border border-white/40 px-[30px] py-[17px] text-center font-archivo text-[12.5px] font-medium uppercase tracking-[0.14em] text-[var(--card)] [font-feature-settings:'tnum'] transition-colors hover:bg-white/10"
            >
              +91 90367 47821
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
