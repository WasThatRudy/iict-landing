"use client";

import { useRef, useState, useLayoutEffect } from "react";

const HEADING_WORDS = ["Innovations", "In", "Compiler", "Technology"];

const BODY =
  "The IICT workshop aims to bring together researchers, practitioners, and enthusiasts in the field of compiler technologies. This year's theme focuses on the cutting-edge advancements in design, implementation, and optimization of compiler techniques as well as their applications in emerging software and hardware platforms. The workshop consists of talks reviewed by our esteemed Program Committee along with invited talks by experts from both industry and academia. This is a novel opportunity to interact and learn from experts and enthusiasts from both academia and industry. We invite presentation proposals for our upcoming workshop.";

export default function VisionSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  // Cached resting bounding boxes — measured before any transform is applied
  const wordRects = useRef<{ left: number; right: number; top: number; bottom: number }[]>([]);

  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);
  const [wordProximities, setWordProximities] = useState<number[]>(HEADING_WORDS.map(() => 0));
  const [bodyCursor, setBodyCursor] = useState<{ x: number; y: number } | null>(null);

  // Measure word centres once at rest, and again on resize
  useLayoutEffect(() => {
    function measure() {
      const cardRect = cardRef.current?.getBoundingClientRect();
      if (!cardRect) return;
      wordRects.current = wordRefs.current.map((el) => {
        if (!el) return { left: 0, right: 0, top: 0, bottom: 0 };
        const r = el.getBoundingClientRect();
        return {
          left:   r.left   - cardRect.left,
          right:  r.right  - cardRect.left,
          top:    r.top    - cardRect.top,
          bottom: r.bottom - cardRect.top,
        };
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const cardRect = cardRef.current?.getBoundingClientRect();
    if (!cardRect) return;

    const cx = e.clientX - cardRect.left;
    const cy = e.clientY - cardRect.top;

    setSpotlight({ x: (cx / cardRect.width) * 100, y: (cy / cardRect.height) * 100 });

    // Distance-to-rect: 0 inside the word, falls off from nearest edge
    setWordProximities(
      wordRects.current.map((r) => {
        const dx = Math.max(r.left - cx, 0, cx - r.right);
        const dy = Math.max(r.top  - cy, 0, cy - r.bottom);
        const dist = Math.sqrt(dx * dx + dy * dy);
        return Math.max(0, 1 - dist / 60);
      })
    );

    const bodyRect = bodyRef.current?.getBoundingClientRect();
    if (bodyRect) {
      setBodyCursor({
        x: e.clientX - bodyRect.left,
        y: e.clientY - bodyRect.top,
      });
    }
  }

  function handleMouseLeave() {
    setSpotlight(null);
    setWordProximities(HEADING_WORDS.map(() => 0));
    setBodyCursor(null);
  }

  return (
    <section
      id="vision"
      aria-label="Vision of IICT"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(32px, 5vw, 64px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "clamp(40px, 6vw, 72px) clamp(24px, 6vw, 80px)",
            cursor: "crosshair",
          }}
        >
          {/* Cursor spotlight */}
          {spotlight && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(78,3,255,0.12) 0%, transparent 70%)`,
              }}
            />
          )}

          {/* Static background glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 70% 110%, rgba(139,92,246,0.8) 0%, transparent 45%), radial-gradient(ellipse at 30% 105%, rgba(236,72,153,0.6) 0%, transparent 40%)",
            }}
          />

          {/* Label */}
          <p
            className="relative mb-3"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Vision of
          </p>

          {/* Heading — word-level magnetic lift using real DOM positions */}
          <h2
            className="relative mb-10"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 6.5vw, 88px)",
              letterSpacing: "0.05em",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {HEADING_WORDS.map((word, i) => {
              const p = wordProximities[i] ?? 0;
              const initial = word[0];
              const rest = word.slice(1);
              // Initial: same as rest at rest, purple-tinted white + glow on hover
              const initialColor = p > 0.01
                ? `rgba(${Math.round(180 + p * 75)},${Math.round(130 + p * 125)},255,${0.7 + p * 0.3})`
                : `rgba(255,255,255,0.55)`;
              const initialShadow = p > 0.01
                ? `0 0 ${10 + p * 22}px rgba(160,100,255,${p * 0.9})`
                : "none";
              return (
                <span
                  key={word}
                  ref={(el) => { wordRefs.current[i] = el; }}
                  style={{
                    display: "inline-block",
                    transform: `translateY(${-p * 8}px) scale(${1 + p * 0.04})`,
                    transition: "transform 0.15s ease",
                    marginRight: "0.22em",
                  }}
                >
                  <span
                    style={{
                      color: initialColor,
                      textShadow: initialShadow,
                      transition: "color 0.15s ease, text-shadow 0.15s ease",
                    }}
                  >
                    {initial}
                  </span>
                  <span
                    style={{
                      color: `rgba(255,255,255,${0.45 + p * 0.45})`,
                      transition: "color 0.15s ease",
                    }}
                  >
                    {rest}
                  </span>
                </span>
              );
            })}
          </h2>

          {/* Body — dim base + bright overlay masked to cursor circle */}
          <div className="relative" style={{ maxWidth: 860 }}>
            {/* Dim base */}
            <p
              ref={bodyRef}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 600,
                fontSize: "clamp(13px, 1.2vw, 16px)",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                letterSpacing: "-0.03em",
              }}
            >
              {BODY}
            </p>

            {/* Bright overlay, masked to a circle around cursor */}
            {bodyCursor && (
              <p
                aria-hidden
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.7,
                  letterSpacing: "-0.03em",
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  WebkitMaskImage: `radial-gradient(circle 100px at ${bodyCursor.x}px ${bodyCursor.y}px, black 0%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 100px at ${bodyCursor.x}px ${bodyCursor.y}px, black 0%, transparent 100%)`,
                }}
              >
                {BODY}
              </p>
            )}
          </div>
        </div>

        {/* About IICT */}
        <div
          className="flex flex-col md:flex-row gap-10 md:gap-16 mt-16 md:mt-20"
          style={{ padding: "0 4px" }}
        >
          {/* Left: text */}
          <div className="flex flex-col gap-4 flex-1">
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              About IICT
            </span>
            <p
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                letterSpacing: "-0.02em",
              }}
            >
              Innovations in Compiler Technology (IICT) is a workshop dedicated to bringing together
              researchers, practitioners, and enthusiasts in the field of compiler technologies.
              Our inaugural edition, IICT 2024, was met with an enthusiastic response, drawing over
              200 participants from across the compiler community. Building on that success, IICT 2025
              introduced India&apos;s first Compiler themed Hackathon —{" "}
              <a href="https://segfault.compilertech.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>SEGFAULT</a>
              {" "}— and grew to 380+ participants. The 2025 edition was supported by ACM.
            </p>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col sm:flex-row md:flex-col justify-start gap-4 shrink-0">
            {[
              { value: "200+",          label: "Participants in 2024" },
              { value: "380+",          label: "Participants in 2025" },
              { value: "ACM Sponsored", label: "IICT 2025"            },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1"
                style={{
                  borderLeft: "1.5px solid rgba(78,3,255,0.5)",
                  paddingLeft: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "clamp(20px, 2vw, 28px)",
                    color: "var(--color-text-primary)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
