"use client";

import { motion } from "framer-motion";


const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

interface SubmissionsTracksSectionProps {
  easyChairUrl: string;
}

const WRITING_RESOURCES: { label: string; url: string }[] = [
  {
    label: "Writing a research paper that articulates its contributions",
    url: "https://www.sciencedirect.com/science/article/pii/S1878764915001606",
  },
  {
    label: "How to write a research paper — Cambridge Research",
    url: "https://cambridge-research.org/blogs/how-to-write-a-research-paper/",
  },
];

export default function SubmissionsTracksSection({ easyChairUrl }: SubmissionsTracksSectionProps) {
  return (
    <section
      id="tracks"
      aria-label="Submission tracks"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 96px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
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
            [ Tracks ]
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
            Two tracks,{" "}
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
              many formats.
            </motion.span>
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
              maxWidth: 760,
            }}
          >
            Submissions should provide sufficient information for the Program Committee to judge
            their quality. Some submissions may be accepted as posters rather than conventional
            presentations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <TrackCard
            kicker="Research Papers"
            title="Original research, ongoing or emerging."
            items={[
              { label: "Extended abstract", value: "2 – 4 pages" },
              { label: "Full paper",        value: "4 – 8 pages" },
            ]}
            href={easyChairUrl}
          />
          <TrackCard
            kicker="Practice Papers"
            title="Tooling, deployments, and lessons from the field."
            items={[
              { label: "Extended abstract", value: "1 page or more" },
              { label: "Slides",            value: "Slide deck" },
            ]}
            href={easyChairUrl}
          />
        </motion.div>

        {/* Special: recently accepted papers */}
        <motion.div
          className="mt-6 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          style={{
            backgroundColor: "rgba(255,136,85,0.06)",
            border: "1px solid rgba(255,136,85,0.3)",
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "#ff8855",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Special session
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(13px, 1.1vw, 15px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Papers accepted or presented at premier venues (CORE A* / A conferences) in the last 12
            months can also be submitted. A limited number may be accepted for the special session.
            Submit the camera-ready version with a first-page footnote stating where it appeared.
          </p>
        </motion.div>

        {/* Writing resources */}
        <motion.div
          className="mt-6 flex flex-col gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "#ff8855",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Writing your submission
          </p>
          <ul className="flex flex-col gap-2">
            {WRITING_RESOURCES.map((r) => (
              <li key={r.url} className="flex items-start gap-2">
                <span style={{ color: "#ff8855", lineHeight: 1.5 }}>↳</span>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(13px, 1.05vw, 14px)",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.55,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

interface TrackCardProps {
  kicker: string;
  title: string;
  items: { label: string; value: string }[];
  href: string;
}

function TrackCard({ kicker, title, items, href }: TrackCardProps) {
  return (
    <motion.article
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      variants={FADE_UP}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, borderColor: "rgba(236,72,153,0.25)" }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0"
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, #ff2d8e 0%, #ff5c4d 25%, #ff9a3c 50%, #ffc14a 75%, #ff2d8e 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col gap-2">
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11,
            color: "#ff8855",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {kicker}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(20px, 2.4vw, 28px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h3>
      </div>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-4 py-2"
            style={{ borderBottom: "1px dashed rgba(255,255,255,0.08)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 13,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 13,
                color: "#ff8855",
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start mt-1"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 13,
          color: "#ff6699",
          letterSpacing: "-0.01em",
          fontWeight: 600,
        }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.18 }}
      >
        <span>Submit this track</span>
        <motion.span
          aria-hidden
          style={{ display: "inline-block" }}
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.article>
  );
}
