"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const SNAPSHOT = [
  "2025: 380+ participants · ACM-sponsored · introduced SEGFAULT — India's first compiler-themed hackathon",
  "2024: 200+ attendees with diverse academic-industry participation, including women speakers and panelists in every edition",
  "Representation from leading institutions and companies including IITs, IISc, NVIDIA, AMD, IIT Madras, IIT Delhi, and more",
];

interface Stat {
  value: string;
  label: string;
  countTo?: number;
  suffix?: string;
}

const STATS: Stat[] = [
  { value: "200+", label: "Attendees · 2024",        countTo: 200, suffix: "+"  },
  { value: "380+", label: "Attendees · 2025",        countTo: 380, suffix: "+"  },
  { value: "ACM",  label: "Sponsored · 2025"                                    },
  { value: "1st",  label: "Compiler Hackathon · 2025"                           },
];

const AUDIENCE = [
  "Compiler researchers and educators",
  "Software and systems engineers from leading tech organizations",
  "Postgraduate and doctoral students from top academic institutions",
  "Developers working on toolchains, language runtimes, and performance optimization",
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

export default function AudienceProfileSection() {
  return (
    <section
      id="audience"
      aria-label="Audience profile"
      style={{
        backgroundColor: "var(--color-background)",
        padding: "clamp(48px, 6vw, 96px) 20px",
        position: "relative",
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 20%, rgba(78,3,255,0.10) 0%, transparent 40%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1240 }}>
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
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            [ Audience Profile ]
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
              maxWidth: 880,
            }}
          >
            Who you&apos;ll reach at{" "}
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
              IICT 2026
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Past editions snapshot */}
        <motion.div
          className="rounded-2xl p-6 md:p-8 mb-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.h3
            className="mb-5"
            variants={FADE_UP}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "0.06em",
              color: "var(--color-text-primary)",
            }}
          >
            Past editions snapshot
          </motion.h3>

          <ul className="flex flex-col gap-3 mb-8">
            {SNAPSHOT.map((item) => (
              <motion.li
                key={item}
                className="flex items-start gap-3"
                variants={FADE_UP}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <motion.span
                  className="shrink-0 mt-2 rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: "#ff3399",
                  }}
                  whileInView={{
                    boxShadow: [
                      "0 0 0px rgba(255,51,153,0)",
                      "0 0 10px rgba(255,51,153,0.7)",
                      "0 0 0px rgba(255,51,153,0)",
                    ],
                  }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(13px, 1.1vw, 15px)",
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.7,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
            style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}
            variants={CONTAINER}
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.div>

        {/* Audience composition */}
        <motion.div
          className="rounded-2xl p-6 md:p-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.h3
            className="mb-5"
            variants={FADE_UP}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "0.06em",
              color: "var(--color-text-primary)",
            }}
          >
            IICT attracts a highly curated audience of
          </motion.h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {AUDIENCE.map((item) => (
              <motion.li
                key={item}
                className="flex items-start gap-3"
                variants={FADE_UP}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span
                  className="shrink-0 mt-2 rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: "#ff3399",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(13px, 1.1vw, 15px)",
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.7,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView || stat.countTo === undefined) return;
    const controls = animate(count, stat.countTo, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, count, stat.countTo]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-1"
      variants={FADE_UP}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span
        style={{
          fontFamily: "var(--font-bebas-neue)",
          fontSize: "clamp(28px, 3.2vw, 42px)",
          color: "var(--color-text-primary)",
          letterSpacing: "0.03em",
          lineHeight: 1,
        }}
      >
        {stat.countTo !== undefined ? (
          <>
            <motion.span>{rounded}</motion.span>
            {stat.suffix}
          </>
        ) : (
          stat.value
        )}
      </span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}
