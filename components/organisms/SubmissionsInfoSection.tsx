"use client";

import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

const AUDIENCE = [
  "Practitioners of compilers",
  "Students and researchers in compilers, programming languages, and runtime",
  "Those interested in using compiler and toolchain technology in novel and interesting ways",
];

const PROGRAM_CHAIRS = [
  { name: "R Govindarajan", affiliation: "IISc Bangalore" },
  { name: "Ramana Radhakrishnan", affiliation: "NVIDIA" },
];

const ACM_GUIDELINES_URL = "https://www.acm.org/publications/policies/frequently-asked-questions";

export default function SubmissionsInfoSection() {
  return (
    <section
      id="submissions-info"
      aria-label="Audience, policy, and chairs"
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
            "radial-gradient(ellipse at 90% 100%, rgba(236,72,153,0.14) 0%, transparent 45%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1240 }}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Who should attend / submit */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, borderColor: "rgba(236,72,153,0.25)" }}
          >
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Who should submit
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-boldonse)",
                  fontSize: "clamp(20px, 2.4vw, 28px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "var(--color-text-primary)",
                }}
              >
                Built for the compiler community.
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {AUDIENCE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-2 rounded-full"
                    style={{ width: 6, height: 6, backgroundColor: "#ff8855" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(13px, 1.05vw, 14px)",
                      color: "var(--color-text-primary)",
                      lineHeight: 1.65,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI policy */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, borderColor: "rgba(236,72,153,0.25)" }}
          >
            <div className="flex flex-col gap-2">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Policy on AI-generated content
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-boldonse)",
                  fontSize: "clamp(20px, 2.4vw, 28px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "var(--color-text-primary)",
                }}
              >
                Disclose, and stay accountable.
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.65,
                  letterSpacing: "-0.02em",
                }}
              >
                Any use of AI tools during the development of a submission must be disclosed
                responsibly, and authors should be prepared for questions about it. Authors remain
                accountable for the content of their papers and presentations.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.65,
                  letterSpacing: "-0.02em",
                  opacity: 0.92,
                }}
              >
                AI used purely for grammar checks and syntactical rewriting does not need to be
                disclosed.
              </p>
              <a
                href={ACM_GUIDELINES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "#ff6699",
                  letterSpacing: "-0.01em",
                  width: "fit-content",
                }}
              >
                Read the ACM guidelines
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Program chairs */}
        <motion.div
          className="mt-5 rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-2">
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                color: "#ff8855",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Program Chairs
            </span>
            <h3
              style={{
                fontFamily: "var(--font-boldonse)",
                fontSize: "clamp(20px, 2.4vw, 28px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--color-text-primary)",
              }}
            >
              Leading the program.
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROGRAM_CHAIRS.map((chair) => (
              <li
                key={chair.name}
                className="rounded-xl px-4 py-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: 2,
                  }}
                >
                  {chair.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 12,
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    opacity: 0.92,
                  }}
                >
                  {chair.affiliation}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/committee#program-committee"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--color-accent-orange)",
              letterSpacing: "0.04em",
              opacity: 0.95,
              borderBottom: "1px solid rgba(255,136,85,0.4)",
              paddingBottom: 2,
              alignSelf: "flex-start",
            }}
          >
            See full Program Committee →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
