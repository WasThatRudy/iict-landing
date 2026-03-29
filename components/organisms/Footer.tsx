import Image from "next/image";

const SOCIALS = [
  { label: "X / Twitter", href: "https://x.com/compiler_tech",                               icon: "/assets/svgs/icon-twitter.svg" },
  { label: "LinkedIn",    href: "https://www.linkedin.com/company/compiler-technology",       icon: "/assets/svgs/icon-linkedin.svg" },
  { label: "Email",       href: "mailto:support@compilertech.org",                            icon: "/assets/svgs/icon-email.svg" },
];

const NAV_COLS = [
  {
    heading: "IICT 2026",
    links: [
      { label: "Speakers", href: "#" },
      { label: "Schedule", href: "#" },
      { label: "Venue",    href: "#" },
      { label: "Tickets",  href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ",        href: "#" },
      { label: "Contact Us", href: "mailto:support@compilertech.org" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-background)" }}>
      <div
        className="mx-auto px-5 md:px-8 pt-14 md:pt-16"
        style={{ maxWidth: 1240 }}
      >
        {/* Top row */}
        <div
          className="flex flex-col md:flex-row md:justify-between gap-12 pb-12"
          style={{ borderBottom: "1.5px dashed rgba(222,222,222,0.12)" }}
        >
          {/* Left: logo + tagline + socials */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/svgs/logo.png"
                alt="IICT"
                width={36}
                height={36}
                className="object-contain"
                style={{ width: 36, height: "auto" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.6,
                  maxWidth: 280,
                }}
              >
                Compiler tech 2026<br />
                – Where bold ideas,<br />
                bright minds, and big opportunities<br />
                connect.
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 12,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Social
              </span>
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-150"
                  >
                    <Image src={s.icon} alt={s.label} width={28} height={28} style={{ width: 28, height: "auto" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="flex gap-16 md:gap-24">
            {NAV_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-2">
                <span
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "white",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {col.heading}
                </span>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 13,
                      color: "var(--color-text-primary)",
                      textDecoration: "none",
                      lineHeight: 1.8,
                    }}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-5">
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            © 2026 CompilerTech. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            India&apos;s largest compiler conference
          </span>
        </div>
      </div>

      {/* Large IICT 2026 watermark with glow */}
      <div className="relative overflow-hidden" style={{ height: 260 }}>
        {/* Text — dark grey, positioned to bleed off the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 flex items-flex-end justify-center pointer-events-none"
          style={{ transform: "translateY(28%)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(100px, 18vw, 260px)",
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            IICT 2026
          </span>
        </div>
        {/* Gradient glow — pink left, orange right, at the bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 35% 110%, rgba(220,60,120,0.75) 0%, transparent 45%), radial-gradient(ellipse at 68% 115%, rgba(200,110,40,0.65) 0%, transparent 40%)",
          }}
        />
      </div>
    </footer>
  );
}
