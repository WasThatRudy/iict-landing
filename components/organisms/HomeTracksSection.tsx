"use client";

import { motion } from "framer-motion";

interface TrackPreview {
  kicker: string;
  scope: string;
  format: string;
  href: string;
}

const TRACKS: TrackPreview[] = [
  {
    kicker: "Research Papers",
    scope: "Original research, ongoing or emerging work in compiler design, program analysis, optimisation, and runtime systems.",
    format: "Extended abstract (2–4 pp) or full paper (4–8 pp)",
    href: "/submissions#tracks",
  },
  {
    kicker: "Practice Papers",
    scope: "Tooling, production deployments, performance engineering, and lessons learned from the field.",
    format: "Extended abstract (1+ pp) or slide deck",
    href: "/submissions#tracks",
  },
  {
    kicker: "Special Session",
    scope: "Recently published work at premier venues (CORE A*/A) within the last 12 months — a limited slate accepted as encore talks.",
    format: "Camera-ready + venue footnote",
    href: "/submissions#tracks",
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function HomeTracksSection() {
  return (
    <section
      id="tracks"
      aria-label="Submission tracks"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
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
                color: "#ff8855",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              [ Call for Papers ]
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
                maxWidth: 760,
              }}
            >
              What you can submit.
            </motion.h2>
          </div>
          <motion.a
            href="/submissions"
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
            Submission guidelines →
          </motion.a>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {TRACKS.map((t) => (
            <motion.li
              key={t.kicker}
              variants={FADE_UP}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href={t.href}
                className="flex flex-col gap-4 h-full rounded-2xl p-6 md:p-7 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                whileHover={{ borderColor: "rgba(78,3,255,0.55)", y: -3 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 13,
                    letterSpacing: "0.2em",
                    color: "#ff8855",
                    textTransform: "uppercase",
                  }}
                >
                  {t.kicker}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-boldonse)",
                    fontSize: "clamp(18px, 1.6vw, 22px)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {t.scope}
                </h3>
                <div className="mt-auto flex flex-col gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Format
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(12px, 1vw, 14px)",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.55,
                    }}
                  >
                    {t.format}
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    color: "#b59bff",
                  }}
                >
                  Submit →
                </span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
