"use client";

import { motion } from "framer-motion";
import { IMPORTANT_DATES, dateStatus, type DateStatus } from "@/lib/important-dates";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

const STATUS_LABEL: Record<DateStatus, string> = {
  past: "Closed",
  today: "Today",
  upcoming: "Upcoming",
};

function statusStyle(status: DateStatus, isMilestone?: boolean) {
  if (status === "past") {
    return {
      dot: "rgba(255,255,255,0.18)",
      label: "rgba(255,255,255,0.4)",
      labelBg: "rgba(255,255,255,0.04)",
      labelBorder: "rgba(255,255,255,0.08)",
      strike: true,
    };
  }
  if (status === "today" || isMilestone) {
    return {
      dot: "var(--color-accent-orange)",
      label: "var(--color-accent-orange)",
      labelBg: "rgba(255,136,85,0.08)",
      labelBorder: "rgba(255,136,85,0.35)",
      strike: false,
    };
  }
  return {
    dot: "var(--color-primary)",
    label: "var(--color-primary-light)",
    labelBg: "rgba(78,3,255,0.1)",
    labelBorder: "rgba(78,3,255,0.35)",
    strike: false,
  };
}

export default function HomeImportantDatesSection() {
  const today = new Date(2026, 5, 20); // 2026-06-20; pinned to keep status deterministic per build

  return (
    <section
      id="dates"
      aria-label="Important dates"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header row */}
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
              CFP timeline
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

        {/* Horizontal scroll strip on small screens, grid on md+ */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {IMPORTANT_DATES.map((row) => {
            const status = dateStatus(row.isoDate, today);
            const s = statusStyle(status, row.isMilestone);
            return (
              <motion.li
                key={row.label}
                variants={FADE_UP}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-3 rounded-2xl px-5 py-5"
                style={{
                  backgroundColor: row.isMilestone ? "rgba(255,136,85,0.04)" : "rgba(255,255,255,0.025)",
                  border: `1px solid ${s.labelBorder}`,
                  borderLeftWidth: 3,
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center gap-2"
                  >
                    <span className="rounded-full" style={{ width: 8, height: 8, backgroundColor: s.dot }} />
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 10.5,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: s.label,
                        backgroundColor: s.labelBg,
                        border: `1px solid ${s.labelBorder}`,
                        padding: "2px 8px",
                        borderRadius: 999,
                      }}
                    >
                      {STATUS_LABEL[status]}
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(12px, 1vw, 13px)",
                      color: row.isMilestone ? "var(--color-accent-orange)" : "var(--color-text-primary)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      opacity: s.strike ? 0.55 : 1,
                      textDecoration: s.strike ? "line-through" : "none",
                    }}
                  >
                    {row.date}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "clamp(18px, 1.7vw, 22px)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                    color: "var(--color-text-primary)",
                    opacity: s.strike ? 0.55 : 1,
                  }}
                >
                  {row.label}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
