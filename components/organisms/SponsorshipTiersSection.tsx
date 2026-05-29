"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SponsorshipTiersSectionProps {
  contactHref?: string;
}

type TierKey = "platinum" | "gold" | "silver" | "bronze";

interface Tier {
  key: TierKey;
  name: string;
  price: string;
  accent: string;
  highlight: boolean;
}

const TIERS: Tier[] = [
  { key: "platinum", name: "Platinum", price: "₹4L", accent: "#e9d5ff", highlight: true  },
  { key: "gold",     name: "Gold",     price: "₹3L", accent: "#facc15", highlight: false },
  { key: "silver",   name: "Silver",   price: "₹2L", accent: "#cbd5e1", highlight: false },
  { key: "bronze",   name: "Bronze",   price: "₹1L", accent: "#c2855b", highlight: false },
];

type CellValue = boolean | string;

interface Benefit {
  label: string;
  sub?: string;
  values: Record<TierKey, CellValue>;
}

const BENEFITS: Benefit[] = [
  {
    label: "Nominate a keynote speaker",
    sub: "Subject to Program Committee discretion",
    values: { platinum: true, gold: false, silver: false, bronze: false },
  },
  {
    label: "Logo featured across all event materials",
    values: {
      platinum: "Extra Large",
      gold: "Large",
      silver: "Medium",
      bronze: "Small",
    },
  },
  {
    label: "Promotional video before keynote sessions",
    values: {
      platinum: "3 mins",
      gold: "2 mins",
      silver: "90 sec",
      bronze: "60 sec",
    },
  },
  {
    label: "Access to opt-in contact list of student attendees",
    values: { platinum: true, gold: true, silver: true, bronze: true },
  },
  {
    label: "Distribute promotional material via welcome email",
    values: { platinum: true, gold: true, silver: true, bronze: true },
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function SponsorshipTiersSection({ contactHref = "#contact-form" }: SponsorshipTiersSectionProps) {
  const [hoverTier, setHoverTier] = useState<TierKey | null>(null);

  return (
    <section
      id="tiers"
      aria-label="Sponsorship tiers and benefits"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 96px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col gap-5 mb-12"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.span
            variants={FADE_UP}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "#ff8855",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            [ Tiers &amp; Benefits ]
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(28px, 4vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              maxWidth: 900,
            }}
          >
            Sponsorship tiers and{" "}
            <motion.span
              style={{
                background:
                  "linear-gradient(95deg, #ff2d8e 0%, #ff5c4d 25%, #ff9a3c 50%, #ffc14a 75%, #ff2d8e 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                lineHeight: 1.3,
                paddingTop: "0.12em",
                paddingBottom: "0.18em",
              }}
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              benefits
            </motion.span>
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            We offer four sponsorship tiers tailored to suit your outreach and engagement goals. Each
            tier compounds the visibility, reach, and community access of the one below.
          </motion.p>
        </motion.div>

        {/* Desktop / tablet table */}
        <motion.div
          className="hidden md:block rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseLeave={() => setHoverTier(null)}
        >
          {/* Header row */}
          <motion.div
            className="grid"
            style={{
              gridTemplateColumns: "1.4fr repeat(4, 1fr)",
              backgroundColor: "rgba(78,3,255,0.10)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
            variants={CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div
              className="px-5 py-5"
              variants={FADE_UP}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Benefits
              </span>
            </motion.div>
            {TIERS.map((t) => {
              const active = hoverTier === t.key;
              return (
                <motion.div
                  key={t.key}
                  className="px-5 py-5 text-center relative cursor-default"
                  style={{
                    background: t.highlight
                      ? "linear-gradient(180deg, rgba(236,72,153,0.12) 0%, rgba(78,3,255,0.06) 100%)"
                      : "transparent",
                  }}
                  variants={FADE_UP}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoverTier(t.key)}
                  whileHover={{ y: -2 }}
                >
                  {t.highlight && (
                    <motion.div
                      className="absolute top-0 left-0 right-0"
                      style={{
                        height: 2,
                        background: "linear-gradient(90deg, #ff3399 0%, #ff8855 100%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  <motion.span
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 18,
                      color: t.accent,
                      letterSpacing: "0.14em",
                      display: "inline-block",
                    }}
                    animate={{
                      textShadow: active ? `0 0 14px ${t.accent}80` : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Benefit rows */}
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.label}
                className="grid"
                style={{
                  gridTemplateColumns: "1.4fr repeat(4, 1fr)",
                  borderBottom:
                    i === BENEFITS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)",
                }}
                variants={FADE_UP}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="px-5 py-5 flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 13,
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.5,
                    }}
                  >
                    {b.label}
                  </span>
                  {b.sub && (
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 11,
                        color: "#ff8855",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {b.sub}
                    </span>
                  )}
                </div>
                {TIERS.map((t) => {
                  const isHovered = hoverTier === t.key;
                  return (
                    <motion.div
                      key={t.key}
                      className="px-5 py-5 flex items-center justify-center text-center"
                      animate={{
                        backgroundColor: isHovered
                          ? "rgba(236,72,153,0.06)"
                          : t.highlight
                          ? "rgba(236,72,153,0.04)"
                          : "rgba(255,255,255,0)",
                      }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoverTier(t.key)}
                    >
                      <Cell value={b.values[t.key]} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </motion.div>

          {/* Price row */}
          <motion.div
            className="grid"
            style={{
              gridTemplateColumns: "1.4fr repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(90deg, rgba(78,3,255,0.10) 0%, rgba(236,72,153,0.10) 100%)",
            }}
            variants={CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div
              className="px-5 py-6 flex items-center"
              variants={FADE_UP}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Price
              </span>
            </motion.div>
            {TIERS.map((t) => (
              <motion.div
                key={t.key}
                className="px-5 py-6 flex flex-col items-center gap-1"
                variants={FADE_UP}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoverTier(t.key)}
                whileHover={{ y: -3 }}
              >
                <motion.span
                  style={{
                    fontFamily: "var(--font-boldonse)",
                    fontSize: "clamp(28px, 3vw, 38px)",
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.price}
                </motion.span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 10,
                    color: "#ff8855",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile stacked cards */}
        <motion.div
          className="md:hidden flex flex-col gap-4"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {TIERS.map((t) => (
            <motion.div
              key={t.key}
              className="relative rounded-2xl overflow-hidden p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              variants={FADE_UP}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: "rgba(236,72,153,0.3)" }}
            >
              {t.highlight && (
                <motion.div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: 3,
                    background: "linear-gradient(90deg, #ff3399 0%, #ff8855 100%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              )}
              <div className="flex items-baseline justify-between mb-5">
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 26,
                    color: t.accent,
                    letterSpacing: "0.14em",
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-boldonse)",
                    fontSize: 30,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t.price}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {BENEFITS.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-start justify-between gap-4 pb-3"
                    style={{ borderBottom: "1px dashed rgba(255,255,255,0.08)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 12.5,
                        color: "var(--color-text-primary)",
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {b.label}
                    </span>
                    <span className="shrink-0">
                      <Cell value={b.values[t.key]} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom partnership note + CTA */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-2xl p-6 md:p-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <motion.span
              style={{ fontSize: 18, color: "#ff3399", lineHeight: 1, marginTop: 2, display: "inline-block" }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              ✦
            </motion.span>
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                color: "var(--color-text-primary)",
                lineHeight: 1.7,
                letterSpacing: "-0.02em",
                maxWidth: 640,
              }}
            >
              Customized partnership opportunities can be discussed based on specific branding goals.
              Reach out and we&apos;ll tailor a package to your priorities.
            </p>
          </div>
          <motion.a
            href={contactHref}
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full px-5 py-3 shrink-0"
            style={{ backgroundColor: "var(--color-primary)" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(78,3,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "-0.01em",
              }}
            >
              Request a custom package
            </span>
            <motion.span
              className="text-white"
              style={{ fontSize: 14, display: "inline-block" }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <motion.span
        className="inline-flex items-center justify-center rounded-full"
        style={{ width: 26, height: 26, backgroundColor: "rgba(34,197,94,0.18)" }}
        aria-label="Included"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <motion.path
            d="M5 12l5 5L19 7"
            stroke="#22c55e"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.span>
    );
  }
  if (value === false) {
    return (
      <motion.span
        className="inline-flex items-center justify-center rounded-full"
        style={{
          width: 26,
          height: 26,
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        aria-label="Not included"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="#ff5c4d"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </motion.span>
    );
  }
  return (
    <motion.span
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: 13,
        color: "var(--color-text-primary)",
        fontWeight: 600,
        letterSpacing: "-0.01em",
        display: "inline-block",
      }}
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {value}
    </motion.span>
  );
}
