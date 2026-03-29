import Image from "next/image";

interface HeroSectionProps {
  avatars: { src: string; alt: string }[];
  onOpenModal: () => void;
}

export default function HeroSection({ avatars, onOpenModal }: HeroSectionProps) {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight: "calc(100svh - 80px)",
        marginTop: -80,
        paddingTop: 80,
        backgroundColor: "var(--color-background)",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-bg.jpg"
          alt="IICT 2026 conference attendees"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,7,8,0.15) 0%, rgba(7,7,8,0.5) 55%, rgba(7,7,8,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end">
        <div
          className="mx-auto flex w-full flex-col pb-10 pt-14 gap-5 px-5 md:px-8"
          style={{ maxWidth: 1240 }}
        >
          {/* Date + Location */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Image src="/assets/svgs/icon-calendar.svg" alt="" width={15} height={15} />
              </div>
              <span
                className="text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(14px, 1.5vw, 18px)", letterSpacing: "-0.02em" }}
              >
                TBA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Image src="/assets/svgs/icon-location.svg" alt="" width={15} height={15} />
              </div>
              <span
                className="text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(14px, 1.5vw, 18px)", letterSpacing: "-0.02em" }}
              >
                Bengaluru
              </span>
            </div>
          </div>

          {/* Title row — inline with button on md+, stacked on mobile */}
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0">
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-boldonse)",
                fontSize: "clamp(48px, 7vw, 96px)",
                letterSpacing: "-0.04em",
              }}
            >
              IICT 2026
            </h1>

            <div className="md:flex-1" />

            <button
              onClick={onOpenModal}
              className="flex items-center overflow-hidden rounded-full self-start md:self-auto transition-all duration-300 hover:shadow-[0_0_24px_rgba(78,3,255,0.6)] hover:scale-[1.03] active:scale-[0.99] focus:outline-none"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 42, height: 42, backgroundColor: "var(--color-primary)" }}
              >
                <Image src="/assets/svgs/icon-arrow.svg" alt="" width={18} height={18} />
              </span>
              <span
                className="pr-5 text-white"
                style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, fontSize: 14 }}
              >
                Sign Up for Updates
              </span>
            </button>
          </div>

          {/* Subtitle */}
          <p
            className="text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(13px, 1.5vw, 18px)", letterSpacing: "-0.02em" }}
          >
            Coming Soon!
          </p>

          {/* <AvatarStack avatars={avatars} label="2,000+ practitioners Join Worldwide" /> */}
        </div>
      </div>
    </section>
  );
}
