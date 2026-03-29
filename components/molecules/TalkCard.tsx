import Image from "next/image";
import { TalkCard as TalkCardType } from "@/types";

interface TalkCardProps {
  talk: TalkCardType;
}

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <a
      href={talk.watchUrl}
      className="group relative flex flex-col justify-start overflow-hidden rounded-2xl bg-black"
      style={{ height: "clamp(260px, 30vw, 349px)" }}
      aria-label={`Watch: ${talk.title}`}
    >
      {/* Background SVG */}
      <Image
        src="/assets/svgs/talk-card-bg.svg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-10 h-full justify-start">
        <h3
          className="text-white leading-snug"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            fontSize: "clamp(18px, 2vw, 24px)",
            maxWidth: 277,
          }}
        >
          {talk.title}
        </h3>

        {/* Watch button */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-center rounded-full transition-transform group-hover:scale-105"
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,0.4)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/assets/svgs/card-watch-arrow.svg"
              alt=""
              width={14}
              height={14}
              style={{ transform: "rotate(-90deg)" }}
            />
          </div>
          <span
            className="text-white tracking-widest"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 16,
              letterSpacing: "0.12em",
            }}
          >
            WATCH
          </span>
        </div>
      </div>
    </a>
  );
}
