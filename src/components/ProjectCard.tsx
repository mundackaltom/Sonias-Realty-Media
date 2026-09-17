import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  variant: "grid" | "row";
  rowIndex?: number;
  compared?: boolean;
  onToggleCompare?: (id: string) => void;
}

function statRows(p: Project) {
  return [
    { k: "From", v: p.price },
    { k: "Rate", v: p.psf },
    { k: "Configuration", v: p.config },
    { k: "Possession", v: p.possession },
  ];
}

export default function ProjectCard({ project: p, variant, rowIndex = 0, compared = false, onToggleCompare }: ProjectCardProps) {
  const walkthroughUrl = `https://www.youtube.com/@SoniasRealtyMedia/search?query=${encodeURIComponent(p.title)}`;

  if (variant === "grid") {
    return (
      <article className="border-b border-r border-[var(--hairline)] bg-[var(--card)] pb-6">
        <Link href={`/projects/${p.id}`} className="relative block">
          <div className="relative h-[clamp(220px,24vw,280px)] w-full">
            <Image src={p.image} alt={p.title} fill className="object-cover [filter:sepia(.2)_saturate(.8)_contrast(1.04)]" />
          </div>
          <div className="absolute left-0 top-0 bg-[var(--card)] px-3.5 py-2 font-archivo text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
            {p.status}
          </div>
        </Link>
        <div className="px-[clamp(18px,2vw,26px)] pt-6">
          <Link href={`/projects/${p.id}`}>
            <h3 className="m-0 mb-1.5 font-playfair text-[clamp(24px,2.4vw,29px)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {p.title}
            </h3>
          </Link>
          <div className="mb-5 font-archivo text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">
            {p.location}
          </div>
          <div className="border-t border-[var(--hairline)]">
            {statRows(p).map((r) => (
              <div key={r.k} className="flex justify-between gap-4 border-b border-black/10 py-[9px]">
                <span className="font-archivo text-[10.5px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">{r.k}</span>
                <span className="text-right font-lora text-[15px] [font-feature-settings:'tnum']">{r.v}</span>
              </div>
            ))}
          </div>
          <div className="my-3.5 break-all font-archivo text-[9.5px] tracking-[0.1em] text-[var(--muted-2)]">
            RERA {p.rera}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href={`/projects/${p.id}`}
              className="flex-1 basis-[120px] border border-[var(--gold)] px-0 py-3 text-center font-archivo text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)] transition-colors hover:bg-[rgba(182,130,53,.12)]"
            >
              Project page
            </Link>
            <Link
              href={`/projects?compare=${p.id}`}
              className="border border-[var(--hairline)] px-4 py-3 text-center font-archivo text-[11.5px] font-medium uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
            >
              Compare
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-wrap border-b border-[var(--hairline)] ${rowIndex % 2 ? "bg-[var(--card)]" : "bg-[var(--paper)]"}`}>
      <Link href={`/projects/${p.id}`} className="relative block h-[clamp(240px,26vw,300px)] min-w-[220px] max-w-[340px] flex-1 basis-[260px]">
        <Image src={p.image} alt={p.title} fill className="object-cover [filter:sepia(.2)_saturate(.8)_contrast(1.04)]" />
        <div className="absolute left-0 top-0 bg-[var(--card)] px-3 py-[7px] font-archivo text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]">
          {p.status}
        </div>
      </Link>
      <div className="min-w-0 flex-1 basis-[340px] px-[clamp(18px,2.4vw,32px)] py-6" style={{ flexGrow: 2 }}>
        <Link href={`/projects/${p.id}`}>
          <h3 className="m-0 mb-[5px] font-playfair text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.08] tracking-[-0.02em]">
            {p.title}
          </h3>
        </Link>
        <div className="mb-3.5 font-archivo text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-1)]">
          {p.location} &middot; {p.builder}
        </div>
        <p className="m-0 mb-4 max-w-[520px] font-lora text-[15.5px] leading-[1.65] text-[var(--muted-3)]">{p.description}</p>
        <div className="flex flex-wrap gap-x-[26px] border-t border-[var(--hairline)]">
          {statRows(p).map((r) => (
            <div key={r.k} className="border-r border-black/10 pr-[22px] pt-3">
              <div className="mb-[5px] font-archivo text-[9.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-2)]">{r.k}</div>
              <div className="font-lora text-[15px] [font-feature-settings:'tnum']">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex min-w-[180px] flex-1 basis-[200px] flex-col gap-2.5 border-l border-[var(--hairline)] p-6">
        <div className="mb-auto break-all font-archivo text-[9.5px] tracking-[0.1em] text-[var(--muted-2)]">RERA {p.rera}</div>
        <Link
          href={`/projects/${p.id}`}
          className="border border-[var(--gold)] py-[11px] text-center font-archivo text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--gold-text)] transition-colors hover:bg-[rgba(182,130,53,.12)]"
        >
          Project page
        </Link>
        <a
          href={walkthroughUrl}
          target="_blank"
          rel="noopener"
          className="border border-[var(--hairline)] py-[11px] text-center font-archivo text-[11.5px] font-medium uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-black/[.07]"
        >
          Walkthrough
        </a>
        {onToggleCompare && (
          <button
            onClick={() => onToggleCompare(p.id)}
            className="flex items-center gap-2.5 border-0 bg-transparent py-1.5 font-archivo text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--muted-3)]"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center border border-[var(--ink)] text-[11px] text-[var(--card)] ${
                compared ? "bg-[var(--ink)]" : "bg-transparent"
              }`}
            >
              {compared ? "✓" : ""}
            </span>
            Compare
          </button>
        )}
      </div>
    </article>
  );
}

export { statRows };
