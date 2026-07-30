"use client";

import { motion } from "framer-motion";

const SEGFAULT_URL = "https://segfault.compilertech.org";
const ARCHIVE_URL = "https://2025.segfault.compilertech.org";

const STATS = [
  { value: "Fully Online", label: "Build from anywhere" },
  { value: "Aug 1 – Oct 3", label: "Five weeks of hacking" },
  { value: "IISc, Bengaluru", label: "Finale at the workshop" },
];

export default function SegfaultSection() {
  return (
    <section
      id="segfault"
      className="relative overflow-hidden py-14 md:py-24"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="SegFault Hackathon"
    >
      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-10"
        style={{ maxWidth: 800, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: 14 }}
          >
            [Hackathon]
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
            SegFault is Back
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
            India&apos;s first compiler-themed hackathon returns with IICT 2026 —
            fully online, open to students and industry alike. Five weeks to build
            anything in compilers, programming languages or program analysis, with
            finalists presenting in person at the workshop.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 w-full">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-1"
              style={{
                borderLeft: "1.5px solid var(--color-primary)",
                paddingLeft: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 28,
                  letterSpacing: "0.04em",
                  color: "var(--color-text-primary)",
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 12,
                  letterSpacing: "0.04em",
                  color: "var(--color-text-secondary)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href={SEGFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[4px] px-8 py-3 text-white text-center"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 16,
              letterSpacing: "0.14em",
              backgroundColor: "var(--color-primary)",
            }}
            whileHover={{ scale: 1.03, backgroundColor: "var(--color-primary-hover)" }}
            transition={{ duration: 0.15 }}
          >
            Visit SegFault 2026
          </motion.a>
          <motion.a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 13,
              letterSpacing: "0.04em",
              color: "var(--color-text-secondary)",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
            whileHover={{ color: "var(--color-text-primary)" }}
            transition={{ duration: 0.15 }}
          >
            See the 2025 edition →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
