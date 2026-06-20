"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function HomeVenueSection() {
  return (
    <section
      id="venue"
      aria-label="Venue and travel"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 rounded-3xl overflow-hidden"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(28px, 4vw, 56px)",
            position: "relative",
          }}
        >
          {/* Subtle radial accent behind content */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 85% 0%, rgba(78,3,255,0.18) 0%, rgba(7,7,8,0) 55%)",
            }}
          />

          {/* Left 60% — facts */}
          <div className="md:col-span-3 relative z-10 flex flex-col gap-5">
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
              [ Venue ]
            </motion.span>
            <motion.h2
              variants={FADE_UP}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-boldonse)",
                fontSize: "clamp(34px, 4.8vw, 64px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                color: "var(--color-text-primary)",
              }}
            >
              IISc, Bengaluru
            </motion.h2>
            <motion.div
              variants={FADE_UP}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-1"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                letterSpacing: "-0.01em",
                color: "var(--color-text-primary)",
                lineHeight: 1.55,
              }}
            >
              <span>Indian Institute of Science</span>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>CV Raman Road, Bengaluru 560012, Karnataka</span>
            </motion.div>
            <motion.p
              variants={FADE_UP}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(13px, 1.05vw, 14.5px)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                letterSpacing: "-0.01em",
                maxWidth: 540,
              }}
            >
              Kempegowda International Airport (BLR) is about 35&nbsp;km from campus. Bengaluru
              has direct international and domestic connectivity. Visa-on-arrival and e-Visa
              available for most countries.
            </motion.p>
          </div>

          {/* Right 40% — date stack */}
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.45 }}
            className="md:col-span-2 relative z-10 flex flex-col gap-4 md:items-end"
          >
            <div
              className="flex flex-col gap-1 rounded-2xl px-6 py-5 self-start md:self-end w-full md:w-auto"
              style={{
                backgroundColor: "rgba(7,7,8,0.5)",
                border: "1px solid rgba(78,3,255,0.4)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: "#b59bff",
                  textTransform: "uppercase",
                }}
              >
                Workshop dates
              </span>
              <span
                style={{
                  fontFamily: "var(--font-boldonse)",
                  fontSize: "clamp(22px, 2.6vw, 34px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "var(--color-text-primary)",
                }}
              >
                2 – 3 Oct 2026
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Indian+Institute+of+Science+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-end"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 13,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.7)",
                borderBottom: "1px solid rgba(255,255,255,0.25)",
                paddingBottom: 2,
              }}
            >
              <Image src="/assets/svgs/icon-location.svg" alt="" width={11} height={11} aria-hidden="true" />
              Open in maps →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
