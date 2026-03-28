import Image from "next/image";
import { TalkCard as TalkCardType } from "@/types";

interface TalkCardProps {
  talk: TalkCardType;
}

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <a
      href={talk.watchUrl}
      className="group relative flex flex-col justify-end overflow-hidden rounded-xl"
      style={{ height: 349 }}
    >
      {/* Background gradient image */}
      <div className="absolute inset-0">
        <Image
          src={talk.bgImageSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-7">
        <h3
          className="text-[var(--color-text-primary)] text-xl font-semibold mb-6 leading-snug"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {talk.title}
        </h3>

        <div className="flex items-center gap-3">
          {/* Arrow circle */}
          <div className="flex items-center justify-center rounded-full border border-white/30 bg-white/10"
            style={{ width: 40, height: 40 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7H12M12 7L7 2M12 7L7 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span
            className="text-[var(--color-text-primary)] text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Watch
          </span>
        </div>
      </div>
    </a>
  );
}
