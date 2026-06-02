"use client";

import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

const STEPS = [
  {
    n: 1,
    title: "Program Committee review",
    body:
      "Each submission is reviewed by Program Committee members. A first-pass conditional acceptance is issued based on this review.",
  },
  {
    n: 2,
    title: "90-second video round",
    body:
      "Conditionally accepted authors submit a 90-second video of their presentation, which appears as a teaser on the workshop site.",
  },
  {
    n: 3,
    title: "Final notification",
    body:
      "The committee makes the final selection based on the video round and notifies the authors.",
  },
];

export default function SubmissionsReviewProcessSection() {
  return (
    <section
      id="review-process"
      aria-label="Review process"
      style={{
        backgroundColor: "var(--color-background)",
        padding: "clamp(48px, 6vw, 96px) 20px",
        position: "relative",
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 30%, rgba(78,3,255,0.10) 0%, transparent 45%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1240 }}>
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
            [ Review Process ]
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
            Selection happens in{" "}
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
              two steps.
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.ol
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {STEPS.map((step) => (
            <motion.li
              key={step.n}
              className="rounded-2xl p-6 flex flex-col gap-3 relative"
              style={{
                backgroundColor: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              variants={FADE_UP}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, borderColor: "rgba(236,72,153,0.25)" }}
            >
              <span
                className="inline-flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "rgba(255,136,85,0.12)",
                  border: "1px solid rgba(255,136,85,0.4)",
                  fontFamily: "var(--font-boldonse)",
                  fontSize: 16,
                  color: "#ff8855",
                }}
              >
                {step.n}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
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
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          className="mt-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.45 }}
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "clamp(12px, 1vw, 14px)",
            color: "var(--color-text-primary)",
            lineHeight: 1.7,
            letterSpacing: "-0.02em",
            maxWidth: 880,
            opacity: 0.92,
          }}
        >
          IICT is a forum for discussion of ongoing and emerging research, so it does not publish
          formal proceedings. Authors are free to submit extended or revised versions of their work
          to other conferences or journals afterwards.
        </motion.p>
      </div>
    </section>
  );
}
