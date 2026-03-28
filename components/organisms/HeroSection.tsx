import Image from "next/image";
import AvatarStack from "@/components/molecules/AvatarStack";

interface HeroSectionProps {
  avatars: { src: string; alt: string }[];
}

export default function HeroSection({ avatars }: HeroSectionProps) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ height: 937, backgroundColor: "var(--color-background)" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-bg.png"
          alt="IICT 2026 conference background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[var(--color-background)]/60" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex w-full items-end gap-24 pb-24 pt-14"
        style={{ maxWidth: 1240, paddingLeft: 32, paddingRight: 32 }}
      >
        {/* Left: date, title, subtitle */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Date + Location */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-white/10"
                style={{ width: 35, height: 35 }}>
                <Image
                  src="/assets/svgs/icon-calendar.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <span
                className="text-[var(--color-text-primary)] tracking-tight"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 18,
                  letterSpacing: "-0.02em",
                }}
              >
                TBA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-white/10"
                style={{ width: 35, height: 35 }}>
                <Image
                  src="/assets/svgs/icon-location.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <span
                className="text-[var(--color-text-primary)] tracking-tight"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 18,
                  letterSpacing: "-0.02em",
                }}
              >
                Bengaluru
              </span>
            </div>
          </div>

          {/* Main title */}
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(56px, 6vw, 93px)",
              letterSpacing: "-0.04em",
            }}
          >
            IICT 2026
          </h1>

          {/* Subtitle */}
          <p
            className="text-[var(--color-text-primary)]"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            Coming Soon!
          </p>
        </div>

        {/* Right: CTA + avatars */}
        <div className="flex flex-col gap-5 items-start">
          {/* Sign Up button */}
          <a
            href="#signup"
            className="flex items-center gap-0 overflow-hidden rounded-full transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {/* Icon circle */}
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                width: 46,
                height: 46,
                backgroundColor: "var(--color-primary)",
              }}
            >
              <Image
                src="/assets/svgs/icon-arrow.svg"
                alt=""
                width={22}
                height={22}
              />
            </span>
            {/* Label */}
            <span
              className="px-5 text-white"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Sign Up for Updates
            </span>
          </a>

          {/* Avatars */}
          <AvatarStack avatars={avatars} label="2,000+ practitioners Join Worldwide" />
        </div>
      </div>
    </section>
  );
}
