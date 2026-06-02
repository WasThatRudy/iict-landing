"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

interface SubmissionsHeroProps {
  easyChairUrl: string;
}

export default function SubmissionsHero({ easyChairUrl }: SubmissionsHeroProps) {
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
      aria-label="IICT 2026 call for papers"
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
              color: "#ff8855",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Submissions · IICT 2026 · 3rd Edition
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
          Call for{" "}
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
            Papers
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
          IICT-2026 invites research and practice papers on all aspects of programming languages and
          compilers — classical compiler techniques, compilers for AI/ML, domain-specific languages,
          Web3, blockchains, and beyond. The workshop is an iPLAN event hosted at the Indian
          Institute of Science, Bengaluru on October 2–3, 2026.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row md:items-center gap-5"
          variants={FADE_UP}
          transition={{ duration: 0.5 }}
        >
          <StatusPill />

          <motion.a
            href={easyChairUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 self-start"
            style={{
              background:
                "linear-gradient(95deg, #ff2d8e 0%, #ff5c4d 25%, #ff9a3c 50%, #ffc14a 75%, #ff2d8e 100%)",
              backgroundSize: "200% auto",
              color: "#fff",
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.02em",
            }}
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(255,90,77,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Submit on EasyChair</span>
            <motion.span
              aria-hidden
              style={{ display: "inline-block" }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <DateChip icon="/assets/svgs/icon-calendar.svg" label="Submissions open" value="1 Jun 2026" />
          <DateChip icon="/assets/svgs/icon-calendar.svg" label="Submission deadline" value="1 Jul 2026" highlight />
          <DateChip icon="/assets/svgs/icon-location.svg" label="Workshop" value="2 – 3 Oct 2026 · IISc" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatusPill() {
  return (
    <motion.span
      className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 self-start"
      style={{
        backgroundColor: "rgba(34,197,94,0.12)",
        border: "1px solid rgba(34,197,94,0.4)",
      }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(34,197,94,0)",
          "0 0 18px rgba(34,197,94,0.55)",
          "0 0 0px rgba(34,197,94,0)",
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span
        className="rounded-full"
        style={{ width: 8, height: 8, backgroundColor: "#22c55e" }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 14,
          color: "#22c55e",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Submissions Open
      </span>
    </motion.span>
  );
}

interface DateChipProps {
  icon: string;
  label: string;
  value: string;
  highlight?: boolean;
}

function DateChip({ icon, label, value, highlight }: DateChipProps) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45 }}
      className="flex flex-col gap-1.5 rounded-xl px-4 py-3.5"
      style={{
        backgroundColor: highlight ? "rgba(255,136,85,0.08)" : "rgba(255,255,255,0.03)",
        border: highlight
          ? "1px solid rgba(255,136,85,0.35)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="flex items-center justify-center rounded-full"
          style={{ width: 22, height: 22, backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <Image src={icon} alt="" width={10} height={10} />
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11,
            color: "#ff8855",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {label}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 14,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          fontWeight: 600,
        }}
      >
        {value}
      </span>
    </motion.div>
  );
}
