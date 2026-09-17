"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PLANS, isVerified, planKeysFor, type Project } from "@/lib/projects";
import { PHONE_DISPLAY, PHONE_TEL, VISIT_DAYS, VISIT_SLOTS, whatsappUrl } from "@/lib/content";

function dedupe(list: string[]) {
  return list.filter((v, i, a) => a.indexOf(v) === i);
}

export default function ProjectDetailClient({ project: p }: { project: Project }) {
  const gallery = useMemo(() => dedupe(p.gallery), [p.gallery]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryMain = gallery[galleryIndex] || gallery[0];

  const planKeys = useMemo(() => planKeysFor(p.config), [p.config]);
  const [planIndex, setPlanIndex] = useState(() => Math.min(1, planKeys.length - 1));
  const activePlan = planKeys[Math.min(planIndex, planKeys.length - 1)];
  const planRows =
    p.verifiedPlans && PLANS[activePlan]
      ? PLANS[activePlan]
      : [
          { k: "Configuration", v: activePlan },
          { k: "Area range, project", v: p.area },
          { k: "Carpet area", v: "On request" },
          { k: "Balconies", v: "On request" },
          { k: "Bathrooms", v: "On request" },
          { k: "Indicative price", v: "On request" },
        ];
  const planNote = p.verifiedPlans
    ? ""
    : "Plan-level areas and pricing are shared once the developer releases the current set. The area range above is the project’s own declared range.";

  const [visitDay, setVisitDay] = useState(0);
  const [visitSlot, setVisitSlot] = useState(0);
  const [visitRequested, setVisitRequested] = useState(false);

  const verified = isVerified(p);
  const legal = [
    { k: "RERA registration", v: p.rera },
    { k: "Approving authority", v: verified ? "BIAAPA / BBMP" : "On request" },
    { k: "Khata", v: verified ? "A khata, converted land" : "On request" },
    { k: "Title report", v: verified ? "Clear — opinion on file" : "Pending our review" },
    { k: "Encumbrance certificate", v: verified ? "Nil, 30-year search" : "Pending our review" },
    { k: "Bank approvals", v: verified ? "HDFC, ICICI, SBI, Axis" : "On request" },
    { k: "Occupancy certificate", v: p.possession === "Ready" ? "Issued" : verified ? "On completion" : "On request" },
  ];
  const approvalsNote = verified
    ? "We share the full approval file, title report and encumbrance certificate before any booking amount is paid."
    : "This project is newly added to our list, so the approval file is still being collected. We verify the title report, khata and encumbrance certificate ourselves, and share all three before any booking amount is paid.";

  const keyFacts = [
    { k: "Configuration", v: p.config },
    { k: "Carpet area", v: p.area },
    { k: "Possession", v: p.possession },
    { k: "Units", v: p.units },
  ];

  const walkthroughUrl = `https://www.youtube.com/@SoniasRealtyMedia/search?query=${encodeURIComponent(p.title)}`;
  const waProjectUrl = whatsappUrl(`Hi Sonia, I would like details on ${p.title}.`);
  const psfLine = p.psf === "On request" ? "Verified price list shared on request" : `${p.psf} · all inclusive`;
  const mapQuery = encodeURIComponent(`${p.title}, ${p.location}, Bengaluru`);

  const videos = [
    { title: "Full site walkthrough", duration: "14:02" },
    { title: `Sample flat, ${p.config.split(" ")[0]} BHK`, duration: "6:41" },
    { title: "Locality drive", duration: "9:15" },
    { title: "Amenity deck tour", duration: "8:12" },
  ].map((v, i) => ({ ...v, image: gallery[i % gallery.length] }));

  const alsoConsider = PROJECTS.filter((x) => x.id !== p.id).slice(0, 3);
  const visitSummary = `Sep ${VISIT_DAYS[visitDay].date} at ${VISIT_SLOTS[visitSlot]} · ${p.title}`;

  return (
    <div>
      <div className="border-b border-[var(--hairline)] bg-[var(--placeholder-plate)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-2.5 font-archivo text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)]">
          <Link href="/projects" className="font-semibold text-[var(--gold-text)]">
            Projects
          </Link>
          <span className="mx-2.5">/</span>
          {p.location}
          <span className="mx-2.5">/</span>
          {p.title}
        </div>
      </div>

      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-x-12 gap-y-6 px-[clamp(16px,3vw,32px)] py-[clamp(30px,3.6vw,44px)] pb-[clamp(24px,3vw,34px)]">
          <div className="min-w-0 flex-1 basis-[520px]">
            <div className="mb-3.5 flex flex-wrap items-center gap-3.5">
              <span className="border border-[var(--gold)] px-3 py-1.5 font-archivo text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                {p.status}
              </span>
              <span className="font-archivo text-[10.5px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">{p.builder}</span>
            </div>
            <h1 className="m-0 mb-3 font-playfair text-[clamp(36px,6vw,72px)] font-bold leading-none tracking-[-0.035em]">{p.title}</h1>
            <div className="font-lora text-[clamp(15px,1.6vw,17px)] text-[var(--muted-3)]">
              {p.location}, Bengaluru &middot; {p.units} &middot; {p.config}
            </div>
          </div>
          <div className="flex-none">
            <div className="mb-2 font-archivo text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-1)]">Starting from</div>
            <div className="font-playfair text-[clamp(36px,4.4vw,52px)] font-bold leading-none [font-feature-settings:'tnum']">{p.price}</div>
            <div className="mt-2 font-lora text-sm text-[var(--muted-1)] [font-feature-settings:'tnum']">{psfLine}</div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1560px] items-start px-[clamp(16px,3vw,32px)] lg:grid-cols-[minmax(0,1fr)_392px]">
        <div className="flex min-w-0 flex-col border-r border-[var(--hairline)] pr-0 lg:pr-[clamp(28px,3.4vw,60px)]">
          <div className="min-w-0 border-b-2 border-[var(--ink)] py-8">
            <div className="mb-3.5">
              <div className="relative h-[clamp(260px,26vw,380px)] w-full">
                <Image src={galleryMain} alt={p.title} fill className="object-cover [filter:sepia(.18)_saturate(.8)_contrast(1.04)]" />
              </div>
            </div>
            {gallery.length > 1 && (
              <div className="mb-3 grid grid-cols-[repeat(auto-fill,88px)] gap-2">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className="relative h-[60px] border-0 bg-transparent p-0"
                    style={{ boxShadow: galleryIndex === i ? "inset 0 0 0 3px var(--gold)" : "none" }}
                  >
                    <Image
                      src={src}
                      alt={`${p.title} ${i + 1}`}
                      fill
                      className="object-cover [filter:sepia(.18)_saturate(.8)]"
                      style={{ opacity: galleryIndex === i ? 1 : 0.72 }}
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-b border-[var(--hairline)] pb-5 font-archivo text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-2)]">
              <span>Representative imagery &middot; site photographs and walkthrough on request</span>
              <a href="#" className="text-[var(--gold-text)]">
                Open full gallery
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 border-b border-[var(--hairline)] py-5">
              <a
                href={`/brochures/${p.id}.pdf`}
                target="_blank"
                rel="noopener"
                className="flex-1 basis-[150px] border border-[var(--gold)] py-3.5 text-center font-archivo text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)] transition-colors hover:bg-[rgba(182,130,53,.12)]"
              >
                Download brochure
              </a>
              <a
                href={walkthroughUrl}
                target="_blank"
                rel="noopener"
                className="flex-1 basis-[150px] border border-black/[.25] py-3.5 text-center font-archivo text-[11.5px] font-medium uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
              >
                Watch video
              </a>
            </div>

            <div className="grid border-b border-[var(--hairline)] border-t-2 border-t-[var(--ink)] [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]">
              {keyFacts.map((f) => (
                <div key={f.k} className="py-4 pr-4">
                  <div className="mb-1.5 font-archivo text-[9.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-2)]">{f.k}</div>
                  <div className="font-playfair text-[19px] font-semibold">{f.v}</div>
                </div>
              ))}
            </div>

            <div className="pt-[30px]">
              <h2 className="m-0 mb-4 font-playfair text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.03em]">The honest read</h2>
              <p className="m-0 mb-4 text-justify font-lora text-[15px] leading-[1.75] text-[var(--muted-4)]">{p.body1}</p>
              <p className="m-0 text-justify font-lora text-[15px] leading-[1.75] text-[var(--muted-4)]">{p.body2}</p>
            </div>
          </div>

          <div className="min-w-0 py-10 pb-14">
            <div className="border-b border-[var(--hairline)] pb-[30px]">
              <div className="mb-[18px] flex flex-wrap items-end justify-between gap-3.5">
                <h2 className="m-0 font-playfair text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.03em]">Floor plans</h2>
                <div className="flex flex-wrap">
                  {planKeys.map((key, i) => (
                    <button
                      key={key}
                      onClick={() => setPlanIndex(i)}
                      className="-ml-px border border-black/20 px-3.5 py-2.5 font-archivo text-[10.5px] font-bold uppercase tracking-[0.1em]"
                      style={{
                        background: planIndex === i ? "var(--ink)" : "transparent",
                        color: planIndex === i ? "var(--card)" : "var(--ink)",
                      }}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-[clamp(24px,3.2vw,48px)] border-t-2 border-[var(--ink)] pt-[26px] [grid-template-columns:repeat(auto-fit,minmax(310px,1fr))]">
                <div className="min-w-0">
                  <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-2.5 border border-black/20 bg-[var(--placeholder-plate)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b9797" strokeWidth="1.2">
                      <path d="M3 3h18v18H3z" />
                      <path d="M3 10h9M12 10v11M12 14h9" />
                    </svg>
                    <div className="font-archivo text-[9.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-2)]">
                      Plan drawing to be supplied
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  {planRows.map((r) => (
                    <div key={r.k} className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-black/[.12] py-[13px]">
                      <span className="font-archivo text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">{r.k}</span>
                      <span className="min-w-0 text-right font-lora text-base [font-feature-settings:'tnum']">{r.v}</span>
                    </div>
                  ))}
                  {planNote && <p className="m-0 mt-4 font-lora text-[13px] leading-[1.65] text-[var(--muted-1)]">{planNote}</p>}
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <a href="#" className="border border-[var(--gold)] px-4 py-2.5 font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)]">
                      Download plan set
                    </a>
                    <a href="#" className="border border-black/20 px-4 py-2.5 font-archivo text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                      Cost sheet
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-[var(--hairline)] py-[30px]">
              <h2 className="m-0 mb-[18px] font-playfair text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.03em]">Locality &amp; connectivity</h2>
              <div className="flex flex-wrap gap-[clamp(24px,3vw,36px)]">
                <div className="min-w-0 flex-1 basis-[320px]">
                  <div className="overflow-hidden border border-black/20 bg-[var(--placeholder-plate)]">
                    <iframe
                      src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                      width="100%"
                      height="330"
                      className="block h-[clamp(260px,28vw,330px)] w-full border-0 [filter:sepia(.12)_saturate(.9)]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${p.title} location`}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[var(--gold)] px-3.5 py-2.5 font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)]"
                    >
                      Open in Google Maps
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black/[.25] px-4 py-2.5 font-archivo text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink)]"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 basis-[280px]">
                  <div className="border-t-2 border-[var(--ink)]">
                    {p.connectivity.map((c) => (
                      <div key={c.place} className="flex items-baseline justify-between gap-4 border-b border-black/10 py-[11px]">
                        <span className="font-lora text-[15.5px]">{c.place}</span>
                        <span className="whitespace-nowrap font-archivo text-xs text-[var(--muted-3)] [font-feature-settings:'tnum']">{c.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-[var(--hairline)] py-[30px]">
              <h2 className="m-0 mb-[18px] font-playfair text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.03em]">Amenities</h2>
              <div className="grid border-l border-t border-[var(--hairline)] [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
                {p.amenities.map((a) => (
                  <div key={a} className="border-b border-r border-[var(--hairline)] px-3.5 py-3 font-lora text-[14.5px]">
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-[30px]">
              <h2 className="m-0 mb-[18px] font-playfair text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.03em]">Approvals &amp; legal</h2>
              <div className="border-t-2 border-[var(--ink)]">
                {legal.map((l) => (
                  <div key={l.k} className="flex flex-wrap border-b border-[var(--hairline)]">
                    <div className="flex-[0_1_180px] py-3 pr-4 font-archivo text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">{l.k}</div>
                    <div className="min-w-0 flex-1 basis-[200px] break-words border-l border-[var(--hairline)] py-3 pl-4 font-lora text-[14.5px] [font-feature-settings:'tnum']">
                      {l.v}
                    </div>
                  </div>
                ))}
              </div>
              <p className="m-0 mt-4 font-lora text-[13px] leading-[1.65] text-[var(--muted-1)]">{approvalsNote}</p>
            </div>
          </div>
        </div>

        <aside className="min-w-0 py-8 pb-14 lg:pl-[clamp(28px,3.4vw,60px)]">
          <div className="sticky top-[120px] flex flex-col gap-5">
            <div className="border-2 border-[var(--ink)] bg-[var(--card)] p-[22px]">
              <div className="mb-4 font-archivo text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-1)]">Book a site visit</div>
              <div className="mb-3 flex gap-2">
                {VISIT_DAYS.map((d, i) => (
                  <button
                    key={d.date}
                    onClick={() => setVisitDay(i)}
                    className="flex-1 border py-2.5 font-archivo text-[10px] font-medium uppercase tracking-[0.08em]"
                    style={{
                      borderColor: visitDay === i ? "var(--ink)" : "rgba(32,31,29,.25)",
                      background: visitDay === i ? "var(--ink)" : "transparent",
                      color: visitDay === i ? "var(--card)" : "var(--ink)",
                    }}
                  >
                    <span className="block text-[9px] opacity-70">{d.dow}</span>
                    <span className="mt-[3px] block font-playfair text-[22px] font-semibold [font-feature-settings:'tnum']">{d.date}</span>
                  </button>
                ))}
              </div>
              <div className="mb-4 flex gap-2">
                {VISIT_SLOTS.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setVisitSlot(i)}
                    className="flex-1 border py-[9px] font-archivo text-[10px] font-medium uppercase tracking-[0.1em] [font-feature-settings:'tnum']"
                    style={{
                      borderColor: visitSlot === i ? "var(--ink)" : "rgba(32,31,29,.25)",
                      background: visitSlot === i ? "var(--ink)" : "transparent",
                      color: visitSlot === i ? "var(--card)" : "var(--ink)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <input placeholder="Your name" className="mb-2 w-full border border-black/25 bg-white px-3.5 py-3 font-lora text-[15px] outline-none" />
              <input placeholder="Phone" className="mb-3 w-full border border-black/25 bg-white px-3.5 py-3 font-lora text-[15px] outline-none" />
              <button
                onClick={() => setVisitRequested(true)}
                className="w-full bg-[var(--gold)] py-[15px] font-archivo text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]"
              >
                {visitRequested ? "Request received" : "Confirm visit"}
              </button>
              <div className="mt-3 text-center font-archivo text-[9.5px] font-medium uppercase tracking-[0.1em] text-[var(--muted-2)]">
                {visitSummary}
              </div>
            </div>

            <div className="border border-black/20 p-5">
              <div className="mb-3.5 flex items-center gap-3.5">
                <Image src="/images/logo.png" alt="Advisor" width={44} height={44} className="h-11 w-11 object-contain" />
                <div>
                  <div className="font-pinyon text-[26px] leading-none text-[var(--gold-text)]">Sonia</div>
                  <div className="mt-1.5 font-archivo text-[9.5px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">Principal advisor</div>
                </div>
              </div>
              <div className="mb-3.5 font-lora text-[14.5px] leading-[1.7] text-[var(--muted-3)]">{p.advisorNote}</div>
              <div className="flex flex-col gap-2">
                <a
                  href={waProjectUrl}
                  target="_blank"
                  rel="noopener"
                  className="border border-[var(--ink)] py-3 text-center font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
                >
                  WhatsApp about {p.title}
                </a>
                <a href={`tel:${PHONE_TEL}`} className="py-1.5 text-center font-archivo text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--gold-text)] [font-feature-settings:'tnum']">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="border-t border-[var(--hairline)] pt-4">
              <div className="mb-2.5 font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">Also consider</div>
              {alsoConsider.map((a) => (
                <Link
                  key={a.id}
                  href={`/projects/${a.id}`}
                  className="flex w-full items-baseline justify-between gap-3 border-b border-black/10 py-[11px] text-left"
                >
                  <span className="font-playfair text-lg font-semibold">{a.title}</span>
                  <span className="whitespace-nowrap font-archivo text-[11px] text-[var(--muted-3)] [font-feature-settings:'tnum']">{a.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="border-t-2 border-[var(--ink)] bg-[var(--panel-dark)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(44px,5vw,64px)]">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-3.5">
            <h2 className="m-0 font-playfair text-[clamp(26px,3.4vw,40px)] font-bold tracking-[-0.03em] text-[var(--card)]">
              Walkthroughs of {p.title}
            </h2>
            <div className="font-archivo text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--gold-warm)]">
              Four films &middot; stills to be supplied
            </div>
          </div>
          <div className="grid gap-0.5 bg-white/20 [grid-template-columns:repeat(auto-fit,minmax(min(100%,196px),1fr))]">
            {videos.map((v) => (
              <a key={v.title} href="#" className="relative block min-w-0 bg-[var(--ink)]">
                <div className="relative h-[200px] w-full opacity-[.68]">
                  <Image src={v.image} alt={v.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4.5">
                  <div className="mb-1.5 font-archivo text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[var(--gold-warm)]">{v.duration}</div>
                  <div className="font-playfair text-xl font-semibold leading-[1.15] text-[var(--card)]">{v.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
