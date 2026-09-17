import type { Metadata } from "next";
import Image from "next/image";
import { TEAM } from "@/lib/projects";
import { LEGAL_NOTE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team | Sonia's Realty Media",
  description: "Sonia, Tom and Jimmy — the three-person advisory behind Sonia's Realty Media, with a legal and CA team behind every file.",
};

export default function TeamPage() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(32px,3.6vw,48px)]">
          <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
            The team
          </div>
          <h1 className="m-0 mb-[18px] max-w-[900px] font-playfair text-[clamp(34px,5.6vw,64px)] font-bold leading-[1.02] tracking-[-0.035em]">
            Three people, and a legal &amp; CA team behind every file
          </h1>
          <p className="m-0 max-w-[680px] text-justify font-lora text-[clamp(15.5px,1.6vw,17px)] leading-[1.78] text-[var(--muted-3)]">
            Sonia&#8217;s Realty Media is a small advisory by design. Sonia, Tom and Jimmy handle every client directly, from shortlist to registration, and every file they hand you has already been checked by our own legal and chartered-accountant team.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="grid gap-[clamp(28px,3.4vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
            {TEAM.map((m) => (
              <div key={m.name}>
                <div
                  className="relative mb-[18px] flex aspect-square w-full flex-col items-center justify-center gap-3.5 overflow-hidden border border-black/20 bg-[var(--placeholder-plate)]"
                  style={m.hasPhoto && m.fit === "contain" ? { backgroundColor: "var(--placeholder-plate)" } : undefined}
                >
                  {m.hasPhoto ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      style={{ objectPosition: m.pos, transform: `scale(${m.zoom})`, transformOrigin: m.pos, filter: m.filter }}
                      className={m.fit === "contain" ? "object-contain" : "object-cover"}
                    />
                  ) : (
                    <>
                      <Image src="/images/logo-icon.png" alt="" width={48} height={48} className="h-12 w-auto object-contain opacity-[.34]" />
                      <div className="font-archivo text-[9.5px] font-medium uppercase tracking-[0.16em] text-[var(--muted-2)]">
                        Portrait to be supplied
                      </div>
                    </>
                  )}
                </div>
                <h3 className="m-0 mb-1 font-playfair text-2xl font-bold tracking-[-0.02em]">{m.name}</h3>
                <div className="mb-3 font-archivo text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--gold-text)]">{m.role}</div>
                <p className="m-0 text-justify font-lora text-[15px] leading-[1.7] text-[var(--muted-4)]">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-start gap-[clamp(24px,3vw,48px)] border-t-2 border-[var(--ink)] px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]">
          <div className="flex-none pt-1.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">
            Legal &amp; CA, in-house
          </div>
          <p className="m-0 min-w-0 flex-1 basis-[480px] text-justify font-lora text-[clamp(15.5px,1.5vw,17px)] leading-[1.78] text-[var(--muted-4)]">
            {LEGAL_NOTE}
          </p>
        </div>
      </section>
    </div>
  );
}
