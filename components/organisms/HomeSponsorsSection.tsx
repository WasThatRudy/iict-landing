"use client";

import { motion } from "framer-motion";

interface SponsorLogo {
  name: string;
  src: string;     // path to logo SVG/PNG
  href?: string;
  tier: "platinum" | "gold" | "silver";
}

// 2026 sponsors. NVIDIA returns as Platinum Sponsor.
const SPONSORS: SponsorLogo[] = [
  {
    name: "NVIDIA",
    src: "/assets/svgs/logo-nvidia.svg",
    href: "https://www.nvidia.com",
    tier: "platinum",
  },
];

const TIER_HEIGHT: Record<SponsorLogo["tier"], number> = {
  platinum: 60,
  gold: 44,
  silver: 36,
};

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function HomeSponsorsSection() {
  const hasSponsors = SPONSORS.length > 0;

  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <div className="flex flex-col gap-3">
            <motion.span
              variants={FADE_UP}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 12,
                color: "var(--color-accent-orange)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              [ Sponsors ]
            </motion.span>
            <motion.h2
              variants={FADE_UP}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-boldonse)",
                fontSize: "clamp(28px, 3.4vw, 44px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--color-text-primary)",
              }}
            >
              {hasSponsors ? "Supported by" : "Become a sponsor."}
            </motion.h2>
          </div>
          <motion.a
            href="/sponsorships"
            variants={FADE_UP}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 self-start md:self-end focus:outline-none"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 14,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.7)",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: 2,
            }}
          >
            Sponsorship tiers →
          </motion.a>
        </motion.div>

        {/* Confirmed sponsors — shown in full brand colour */}
        {hasSponsors && (
          <div className="flex flex-col gap-8 mb-12 md:mb-16">
            {(["platinum", "gold", "silver"] as const).map((tier) => {
              const inTier = SPONSORS.filter((s) => s.tier === tier);
              if (inTier.length === 0) return null;
              return (
                <div key={tier} className="flex flex-col gap-4">
                  <span
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 13,
                      letterSpacing: "0.22em",
                      color: "var(--color-primary-light)",
                      textTransform: "uppercase",
                    }}
                  >
                    {tier}
                  </span>
                  <motion.ul
                    className="flex flex-wrap items-center gap-10 md:gap-14"
                    variants={CONTAINER}
                    initial="hidden"
                    whileInView="show"
                    viewport={VIEWPORT}
                  >
                    {inTier.map((s) => (
                      <motion.li
                        key={s.name}
                        variants={FADE_UP}
                        transition={{ duration: 0.4 }}
                      >
                        <a
                          href={s.href ?? "/sponsorships"}
                          target={s.href ? "_blank" : undefined}
                          rel={s.href ? "noopener noreferrer" : undefined}
                          className="block"
                          style={{ transition: "opacity 0.25s ease" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.src} alt={s.name} style={{ height: TIER_HEIGHT[tier], display: "block" }} />
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        )}

        {/* Concise "Become a sponsor" CTA */}
        <motion.a
          href="/sponsorships"
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.45 }}
          className="block rounded-3xl p-6 md:p-8 focus:outline-none"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px dashed rgba(78,3,255,0.55)",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.2s ease, transform 0.2s ease",
          }}
          whileHover={{ borderColor: "rgba(78,3,255,1)", scale: 1.005 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 90% 50%, rgba(78,3,255,0.16) 0%, rgba(7,7,8,0) 65%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  color: "var(--color-primary-light)",
                  textTransform: "uppercase",
                }}
              >
                Become a sponsor
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.5,
                  color: "var(--color-text-primary)",
                }}
              >
                Put your brand in front of India&apos;s compiler community. Platinum, Gold &amp; Silver tiers available.
              </span>
            </div>
            <span
              className="shrink-0"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 14,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.7)",
                borderBottom: "1px solid rgba(255,255,255,0.25)",
                paddingBottom: 2,
              }}
            >
              See tiers →
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
