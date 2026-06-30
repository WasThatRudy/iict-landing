"use client";

import { motion } from "framer-motion";
import { IMPORTANT_DATES as DATES } from "@/lib/important-dates";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function SubmissionsImportantDatesSection() {
  return (
    <section
      id="important-dates"
      aria-label="Important dates"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 96px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <motion.div
          className="flex flex-col gap-5 mb-10"
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
            [ Important Dates ]
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
            Mark these on your{" "}
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
              calendar.
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {DATES.map((row, i) => (
            <motion.div
              key={row.label}
              className="grid grid-cols-[1fr_auto] gap-4 px-5 md:px-8 py-5 items-center"
              style={{
                borderBottom:
                  i === DATES.length - 1 ? "none" : "1px dashed rgba(255,255,255,0.08)",
                backgroundColor: row.isMilestone ? "rgba(255,136,85,0.04)" : "transparent",
              }}
              variants={FADE_UP}
              transition={{ duration: 0.45 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: row.isMilestone ? "#ff8855" : "rgba(255,255,255,0.5)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(13px, 1.1vw, 15px)",
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    fontWeight: row.isMilestone ? 600 : 500,
                  }}
                >
                  {row.label}
                </span>
              </div>
              {row.previousDate ? (
                <div className="flex flex-col items-end gap-1">
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(11px, 0.95vw, 13px)",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "line-through",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {row.previousDate}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 justify-end">
                    <span
                      style={{
                        fontFamily: "var(--font-bebas-neue)",
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: "var(--color-accent-orange)",
                        padding: "2px 7px",
                        borderRadius: 999,
                        backgroundColor: "rgba(255,136,85,0.1)",
                        border: "1px solid rgba(255,136,85,0.5)",
                      }}
                    >
                      Extended
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "clamp(13px, 1.1vw, 15px)",
                        color: row.isMilestone ? "var(--color-accent-orange)" : "var(--color-text-primary)",
                        letterSpacing: "-0.01em",
                        fontWeight: 600,
                      }}
                    >
                      {row.date}
                    </span>
                  </div>
                </div>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(13px, 1.1vw, 15px)",
                    color: row.isMilestone ? "var(--color-accent-orange)" : "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.date}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
