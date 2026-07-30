"use client";

import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

interface RegistrationsHeroProps {
  registrationUrl: string | null;
}

export default function RegistrationsHero({ registrationUrl }: RegistrationsHeroProps) {
  const open = registrationUrl !== null;

  return (
    <section
      id="registrations-hero"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: "70svh",
        marginTop: -96,
        paddingTop: 96,
        backgroundColor: "var(--color-background)",
      }}
      aria-label="IICT 2026 registrations"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 25%, rgba(236,72,153,0.18) 0%, transparent 45%), radial-gradient(ellipse at 20% 85%, rgba(78,3,255,0.22) 0%, transparent 45%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto flex flex-col gap-9 px-5 md:px-8 py-12 md:py-16 w-full"
        style={{ maxWidth: 1240 }}
        variants={CONTAINER}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex items-center gap-3" variants={FADE_UP} transition={{ duration: 0.5 }}>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 28 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              height: 1,
              backgroundColor: "rgba(236,72,153,0.6)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--color-accent-orange)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Registrations · IICT 2026 · 3rd Edition
          </span>
        </motion.div>

        <motion.h1
          className="text-white"
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(36px, 6vw, 84px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
          variants={FADE_UP}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Attend the{" "}
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
            Workshop
          </motion.span>
        </motion.h1>

        <motion.p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(14px, 1.4vw, 18px)",
            color: "var(--color-text-primary)",
            lineHeight: 1.7,
            letterSpacing: "-0.02em",
            maxWidth: 820,
          }}
          variants={FADE_UP}
          transition={{ duration: 0.5 }}
        >
          Two days of talks, posters and hallway conversations with the people building
          compilers in India and beyond — October 2–3, 2026 at the Indian Institute of
          Science, Bengaluru.
        </motion.p>

        <motion.div variants={FADE_UP} transition={{ duration: 0.5 }}>
          {open ? (
            <motion.a
              href={registrationUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[4px] px-8 py-3.5 text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 16,
                letterSpacing: "0.14em",
                backgroundColor: "var(--color-primary)",
              }}
              whileHover={{ scale: 1.03, backgroundColor: "var(--color-primary-hover)" }}
              transition={{ duration: 0.15 }}
            >
              Register Now
            </motion.a>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontFamily: "var(--font-geist-mono)",
                fontSize: 14,
                color: "rgba(255,255,255,0.78)",
                letterSpacing: "0.01em",
              }}
            >
              Registrations opening soon — get updates from the home page
            </span>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
