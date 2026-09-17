import Image from "next/image";
import type { LogoItem } from "@/lib/content";

interface MarqueeProps {
  logos: LogoItem[];
  durationSeconds: number;
  repeats?: number;
}

export default function Marquee({ logos, durationSeconds, repeats = 8 }: MarqueeProps) {
  const track = Array.from({ length: repeats }, () => logos).flat();

  return (
    <div className="overflow-hidden border-t border-b border-[var(--hairline)] py-[clamp(16px,2vw,24px)]">
      <div
        className="srm-marquee-track flex w-max items-center gap-[clamp(36px,5vw,72px)]"
        style={{ "--srm-marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {track.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={logo.height}
            style={{ height: logo.height, width: "auto", maxWidth: 132 }}
            className="flex-shrink-0 object-contain [filter:grayscale(1)] [mix-blend-mode:multiply] opacity-80"
          />
        ))}
      </div>
    </div>
  );
}
