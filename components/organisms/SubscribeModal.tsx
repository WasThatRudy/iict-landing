"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubscribeModalProps {
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

const PARTICLES = [
  { x: "18%", y: "70%", size: 2.5, duration: 3.2, delay: 0 },
  { x: "72%", y: "80%", size: 1.8, duration: 2.8, delay: 0.6 },
  { x: "40%", y: "85%", size: 2,   duration: 3.8, delay: 1.1 },
  { x: "85%", y: "60%", size: 1.5, duration: 2.5, delay: 0.3 },
  { x: "55%", y: "75%", size: 3,   duration: 4.0, delay: 1.6 },
  { x: "28%", y: "90%", size: 1.8, duration: 3.1, delay: 0.9 },
];

export default function SubscribeModal({ onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");
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
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(7,7,8,0.9)", backdropFilter: "blur(10px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
      >
        {/* Floating particles in backdrop */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              backgroundColor: "#4e03ff",
              filter: "blur(0.5px)",
            }}
            animate={{ y: [0, -60, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Panel */}
        <motion.div
          className="relative w-full max-w-[460px] rounded-2xl overflow-hidden mx-2"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: 1,
            background: "linear-gradient(135deg, #4e03ff 0%, rgba(78,3,255,0.3) 50%, rgba(255,255,255,0.05) 100%)",
          }}
        >
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: "#08070d" }}>

            {/* Dragon scale pattern — visible */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.12 }}
            >
              <defs>
                <pattern id="dragonscales" x="0" y="0" width="36" height="30" patternUnits="userSpaceOnUse">
                  <ellipse cx="18" cy="0"  rx="18" ry="9" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
                  <ellipse cx="0"  cy="15" rx="18" ry="9" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
                  <ellipse cx="36" cy="15" rx="18" ry="9" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
                  <ellipse cx="18" cy="30" rx="18" ry="9" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dragonscales)"/>
            </svg>

            {/* Dragon wing silhouette — bottom right */}
            <svg
              className="absolute bottom-0 right-0 pointer-events-none"
              width="240" height="200"
              viewBox="0 0 240 200"
              fill="none"
              style={{ opacity: 0.07 }}
            >
              <path
                d="M240 200 C200 160, 180 100, 220 60 C200 80, 160 70, 140 40 C160 70, 130 100, 100 80 C130 100, 110 140, 80 130 C110 140, 120 170, 100 200 Z"
                fill="#4e03ff"
              />
              <path
                d="M240 200 C220 180, 200 150, 230 110 C210 130, 170 120, 150 90 C170 120, 145 150, 120 140 C145 155, 150 180, 130 200 Z"
                fill="#4e03ff"
                opacity="0.6"
              />
            </svg>

            {/* Purple glow — top left */}
            <div
              className="absolute -top-28 -left-28 w-80 h-80 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(78,3,255,0.22) 0%, transparent 65%)" }}
            />
            {/* Faint glow — bottom right */}
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(78,3,255,0.12) 0%, transparent 65%)" }}
            />

            <div className="relative px-6 py-8 md:px-10 md:py-11 flex flex-col gap-7">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 flex items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/10"
                style={{ width: 32, height: 32, color: "rgba(255,255,255,0.3)" }}
                aria-label="Close"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Header */}
              <div className="flex flex-col gap-3">
                <span
                  className="uppercase"
                  style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, letterSpacing: "0.2em", color: "rgba(78,3,255,0.9)" }}
                >
                  ⬡ IICT 2026 ⬡
                </span>
                <h2
                  className="text-white leading-none"
                  style={{
                    fontFamily: "var(--font-boldonse)",
                    fontSize: "clamp(28px, 5vw, 38px)",
                    letterSpacing: "-0.03em",
                    textShadow: "0 0 60px rgba(78,3,255,0.5)",
                  }}
                >
                  Stay Updated
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                  Be the first to know about speakers, dates, and registration for India&apos;s largest compiler conference.
                </p>
              </div>

              <div style={{ height: 1, background: "linear-gradient(to right, rgba(78,3,255,0.5), transparent)" }} />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-4 text-center"
                >
                  <motion.div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 52, height: 52, backgroundColor: "var(--color-primary)" }}
                    animate={{ boxShadow: ["0 0 0px rgba(78,3,255,0.4)", "0 0 24px rgba(78,3,255,0.7)", "0 0 0px rgba(78,3,255,0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <p className="text-white" style={{ fontFamily: "var(--font-boldonse)", fontSize: 20, letterSpacing: "-0.02em" }}>
                    You&apos;re in.
                  </p>
                  <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "var(--color-text-secondary)" }}>
                    We&apos;ll reach out when things kick off.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-1 px-8 py-3 rounded-full text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "var(--color-primary)", fontFamily: "var(--font-bebas-neue)", fontSize: 16, letterSpacing: "0.1em" }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="sub-email"
                      className="uppercase"
                      style={{ fontFamily: "var(--font-bebas-neue)", fontSize: 13, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)" }}
                    >
                      Email Address
                    </label>
                    <input
                      ref={inputRef}
                      id="sub-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                      className="w-full rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        backgroundColor: "rgba(78,3,255,0.07)",
                        border: status === "error" ? "1px solid rgba(255,80,80,0.5)" : "1px solid rgba(78,3,255,0.25)",
                        transition: "border-color 0.15s, box-shadow 0.15s",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(78,3,255,0.9)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(78,3,255,0.18)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = status === "error" ? "rgba(255,80,80,0.5)" : "rgba(78,3,255,0.25)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {status === "error" && (
                      <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "rgba(255,100,100,0.9)" }}>
                        {errorMsg}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg py-3.5 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: "var(--font-bebas-neue)",
                      fontSize: 18,
                      letterSpacing: "0.14em",
                      backgroundColor: "var(--color-primary)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 32px rgba(78,3,255,0.55)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Subscribing…
                      </span>
                    ) : "Notify Me"}
                  </motion.button>

                  <p className="text-center" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
