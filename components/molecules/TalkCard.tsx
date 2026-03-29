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
      {/* Colorful gradient blob background — positioned at bottom */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob group using SVG masks — mirrors Figma structure */}
        <div
          className="absolute"
          style={{ bottom: 0, left: 0, right: 0, height: "100%", overflow: "hidden" }}
        >
          {/* Blob 1 — bottom left pink/magenta */}
          <div
            className="absolute"
            style={{
              bottom: "-10%",
              left: "10%",
              width: "55%",
              height: "55%",
              maskImage: `url('/assets/svgs/card-bg-mask.svg')`,
              maskSize: "413px 349px",
              maskRepeat: "no-repeat",
              maskPosition: "58px -228px",
            }}
          >
            <Image
              src="/assets/svgs/card-blob-3.svg"
              alt=""
              fill
              className="object-cover scale-110"
              style={{ margin: "-10%" }}
            />
          </div>

          {/* Blob 2 — bottom right orange/yellow */}
          <div
            className="absolute"
            style={{
              bottom: "-10%",
              right: "-5%",
              width: "65%",
              height: "50%",
              maskImage: `url('/assets/svgs/card-bg-mask.svg')`,
              maskSize: "413px 349px",
              maskRepeat: "no-repeat",
              maskPosition: "-266px -210px",
            }}
          >
            <Image
              src="/assets/svgs/card-blob-4.svg"
              alt=""
              fill
              className="object-cover scale-125"
            />
          </div>

          {/* Blob 3 — center subtle purple */}
          <div
            className="absolute"
            style={{
              bottom: "10%",
              left: "22%",
              width: "46%",
              height: "48%",
              maskImage: `url('/assets/svgs/card-bg-mask.svg')`,
              maskSize: "413px 349px",
              maskRepeat: "no-repeat",
              maskPosition: "-93px -141px",
            }}
          >
            <Image
              src="/assets/svgs/card-blob-2.svg"
              alt=""
              fill
              className="object-cover scale-125"
            />
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-10 h-full justify-start">
        <h3
          className="text-white leading-snug"
          style={{
            fontFamily: "var(--font-inter)",
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
              fontFamily: "var(--font-bebas-neue)",
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
