"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SponsorshipsHeroProps {
  sponsorshipEmail: string;
}

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function SponsorshipsHero({ sponsorshipEmail }: SponsorshipsHeroProps) {
  return (
    <section
      id="sponsorships-hero"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: "100svh",
        marginTop: -96,
        paddingTop: 96,
        backgroundColor: "var(--color-background)",
      }}
      aria-label="Sponsor IICT 2026"
    >
      {/* Slowly drifting brochure-style gradient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(236,72,153,0.18) 0%, transparent 45%), radial-gradient(ellipse at 15% 90%, rgba(78,3,255,0.22) 0%, transparent 45%), radial-gradient(ellipse at 95% 95%, rgba(255,140,60,0.12) 0%, transparent 40%)",
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
            Sponsorship · IICT 2026 · 3rd Edition
          </span>
        </motion.div>

        {/* Title */}
        <div className="flex flex-col gap-5">
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
            Partner with{" "}
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
            A premier forum dedicated to compiler technologies and their evolving role in modern
            software and hardware platforms. IICT brings together researchers, practitioners, and
            enthusiasts working on the design, implementation, and optimization of compiler systems.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2"
          >
            <motion.a
              href="#contact-form"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5"
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
              <span>Become a sponsor</span>
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
        </div>

        {/* Event meta */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <MetaItem
            icon="/assets/svgs/icon-calendar.svg"
            label="Date"
            value="Oct 2 – 3, 2026"
          />
          <MetaItem
            icon="/assets/svgs/icon-location.svg"
            label="Venue"
            value="AV Rama Rao Auditorium, IISc · Bangalore"
          />
          <MetaItem
            icon="/assets/svgs/icon-email.svg"
            label="Contact"
            value={sponsorshipEmail}
            href={`mailto:${sponsorshipEmail}`}
          />
        </motion.div>

        {/* Highlight strip */}
        <motion.div
          className="relative overflow-hidden rounded-2xl px-6 md:px-10 py-6 mt-2"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          variants={FADE_UP}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
              IICT is more than a technical workshop.
            </span>{" "}
            It is a collaborative initiative to advance compiler education, research, and innovation
            across academia and industry. Your sponsorship plays a vital role in enabling this vision.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface MetaItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

function MetaItem({ icon, label, value, href }: MetaItemProps) {
  const valueNode = (
    <span
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: 13,
        color: "var(--color-text-primary)",
        letterSpacing: "-0.02em",
        lineHeight: 1.5,
      }}
    >
      {value}
    </span>
  );
  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={FADE_UP}
      transition={{ duration: 0.45, ease: "easeOut" }}
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
          }}
        >
          {label}
        </span>
      </div>
      {href ? (
        <a href={href} className="underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity">
          {valueNode}
        </a>
      ) : (
        valueNode
      )}
    </motion.div>
  );
}
