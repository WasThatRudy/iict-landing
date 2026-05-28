"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function SubmissionsDetailsSection() {
  return (
    <section
      id="submissions-details"
      aria-label="Submissions details"
      style={{
        backgroundColor: "var(--color-background)",
        padding: "clamp(48px, 6vw, 96px) 20px",
        position: "relative",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Guidelines */}
          <DetailCard
            kicker="Submissions Guidelines"
            title="Read carefully"
          >
            <p>
              Proposals should provide sufficient information for the review committee to be able to
              judge the quality of the submission. Proposals can be submitted under the form of an
              extended abstract, full paper, or slides, which will be reviewed by our esteemed
              Program Committee.
            </p>
            <p>
              Please note that some of the presentations may be accepted for posters rather than
              conventional presentations.
            </p>
          </DetailCard>

          {/* Review process */}
          <DetailCard
            kicker="Review Process"
            title="How it works"
          >
            <p>
              The selections happen in two steps. In the first step, a conditional acceptance is
              provided. The second step requires the participants of conditionally accepted papers
              to submit a 90-second video of their presentation. The final acceptance is provided
              based on the evaluation of the video presentations.
            </p>
            <ol className="flex flex-col gap-3 pt-2">
              <Step n={1} title="Conditional acceptance" body="The Program Committee reviews each proposal and issues a first-pass decision." />
              <Step n={2} title="Video round" body="Conditionally accepted authors submit a 90-second presentation video." />
              <Step n={3} title="Final acceptance" body="The committee makes the final selection based on the video round." />
            </ol>
          </DetailCard>
        </motion.div>
      </div>
    </section>
  );
}

interface DetailCardProps {
  kicker: string;
  title: string;
  children: ReactNode;
}

function DetailCard({ kicker, title, children }: DetailCardProps) {
  return (
    <motion.article
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
      style={{
        backgroundColor: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      variants={FADE_UP}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, borderColor: "rgba(236,72,153,0.25)" }}
    >
      <header className="flex flex-col gap-3">
        <h2
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(26px, 3vw, 40px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--color-text-primary)",
          }}
        >
          {kicker}
        </h2>
        <motion.p
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(20px, 2vw, 26px)",
            letterSpacing: "0.06em",
            color: "transparent",
            background:
              "linear-gradient(95deg, #ff2d8e 0%, #ff5c4d 25%, #ff9a3c 50%, #ffc14a 75%, #ff2d8e 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            paddingTop: "0.08em",
            paddingBottom: "0.14em",
            lineHeight: 1.2,
            width: "fit-content",
          }}
          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          {title}
        </motion.p>
      </header>

      <div
        className="flex flex-col gap-4"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "clamp(13px, 1.1vw, 15px)",
          color: "var(--color-text-primary)",
          lineHeight: 1.75,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </div>
    </motion.article>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex items-start gap-4">
      <span
        className="shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: 28,
          height: 28,
          backgroundColor: "rgba(255,136,85,0.12)",
          border: "1px solid rgba(255,136,85,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 12,
            fontWeight: 700,
            color: "#ff8855",
          }}
        >
          {n}
        </span>
      </span>
      <div className="flex flex-col gap-1">
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 14,
            color: "var(--color-text-primary)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 13,
            color: "var(--color-text-primary)",
            lineHeight: 1.65,
            letterSpacing: "-0.02em",
          }}
        >
          {body}
        </span>
      </div>
    </li>
  );
}
