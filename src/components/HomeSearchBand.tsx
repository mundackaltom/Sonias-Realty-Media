"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS, matchProjects, uniqueSorted } from "@/lib/projects";

const CONFIG_OPTIONS = ["Any", "2 BHK", "3 BHK", "4 BHK & above"];
const STATUS_OPTIONS = ["Any", "Ready to move", "Under construction", "New launch"];

export default function HomeSearchBand() {
  const router = useRouter();
  const localityOptions = useMemo(() => ["All of Bengaluru", ...uniqueSorted(PROJECTS.map((p) => p.location))], []);

  const [locality, setLocality] = useState("All of Bengaluru");
  const [config, setConfig] = useState("Any");
  const [status, setStatus] = useState("Any");

  const matchCount = useMemo(
    () =>
      matchProjects(PROJECTS, {
        locality: locality === "All of Bengaluru" ? null : locality,
        config: config === "Any" ? null : config,
        status: status === "Any" ? null : status,
      }).length,
    [locality, config, status]
  );

  const runSearch = () => {
    const params = new URLSearchParams();
    if (locality !== "All of Bengaluru") params.set("locality", locality);
    if (config !== "Any") params.set("config", config);
    if (status !== "Any") params.set("status", status);
    router.push(`/projects${params.toString() ? `?${params}` : ""}`);
  };

  const selectClass =
    "border-0 bg-transparent font-lora text-base text-[var(--ink)] outline-none max-w-full";

  return (
    <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
      <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 py-[22px] pb-3.5">
          <div className="font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-3)]">
            Find a home
          </div>
          <div className="font-archivo text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--muted-1)]">
            {PROJECTS.length} live projects &middot; Zero fee for buyers
          </div>
        </div>
        <div className="mb-[26px] grid border-2 border-[var(--ink)] bg-white [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          <label className="flex flex-col gap-1.5 border-r border-[var(--hairline)] px-[18px] py-4">
            <span className="font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">
              Locality
            </span>
            <select className={selectClass} value={locality} onChange={(e) => setLocality(e.target.value)}>
              {localityOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 border-r border-[var(--hairline)] px-[18px] py-4">
            <span className="font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">
              Configuration
            </span>
            <select className={selectClass} value={config} onChange={(e) => setConfig(e.target.value)}>
              {CONFIG_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 border-r border-[var(--hairline)] px-[18px] py-4">
            <span className="font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">
              Status
            </span>
            <select className={selectClass} value={status} onChange={(e) => setStatus(e.target.value)}>
              {STATUS_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={runSearch}
            className="bg-[var(--ink)] px-[30px] py-[18px] font-archivo text-xs font-bold uppercase tracking-[0.16em] text-[var(--card)] transition-colors hover:bg-[#444141]"
          >
            Search &middot; {matchCount}
          </button>
        </div>
      </div>
    </section>
  );
}
