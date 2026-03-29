import Image from "next/image";

const YOUTUBE_VIDEO_ID = "l61dY6O0A5s";

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
          className="rounded-lg object-cover"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — top-right */}
      <div className="absolute right-10 top-10 hidden xl:block">
        <Image
          src="/assets/images/img-attendees.png"
          alt="IICT 2025 attendees"
          width={102}
          height={122}
          className="rounded-lg object-cover"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — bottom-left */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <Image
          src="/assets/images/img-talk-screen.png"
          alt="IICT 2025 talk presentation"
          width={130}
          height={115}
          className="rounded-lg object-cover"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Decorative corner images — bottom-right */}
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <Image
          src="/assets/images/img-speaker-mic.png"
          alt="IICT 2025 speaker"
          width={114}
          height={169}
          className="rounded-lg object-cover"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-12"
        style={{ maxWidth: 800, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: 14 }}
          >
            [Archive]
          </span>
          <h2
            className="text-[var(--color-text-primary)] text-center"
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            Revisit the Energy of IICT 2025
          </h2>
          <p
            className="text-[var(--color-text-secondary)] text-center"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.75,
              maxWidth: 680,
            }}
          >
            Ad nulla reprehenderit in officia labore. Est do do labore ullamco
            Ad nulla reprehenderit in officia labore. Est do do connections that
            last.
          </p>
        </div>

        {/* YouTube embed */}
        <div
          className="relative w-full overflow-hidden rounded-xl"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        >
          <div
            className="relative w-full"
            style={{ paddingBottom: "56.25%" /* 16:9 */ }}
          >
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="IICT 2025 Experience Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
