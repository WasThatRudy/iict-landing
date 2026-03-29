"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TalkCard } from "@/types";

interface TalksSectionProps {
  talks: TalkCard[];
  talks2024?: TalkCard[];
}

function TalkCardItem({ talk }: { talk: TalkCard }) {
  const ctaLabel = talk.ctaLabel ?? "Watch";

  return (
    <motion.a
      href={talk.watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-none overflow-hidden rounded-none"
      style={{ width: 360, height: 360, backgroundColor: "#000" }}
      whileHover="hover"
    >
      {/* Gradient blob background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: talk.gradient ?? "none" }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{ padding: 28 }}
      >
        {/* Title */}
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.5,
            maxWidth: 260,
          }}
        >
          {talk.title}
        </p>

        {/* CTA button */}
        <div className="flex items-center gap-3">
          {/* Circle with arrow */}
          <motion.div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{
              width: 36,
              height: 36,
              border: "1px solid rgba(255,255,255,0.4)",
            }}
            variants={{ hover: { borderColor: "rgba(255,255,255,0.9)", scale: 1.08 } }}
            transition={{ duration: 0.15 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          {/* Label */}
          <span
            className="text-white uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 15,
              letterSpacing: "0.18em",
            }}
          >
            {ctaLabel}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function TalksSection({ talks, talks2024 = [] }: TalksSectionProps) {
  const [activeYear, setActiveYear] = useState<"2025" | "2024">("2025");
  const activeTalks = activeYear === "2025" ? talks : talks2024;

  return (
    <section
      id="talks"
      className="py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="Talks from previous IICT conferences"
    >
      <div className="mx-auto px-5 md:px-8" style={{ maxWidth: 1240 }}>
        {/* Heading */}
        <h2
          className="text-white mb-8"
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(32px, 5vw, 60px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 700,
          }}
        >
          Check Talks From Previous IICT Conference
        </h2>

        {/* Year tabs */}
        <div className="flex items-center gap-6 mb-8">
          {(["2025", "2024"] as const).map((year) => {
            const isActive = activeYear === year;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className="flex flex-col items-start gap-1.5 pb-1"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: isActive ? "#4e03ff" : "rgba(255,255,255,0.4)",
                    transition: "color 0.2s",
                  }}
                >
                  {year}
                </span>
                <div
                  style={{
                    height: 1.5,
                    width: "100%",
                    backgroundColor: isActive ? "#4e03ff" : "rgba(255,255,255,0.15)",
                    transition: "background-color 0.2s",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Horizontally scrollable cards — bleeds to edges */}
      <div
        className="flex gap-7 overflow-x-auto px-5 md:px-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: 4,
        }}
      >
        {activeTalks.length > 0 ? (
          activeTalks.map((talk) => <TalkCardItem key={talk.id} talk={talk} />)
        ) : (
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 14,
              color: "rgba(255,255,255,0.3)",
              paddingLeft: 4,
            }}
          >
            No talks available yet.
          </p>
        )}
        {/* Trailing spacer so last card doesn't sit flush on wide screens */}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}
