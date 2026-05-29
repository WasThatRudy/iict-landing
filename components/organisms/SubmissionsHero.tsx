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

export default function SubmissionsHero() {
  return (
    <section
      id="submissions-hero"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: "100svh",
        marginTop: -96,
        paddingTop: 96,
        backgroundColor: "var(--color-background)",
      }}
      aria-label="IICT 2026 submissions"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 25%, rgba(236,72,153,0.18) 0%, transparent 45%), radial-gradient(ellipse at 20% 85%, rgba(78,3,255,0.22) 0%, transparent 45%), radial-gradient(ellipse at 95% 95%, rgba(255,140,60,0.12) 0%, transparent 40%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto flex flex-col gap-10 px-5 md:px-8 py-12 md:py-16 w-full"
        style={{ maxWidth: 1240 }}
        variants={CONTAINER}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div className="flex items-center gap-3" variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 28 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
              color: "#ff8855",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Submissions · IICT 2026 · 3rd Edition
          </span>
        </motion.div>

        {/* Title */}
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
          Share your work at{" "}
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
            IICT 2026
          </motion.span>
        </motion.h1>

        {/* Lede */}
        <motion.p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(14px, 1.4vw, 18px)",
            color: "var(--color-text-primary)",
            lineHeight: 1.7,
            letterSpacing: "-0.02em",
            maxWidth: 760,
          }}
          variants={FADE_UP}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Present your research, tool, or experience report to a curated audience of compiler
          researchers, engineers, and students. Submissions are reviewed by our Program Committee
          and selected speakers join the IICT 2026 stage in Bengaluru.
        </motion.p>
      </motion.div>
    </section>
  );
}
