"use client";

import { motion } from "framer-motion";

interface KeynoteSpeaker {
  name?: string;
  affiliation?: string;
  talkTitle?: string;
  bio?: string;
}

// When speakers are announced, replace any of these slots with a real
// speaker object: { name, affiliation, talkTitle, bio }. Empty objects
// render as "to be announced" placeholders.
const SPEAKERS: KeynoteSpeaker[] = [
  {},
  {},
  {},
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

function PlaceholderAvatar() {
  return (
    <div
      className="shrink-0 rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: 76,
        height: 76,
        border: "1px dashed rgba(78,3,255,0.45)",
        background: "radial-gradient(circle at 50% 50%, rgba(78,3,255,0.18) 0%, rgba(7,7,8,0) 70%)",
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontFamily: "var(--font-bebas-neue)",
          fontSize: 22,
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        TBA
      </span>
    </div>
  );
}

export default function HomeKeynotesSection() {
  return (
    <section
      id="speakers"
      aria-label="Keynote speakers"
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
              [ Keynotes ]
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
              Speakers to be announced.
            </motion.h2>
          </div>
          <motion.a
            href="/#hero"
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
            Get notified when announced →
          </motion.a>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {SPEAKERS.map((s, i) => {
            const isPlaceholder = !s.name;
            return (
              <motion.li
                key={i}
                variants={FADE_UP}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4 rounded-2xl p-6 md:p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.025)",
                  border: isPlaceholder
                    ? "1px dashed rgba(255,255,255,0.12)"
                    : "1px solid rgba(255,255,255,0.06)",
                  minHeight: 200,
                }}
              >
                <div className="flex items-center gap-4">
                  <PlaceholderAvatar />
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-boldonse)",
                        fontSize: "clamp(15px, 1.3vw, 18px)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.25,
                        color: isPlaceholder ? "rgba(255,255,255,0.55)" : "var(--color-text-primary)",
                      }}
                    >
                      {s.name ?? "To be announced"}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.affiliation ?? "—"}
                    </span>
                  </div>
                </div>
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
                    Talk
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: "clamp(15px, 1.4vw, 18px)",
                      letterSpacing: "0.04em",
                      lineHeight: 1.3,
                      color: "var(--color-text-primary)",
                      opacity: isPlaceholder ? 0.5 : 1,
                    }}
                  >
                    {s.talkTitle ?? "Title TBA"}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
