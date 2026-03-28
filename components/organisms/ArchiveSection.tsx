import Image from "next/image";
import PlayButton from "@/components/molecules/PlayButton";

export default function ArchiveSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="IICT 2025 Archive"
    >
      {/* Decorative corner images — top-left */}
      <div className="absolute left-10 top-10 hidden xl:block">
        <Image
          src="/assets/images/img-keynote.png"
          alt="IICT 2025 keynote"
          width={156}
          height={187}
          className="rounded-lg object-cover border border-[var(--color-border-subtle)]"
          style={{ borderColor: "rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — top-right */}
      <div className="absolute right-10 top-10 hidden xl:block">
        <Image
          src="/assets/images/img-attendees.png"
          alt="IICT 2025 attendees"
          width={102}
          height={122}
          className="rounded-lg object-cover border border-[var(--color-border-subtle)]"
          style={{ borderColor: "rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — bottom-left */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <Image
          src="/assets/images/img-talk-screen.png"
          alt="IICT 2025 talk presentation"
          width={130}
          height={115}
          className="rounded-lg object-cover border border-[var(--color-border-subtle)]"
          style={{ borderColor: "rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — bottom-right */}
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <Image
          src="/assets/images/img-speaker-mic.png"
          alt="IICT 2025 speaker"
          width={114}
          height={169}
          className="rounded-lg object-cover border border-[var(--color-border-subtle)]"
          style={{ borderColor: "rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-14"
        style={{ maxWidth: 800, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span
            className="text-white text-sm tracking-tight"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: 14 }}
          >
            [Archive]
          </span>
          <h2
            className="text-[var(--color-text-primary)] leading-tight text-center"
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(36px, 4vw, 55px)",
              letterSpacing: "0.01em",
            }}
          >
            Revisit the Energy of IICT 2025
          </h2>
          <p
            className="text-[var(--color-text-secondary)] text-center leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: "-0.03em",
              maxWidth: 730,
            }}
          >
            Ad nulla reprehenderit in officia labore. Est do do labore ullamco
            Ad nulla reprehenderit in officia labore. Est do do connections that
            last.
          </p>
        </div>

        {/* Video card */}
        <div className="relative w-full overflow-hidden rounded-xl">
          {/* Grayscale overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-xl mix-blend-saturation bg-white pointer-events-none z-10"
          />
          <Image
            src="/assets/images/conference-video-thumb.png"
            alt="IICT 2025 conference video thumbnail"
            width={766}
            height={380}
            className="w-full object-cover"
            style={{ height: 380 }}
          />
          {/* Border overlay */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ border: "1px solid rgba(250,250,250,0.05)" }}
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <PlayButton />
          </div>
          {/* Duration badge */}
          <div
            className="absolute bottom-4 right-4 z-20 rounded px-2 py-0.5 text-white text-sm font-medium"
            style={{
              fontFamily: "var(--font-geist-mono)",
              backgroundColor: "rgba(0,0,0,0.75)",
              fontSize: 13,
            }}
          >
            46:34
          </div>
        </div>
      </div>
    </section>
  );
}
