import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerProjects = PROJECTS.filter((p) => p.id !== "ecopolitan")
  .filter((p, i, arr) => arr.findIndex((y) => y.builder === p.builder) === i)
  .slice(0, 6);

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--card)]">
      <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] pb-[26px] pt-[clamp(40px,5vw,64px)]">
        <div className="grid gap-[clamp(20px,2.4vw,40px)] border-b border-white/[.18] pb-[clamp(32px,4vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,192px),1fr))]">
          <div>
            <div className="mb-[18px] flex items-center gap-3.5">
              <Image
                src="/images/logo-icon.png"
                alt="Sonia's Realty Media"
                width={52}
                height={42}
                className="h-[42px] w-[52px] flex-shrink-0 object-contain [filter:invert(1)_grayscale(1)_brightness(1.3)]"
              />
              <span className="font-playfair text-[19px] font-bold leading-[1.2] tracking-[-0.015em]">
                Sonia&#8217;s Realty Media
              </span>
            </div>
            <p className="mb-[18px] max-w-[340px] font-lora text-[15.5px] leading-[1.7] text-white/70">
              Residential advisory in Bengaluru. Six years, 108 homes handed over, and no listing we would not buy ourselves.
            </p>
            <div className="font-archivo text-[10px] uppercase tracking-[0.16em] text-white/40">
              RERA agent reg. PRM/KA/RERA/1251/446/AG
            </div>
          </div>

          <div>
            <div className="mb-4 font-archivo text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-warm)]">
              Site
            </div>
            <div className="flex flex-col items-start gap-2.5 font-lora text-[15.5px]">
              {SITE_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-white/80 hover:text-[var(--gold-warm)]">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-archivo text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-warm)]">
              Projects
            </div>
            <div className="flex flex-col items-start gap-2.5 font-lora text-[15.5px]">
              {footerProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="text-left text-white/80 hover:text-[var(--gold-warm)]">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-archivo text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-warm)]">
              Office
            </div>
            <div className="font-lora text-[15.5px] leading-[1.75] text-white/80">
              Prestige Jindal City,
              <br />
              Bengaluru, Karnataka 560073
            </div>
            <div className="mt-3.5 flex flex-col gap-2 font-lora text-[15.5px]">
              <a href={`tel:${PHONE_TEL}`} className="text-[var(--gold-warm)]">
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="break-all text-[var(--gold-warm)]">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 font-archivo text-[10px] uppercase tracking-[0.14em] text-white/40">
          <span>&copy; {new Date().getFullYear()} Sonia&#8217;s Realty Media</span>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/70">
              Terms
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/70">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
