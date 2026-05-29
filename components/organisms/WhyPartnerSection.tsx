"use client";

import { motion } from "framer-motion";

interface WhyPartnerSectionProps {
  contactHref?: string;
}

const REASONS = [
  {
    n: "01",
    title: "Reach emerging talent",
    body: "Bring high-quality compiler content to students and early-career researchers.",
  },
  {
    n: "02",
    title: "Strengthen your presence",
    body: "Establish your brand in a focused, technically advanced community.",
  },
  {
    n: "03",
    title: "Network within the field",
    body: "Build connections with academic experts, researchers, and practitioners.",
  },
  {
    n: "04",
    title: "Recruit specialised talent",
    body: "Tap a curated pool for internships, full-time roles, and research collaboration.",
  },
  {
    n: "05",
    title: "Lead the ecosystem",
    body: "Be recognized as a key contributor to compiler research and community in India.",
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function WhyPartnerSection({ contactHref = "#contact-form" }: WhyPartnerSectionProps) {
  return (
    <section
      id="why-partner"
      aria-label="Why partner with IICT"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 96px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col gap-5 mb-12"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.span
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "#ff8855",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            [ Why Partner ]
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
              maxWidth: 880,
            }}
          >
            Why partner{" "}
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
              with IICT?
            </motion.span>
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            Your sponsorship is a commitment to advancing cutting-edge compiler technologies and the
            next generation of technologists in India. By supporting IICT, your organization will:
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {REASONS.map((r) => (
            <ReasonCard key={r.n} n={r.n} title={r.title} body={r.body} />
          ))}

          {/* CTA card */}
          <motion.a
            href={contactHref}
            className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between gap-5"
            style={{
              backgroundColor: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: 200,
            }}
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(236,72,153,0.55)" }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{
                height: 3,
                background:
                  "linear-gradient(90deg, #ff3399 0%, #ff6699 50%, #ff8855 100%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="flex flex-col gap-3">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Ready to partner?
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  letterSpacing: "0.04em",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.1,
                }}
              >
                Let&apos;s design a package that fits your goals.
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "#ff6699",
                  letterSpacing: "-0.01em",
                }}
              >
                Start a conversation
              </span>
              <motion.span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 14,
                  color: "#ff6699",
                  display: "inline-block",
                }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ReasonCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: 200,
      }}
      variants={FADE_UP}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        backgroundColor: "rgba(255,255,255,0.045)",
        borderColor: "rgba(236,72,153,0.25)",
      }}
    >
      <motion.span
        className="underline underline-offset-4"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 16,
          color: "#ff3399",
          letterSpacing: "0.04em",
          fontWeight: 600,
          display: "inline-block",
          width: "fit-content",
        }}
        whileHover={{ scale: 1.1, x: 2 }}
        transition={{ duration: 0.18 }}
      >
        {n}
      </motion.span>
      <div className="flex flex-col gap-2">
        <h3
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 15,
            color: "var(--color-text-primary)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 13,
            color: "var(--color-text-primary)",
            lineHeight: 1.65,
            letterSpacing: "-0.02em",
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}
