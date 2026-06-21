"use client";

import { motion } from "framer-motion";

interface Chair {
  role: string;
  name: string;
  affiliation: string;
}

const CHAIRS: Chair[] = [
  { role: "General Chair",   name: "Ashutosh Pandey",        affiliation: "AMD" },
  { role: "PC Chair",        name: "R Govindarajan",         affiliation: "IISc, Bangalore" },
  { role: "PC Chair",        name: "Ramana Radhakrishnan",   affiliation: "NVIDIA" },
  { role: "Co-chair",        name: "Pradeep Kumar",          affiliation: "NVIDIA" },
  { role: "Co-chair",        name: "Prerona Chaudhuri",      affiliation: "NVIDIA" },
  { role: "Co-chair",        name: "Dr. Raveendra Kumar",    affiliation: "TCS Research" },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function HomeCommitteeSection() {
  return (
    <section
      id="committee"
      aria-label="Conference chairs"
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
                color: "var(--color-accent-orange)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              [ Organisers ]
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
              The conference chairs.
            </motion.h2>
          </div>
          <motion.a
            href="/committee"
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
            Full committee →
          </motion.a>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {CHAIRS.map((c, i) => (
            <motion.li
              key={`${c.name}-${i}`}
              variants={FADE_UP}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-2 rounded-2xl px-5 py-5 md:px-6 md:py-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-orange)",
                }}
              >
                {c.role}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  color: "var(--color-text-primary)",
                }}
              >
                {c.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 12,
                  letterSpacing: "-0.01em",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {c.affiliation}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
