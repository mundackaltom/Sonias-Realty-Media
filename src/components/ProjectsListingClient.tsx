"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS, matchProjects, uniqueSorted, type ProjectFilters } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const CONFIG_FILTER_OPTIONS = ["2 BHK", "3 BHK", "4 BHK"];
const STATUS_FILTER_OPTIONS = ["Ready to move", "Under construction", "New launch"];

const COMPARE_ROW_DEFS: { k: string; key: keyof (typeof PROJECTS)[number] }[] = [
  { k: "Developer", key: "builder" },
  { k: "Locality", key: "location" },
  { k: "Starting price", key: "price" },
  { k: "Rate per sq ft", key: "psf" },
  { k: "Configuration", key: "config" },
  { k: "Carpet range", key: "area" },
  { k: "Possession", key: "possession" },
  { k: "Status", key: "status" },
];

export default function ProjectsListingClient() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<ProjectFilters>(() => ({
    locality: searchParams.get("locality"),
    config: searchParams.get("config"),
    status: searchParams.get("status"),
  }));
  const [compare, setCompare] = useState<string[]>(() => {
    const c = searchParams.get("compare");
    return c ? [c] : [];
  });
  const [showCompare, setShowCompare] = useState(false);

  const localities = useMemo(() => uniqueSorted(PROJECTS.map((p) => p.location)), []);
  const builders = useMemo(() => uniqueSorted(PROJECTS.map((p) => p.builder)), []);

  const pickFilter = (group: keyof ProjectFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [group]: prev[group] === value ? null : value }));
  };

  const toggleCompare = (id: string) => {
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const listing = useMemo(() => matchProjects(PROJECTS, filters), [filters]);
  const compareProjects = useMemo(() => PROJECTS.filter((p) => compare.includes(p.id)), [compare]);

  const countBy = (fn: (p: (typeof PROJECTS)[number]) => string, v: string) => PROJECTS.filter((p) => fn(p) === v).length;

  const filterGroups = [
    { label: "Status", key: "status" as const, options: STATUS_FILTER_OPTIONS.map((v) => ({ label: v, count: countBy((p) => p.status, v) })) },
    { label: "Locality", key: "locality" as const, options: localities.map((v) => ({ label: v, count: countBy((p) => p.location, v) })) },
    { label: "Configuration", key: "config" as const, options: CONFIG_FILTER_OPTIONS.map((v) => ({ label: v, count: PROJECTS.filter((p) => p.config.indexOf(v.charAt(0)) >= 0).length })) },
    { label: "Developer", key: "builder" as const, options: builders.map((v) => ({ label: v, count: countBy((p) => p.builder, v) })) },
  ];

  return (
    <div>
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-x-12 gap-y-6 px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(28px,3vw,40px)]">
          <div className="min-w-0 flex-1 basis-[480px]">
            <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
              Projects &middot; Bengaluru
            </div>
            <h1 className="m-0 mb-3 font-playfair text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.02] tracking-[-0.03em]">
              Everything we are advising on
            </h1>
            <p className="m-0 max-w-[620px] font-lora text-[clamp(15.5px,1.5vw,17px)] leading-[1.7] text-[var(--muted-3)]">
              Every project below has its own page: gallery, floor plans, RERA file, locality read and rate history. Prices are the last quoted rate, not the launch rate.
            </p>
          </div>
          <div className="text-right">
            <div className="font-playfair text-[clamp(40px,5vw,56px)] font-bold leading-none [font-feature-settings:'tnum']">
              {listing.length}
            </div>
            <div className="mt-2.5 font-archivo text-[10.5px] font-medium uppercase tracking-[0.2em] text-[var(--muted-1)]">
              Matching projects
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1560px] flex-wrap items-start px-[clamp(16px,3vw,32px)]">
        <aside className="min-w-[220px] max-w-[300px] flex-1 basis-[240px] border-r border-[var(--hairline)] py-8 pr-7">
          <div className="sticky top-[120px]">
            <div className="mb-6 flex items-baseline justify-between border-b-2 border-[var(--ink)] pb-3">
              <span className="font-archivo text-[11px] font-semibold uppercase tracking-[0.2em]">Filters</span>
              <button onClick={() => setFilters({})} className="border-0 bg-transparent font-archivo text-[10.5px] font-medium uppercase tracking-[0.14em] text-[var(--gold-text)]">
                Clear
              </button>
            </div>
            {filterGroups.map((g) => (
              <div key={g.label} className="mb-7">
                <div className="mb-3 font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">{g.label}</div>
                <div className="flex max-h-[210px] flex-col overflow-y-auto md:max-h-none">
                  {g.options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => pickFilter(g.key, o.label)}
                      className={`flex items-center justify-between gap-2.5 border-0 border-b border-black/10 py-[9px] pr-1.5 text-left font-lora text-[15px] ${
                        filters[g.key] === o.label ? "bg-[var(--placeholder-plate)]" : "bg-transparent"
                      }`}
                    >
                      <span className="pl-2.5">{o.label}</span>
                      <span className="pr-1.5 font-archivo text-[10px] text-[var(--muted-2)] [font-feature-settings:'tnum']">{o.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-[var(--hairline)] pt-5">
              <div className="mb-2.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">Not sure where to look?</div>
              <Link
                href="/contact"
                className="block w-full border border-[var(--gold)] py-3 text-center font-archivo text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)] transition-colors hover:bg-[rgba(182,130,53,.12)]"
              >
                Ask an advisor
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 basis-[620px] py-8 pb-[72px] md:pl-9">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b-2 border-[var(--ink)] pb-3">
            <div className="flex items-center gap-2 font-archivo text-[10.5px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">
              <span>Sort</span>
              <select className="border border-black/20 bg-transparent px-2 py-1.5 font-archivo text-[10.5px] uppercase tracking-[0.1em] text-[var(--ink)]">
                <option>Possession &middot; soonest</option>
                <option>Price &middot; low to high</option>
                <option>Price &middot; high to low</option>
                <option>Recently added</option>
              </select>
            </div>
            <div className="font-archivo text-[10.5px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">Tick up to 3 to compare</div>
          </div>

          {listing.map((p, i) => (
            <ProjectCard key={p.id} project={p} variant="row" rowIndex={i} compared={compare.includes(p.id)} onToggleCompare={toggleCompare} />
          ))}
        </div>
      </div>

      {compare.length > 0 && (
        <div className="sticky bottom-0 z-50 border-t-2 border-[var(--gold)] bg-[var(--panel-dark)]">
          <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-[clamp(16px,3vw,32px)] py-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3.5">
              <div className="font-archivo text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-warm)]">Comparing</div>
              <div className="flex flex-wrap gap-3">
                {compareProjects.map((c) => (
                  <div key={c.id} className="flex items-center gap-2.5 border border-white/[.28] px-3 py-2">
                    <span className="font-playfair text-[17px] text-[var(--card)]">{c.title}</span>
                    <button onClick={() => toggleCompare(c.id)} className="border-0 bg-transparent p-0 text-[15px] leading-none text-white/60">
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowCompare(true)}
              className="bg-[var(--gold)] px-7 py-3.5 font-archivo text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)]"
            >
              Compare side by side
            </button>
          </div>
        </div>
      )}

      {showCompare && compare.length > 1 && (
        <section className="border-t-2 border-[var(--ink)] bg-[var(--card)]">
          <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(48px,6vw,72px)]">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="m-0 font-playfair text-[clamp(28px,3.6vw,42px)] font-bold tracking-[-0.03em]">Side by side</h2>
              <button onClick={() => setShowCompare(false)} className="border-0 border-b border-black/30 bg-transparent pb-1 font-archivo text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-3)]">
                Close
              </button>
            </div>
            <div className="overflow-x-auto border-t-2 border-[var(--ink)]">
              {COMPARE_ROW_DEFS.map((row, i) => (
                <div key={row.k} className={`flex min-w-[640px] border-b border-[var(--hairline)] ${i % 2 ? "bg-[var(--paper)]" : "bg-[var(--card)]"}`}>
                  <div className="flex-none basis-[200px] py-3.5 pr-5 font-archivo text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)]">
                    {row.k}
                  </div>
                  {compareProjects.map((c) => (
                    <div key={c.id} className="flex-1 border-l border-[var(--hairline)] px-5 py-3.5 font-lora text-[15.5px] [font-feature-settings:'tnum']">
                      {String(c[row.key])}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
