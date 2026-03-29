"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TalkCard } from "@/types";

const CARD_GRADIENTS = [
  "radial-gradient(ellipse at 80% 130%, rgba(139,92,246,0.85) 0%, transparent 50%), radial-gradient(ellipse at 25% 115%, rgba(156,163,175,0.5) 0%, transparent 45%)",
  "radial-gradient(ellipse at 55% 125%, rgba(249,115,22,0.85) 0%, transparent 45%), radial-gradient(ellipse at 75% 140%, rgba(236,72,153,0.75) 0%, transparent 50%)",
  "radial-gradient(ellipse at 20% 125%, rgba(234,88,12,0.85) 0%, transparent 45%), radial-gradient(ellipse at 65% 115%, rgba(124,58,237,0.7) 0%, transparent 50%)",
  "radial-gradient(ellipse at 60% 125%, rgba(67,56,202,0.85) 0%, transparent 45%), radial-gradient(ellipse at 25% 130%, rgba(219,39,119,0.65) 0%, transparent 50%)",
  "radial-gradient(ellipse at 40% 130%, rgba(16,185,129,0.7) 0%, transparent 45%), radial-gradient(ellipse at 75% 115%, rgba(59,130,246,0.65) 0%, transparent 50%)",
  "radial-gradient(ellipse at 70% 120%, rgba(245,158,11,0.8) 0%, transparent 45%), radial-gradient(ellipse at 30% 135%, rgba(239,68,68,0.6) 0%, transparent 50%)",
  "radial-gradient(ellipse at 35% 125%, rgba(168,85,247,0.8) 0%, transparent 50%), radial-gradient(ellipse at 80% 120%, rgba(20,184,166,0.55) 0%, transparent 45%)",
];

interface TalksSectionProps {
  talks: TalkCard[];
  talks2024?: TalkCard[];
}

function TalkCardItem({ talk, index }: { talk: TalkCard; index: number }) {
  const ctaLabel = talk.ctaLabel ?? "Watch";
  const gradient = talk.gradient ?? CARD_GRADIENTS[index % CARD_GRADIENTS.length];

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
        style={{ background: gradient }}
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

const CARD_WIDTH = 360;
const CARD_GAP = 28; // gap-7 = 1.75rem ≈ 28px

export default function TalksSection({ talks, talks2024 = [] }: TalksSectionProps) {
  const [activeYear, setActiveYear] = useState<"2025" | "2024">("2025");
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeTalks = activeYear === "2025" ? talks : talks2024;

  function scrollBy(delta: number) {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  }
  function scrollTo(pos: "start" | "end") {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    el.scrollTo({ left: pos === "start" ? 0 : el.scrollWidth, behavior: "smooth" });
  }

  return (
    <section
      id="archive"
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
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.5,
          }}
        >
          Check Talks From Previous<br />IICT Conference
        </h2>

        {/* Year tabs + scroll nav buttons */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
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

          {/* Scroll nav buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {([
              { label: "«", action: () => scrollTo("start"),                   title: "First" },
              { label: "‹", action: () => scrollBy(-(CARD_WIDTH + CARD_GAP)),  title: "Previous" },
              { label: "›", action: () => scrollBy(CARD_WIDTH + CARD_GAP),     title: "Next" },
              { label: "»", action: () => scrollTo("end"),                     title: "Last" },
            ] as const).map(({ label, action, title }) => (
              <button
                key={title}
                onClick={action}
                title={title}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 14,
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(78,3,255,0.7)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontally scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-7 overflow-x-auto px-5 md:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: 4 }}
      >
        {activeTalks.length > 0 ? (
          activeTalks.map((talk, i) => <TalkCardItem key={talk.id} talk={talk} index={i} />)
        ) : (
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: 14, color: "rgba(255,255,255,0.3)", paddingLeft: 4 }}>
            No talks available yet.
          </p>
        )}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}
