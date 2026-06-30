"use client";

import { motion } from "framer-motion";
import { IMPORTANT_DATES, dateStatus } from "@/lib/important-dates";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

// Two-colour system:
//   accent  (var(--color-primary)) = the path ahead — progress rail, the next
//                                     milestone, and future markers
//   neutral (white / greys)        = everything done, plus all body text
type Role = "done" | "next" | "future";

export default function HomeImportantDatesSection() {
  const today = new Date(2026, 5, 30); // 2026-06-30; pinned to keep status deterministic per build

  // The "next" item is the first one that hasn't passed yet.
  const nextIndex = IMPORTANT_DATES.findIndex(
    (row) => dateStatus(row.isoDate, today) !== "past",
  );

  const roleFor = (i: number): Role =>
    i < nextIndex ? "done" : i === nextIndex ? "next" : "future";

  return (
    <section
      id="dates"
      aria-label="Important dates"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
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
                color: "var(--color-primary-light)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              [ Important Dates ]
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
              Key dates &amp; deadlines
            </motion.h2>
          </div>
          <motion.a
            href="/submissions#important-dates"
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
            Full timeline &amp; CFP →
          </motion.a>
        </motion.div>

        {/* Horizontal timeline (scrolls on small screens) */}
        <motion.ol
          className="relative flex overflow-x-auto pb-2"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          style={{ scrollbarWidth: "none" }}
        >
          {IMPORTANT_DATES.map((row, i) => {
            const role = roleFor(i);
            const isLast = i === IMPORTANT_DATES.length - 1;
            const done = role === "done";
            const next = role === "next";

            // The rail segment to the right of a node is "travelled" (accent)
            // up to the next marker; everything beyond it stays neutral.
            const segmentTravelled = i < nextIndex;

            return (
              <motion.li
                key={row.label}
                variants={FADE_UP}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex flex-col shrink-0"
                style={{ flex: "1 1 0", minWidth: 184, paddingRight: isLast ? 0 : 14 }}
              >
                {/* Rail + node */}
                <div className="relative" style={{ height: 16, marginBottom: 16 }}>
                  {/* connecting line to the right of this node */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute"
                      style={{
                        top: 7,
                        left: 16,
                        right: 0,
                        height: 2,
                        backgroundColor: segmentTravelled
                          ? "var(--color-primary)"
                          : "rgba(255,255,255,0.1)",
                      }}
                    />
                  )}
                  {/* node */}
                  <span
                    className="absolute flex items-center justify-center"
                    style={{ left: 0, top: 0, width: 16, height: 16 }}
                  >
                    {next && (
                      <motion.span
                        aria-hidden
                        className="absolute rounded-full"
                        style={{ width: 16, height: 16, backgroundColor: "var(--color-primary)" }}
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <span
                      className="rounded-full"
                      style={{
                        width: next ? 14 : 11,
                        height: next ? 14 : 11,
                        backgroundColor: next
                          ? "var(--color-primary)"
                          : done
                            ? "rgba(255,255,255,0.28)"
                            : "transparent",
                        border: next || done ? "none" : "2px solid var(--color-primary)",
                        boxShadow: next ? "0 0 14px rgba(78,3,255,0.6)" : "none",
                      }}
                    />
                  </span>
                </div>

                {/* Content */}
                <div
                  className="flex flex-col gap-2 rounded-xl px-4 py-4 h-full"
                  style={{
                    backgroundColor: next ? "rgba(78,3,255,0.07)" : "rgba(255,255,255,0.02)",
                    border: next
                      ? "1px solid rgba(78,3,255,0.4)"
                      : "1px solid rgba(255,255,255,0.07)",
                    opacity: done ? 0.6 : 1,
                  }}
                >
                  <span
                    className="self-start"
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 12.5,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: done ? "rgba(255,255,255,0.45)" : "var(--color-primary-light)",
                      backgroundColor: done ? "rgba(255,255,255,0.05)" : "rgba(78,3,255,0.12)",
                      border: done
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid rgba(78,3,255,0.4)",
                      padding: "2px 9px",
                      borderRadius: 999,
                    }}
                  >
                    {done ? "Closed" : next ? "Next up" : "Upcoming"}
                  </span>
                  {row.previousDate ? (
                    <div className="flex flex-col gap-1">
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "clamp(11px, 0.9vw, 12px)",
                          color: "rgba(255,255,255,0.4)",
                          textDecoration: "line-through",
                          fontWeight: 500,
                        }}
                      >
                        {row.previousDate}
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontSize: "clamp(12px, 1vw, 13px)",
                            color: done ? "rgba(255,255,255,0.5)" : "var(--color-text-primary)",
                            fontWeight: 600,
                            textDecoration: done ? "line-through" : "none",
                          }}
                        >
                          {row.date}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-bebas-neue)",
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            color: "var(--color-accent-orange)",
                            padding: "2px 7px",
                            borderRadius: 999,
                            backgroundColor: "rgba(255,136,85,0.1)",
                            border: "1px solid rgba(255,136,85,0.5)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Extended
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "clamp(12px, 1vw, 13px)",
                        color: done ? "rgba(255,255,255,0.5)" : "var(--color-text-primary)",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {row.date}
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(13px, 1.15vw, 15px)",
                      letterSpacing: "0.01em",
                      lineHeight: 1.3,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {row.label}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
