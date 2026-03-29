"use client";

import Image from "next/image";
import { useState, useRef, useImperativeHandle, forwardRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface HeroSectionHandle {
  openInput: () => void;
}

interface HeroSectionProps {
  avatars: { src: string; alt: string }[];
  onOpenModal: () => void;
}

type InputState = "idle" | "open" | "loading" | "success" | "error";

const HeroSection = forwardRef<HeroSectionHandle, HeroSectionProps>(function HeroSection({ avatars, onOpenModal }, ref) {
  const [inputState, setInputState] = useState<InputState>("idle");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    setInputState("open");
    setTimeout(() => inputRef.current?.focus(), 200);
  }

  const openInputHighlighted = useCallback(() => {
    setInputState((s) => (s === "idle" ? "open" : s));
    setHighlighted(true);
    setTimeout(() => inputRef.current?.focus(), 200);
    setTimeout(() => setHighlighted(false), 2200);
  }, []);

  useImperativeHandle(ref, () => ({ openInput: openInputHighlighted }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputState === "loading" || inputState === "success") return;
    setInputState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json?.error?.message ?? "Something went wrong.");
        setInputState("error");
        return;
      }
      setInputState("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setInputState("error");
    }
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight: "calc(100svh - 80px)",
        marginTop: -80,
        paddingTop: 80,
        backgroundColor: "var(--color-background)",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-iict-2025.jpg"
          alt="IICT 2026 conference attendees"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,7,8,0.15) 0%, rgba(7,7,8,0.5) 55%, rgba(7,7,8,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end">
        <div
          className="mx-auto flex w-full flex-col pb-10 pt-14 gap-5 px-5 md:px-8"
          style={{ maxWidth: 1240 }}
        >
          {/* Date + Location */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 26, height: 26, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Image src="/assets/svgs/icon-calendar.svg" alt="" width={12} height={12} />
              </div>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(11px, 1.2vw, 14px)", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
                TBA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 26, height: 26, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Image src="/assets/svgs/icon-location.svg" alt="" width={12} height={12} />
              </div>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(11px, 1.2vw, 14px)", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
                Bengaluru
              </span>
            </div>
          </div>

          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0">
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-boldonse)",
                fontSize: "clamp(38px, 5.6vw, 77px)",
                letterSpacing: "-0.04em",
              }}
            >
              IICT 2026
            </h1>

            <div className="md:flex-1" />

            {/* Morphing CTA */}
            <div className="flex flex-col items-start gap-2">
              {/* Row: animated arrow (when highlighted) + morphing input/button */}
              <div className="flex items-center gap-3">

                {/* Arrow label — slides in from left when triggered from navbar */}
                <AnimatePresence>
                  {highlighted && (
                    <motion.div
                      className="flex items-center gap-1.5 pointer-events-none"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>
                        type here
                      </span>
                      <motion.svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#4e03ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow wrapper — pulses when highlighted */}
                <motion.div
                  animate={highlighted
                    ? { boxShadow: ["0 0 0px rgba(78,3,255,0)", "0 0 20px rgba(78,3,255,0.65)", "0 0 0px rgba(78,3,255,0)"] }
                    : { boxShadow: "0 0 0px rgba(78,3,255,0)" }}
                  transition={highlighted ? { duration: 0.9, repeat: 2, ease: "easeInOut" } : { duration: 0.3 }}
                  style={{ borderRadius: 999 }}
                >
                  <AnimatePresence mode="wait">
                    {inputState === "idle" && (
                      <motion.button
                        key="btn"
                        onClick={handleButtonClick}
                        className="flex items-center overflow-hidden rounded-full focus:outline-none"
                        style={{ backgroundColor: "var(--color-primary)" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        whileHover={{ boxShadow: "0 0 24px rgba(78,3,255,0.6)", scale: 1.03 }}
                        layout
                      >
                        <span
                          className="flex items-center justify-center rounded-full shrink-0"
                          style={{ width: 34, height: 34, backgroundColor: "var(--color-primary)" }}
                        >
                          <Image src="/assets/svgs/icon-arrow.svg" alt="" width={14} height={14} />
                        </span>
                        <span className="pr-5 text-white" style={{ fontFamily: "var(--font-geist-mono)", fontWeight: 500, fontSize: 14 }}>
                          Sign Up for Updates
                        </span>
                      </motion.button>
                    )}

                    {inputState === "success" && (
                      <motion.div
                        key="success"
                        className="flex items-center gap-3 rounded-full px-5"
                        style={{ height: 42, backgroundColor: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "#22c55e" }}>
                          You&apos;re on the list.
                        </span>
                      </motion.div>
                    )}

                    {(inputState === "open" || inputState === "loading" || inputState === "error") && (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="flex items-center overflow-hidden rounded-full"
                        style={{
                          border: inputState === "error"
                            ? "1px solid rgba(255,80,80,0.5)"
                            : "1px solid rgba(78,3,255,0.5)",
                          backgroundColor: "rgba(7,7,8,0.7)",
                          backdropFilter: "blur(8px)",
                        }}
                        initial={{ opacity: 0, width: 42 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <input
                          ref={inputRef}
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); if (inputState === "error") setInputState("open"); }}
                          className="bg-transparent text-white placeholder:text-white/30 outline-none pl-5 pr-2"
                          style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, width: "clamp(180px, 22vw, 260px)", height: 42 }}
                        />
                        <motion.button
                          type="submit"
                          disabled={inputState === "loading"}
                          className="flex items-center justify-center rounded-full shrink-0 m-1 disabled:opacity-50"
                          style={{ width: 34, height: 34, backgroundColor: "var(--color-primary)" }}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.12 }}
                        >
                          {inputState === "loading" ? (
                            <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                              <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                          ) : (
                            <Image src="/assets/svgs/icon-arrow.svg" alt="Submit" width={14} height={14} />
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Error message */}
              <AnimatePresence>
                {inputState === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "rgba(255,100,100,0.9)", paddingLeft: 16 }}
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Subtitle */}
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(13px, 1.5vw, 18px)", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
            Coming Soon!
          </p>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
