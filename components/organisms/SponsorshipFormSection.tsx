"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

interface FormState {
  name: string;
  company: string;
  email: string;
  message: string;
  website: string;
}

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  message: "",
  website: "",
};

export default function SponsorshipFormSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (state === "error") setState("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading" || state === "success") return;
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/sponsorship-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json?.error?.message ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <section
      id="contact-form"
      aria-label="Sponsorship inquiry form"
      style={{
        backgroundColor: "var(--color-background)",
        padding: "clamp(48px, 6vw, 96px) 20px",
        position: "relative",
        scrollMarginTop: 96,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 20%, rgba(236,72,153,0.14) 0%, transparent 45%), radial-gradient(ellipse at 10% 90%, rgba(78,3,255,0.18) 0%, transparent 45%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1240 }}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Left: copy */}
          <div className="flex flex-col gap-5">
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
              [ Get in Touch ]
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
                maxWidth: 520,
              }}
            >
              Let&apos;s design a package that{" "}
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
                fits your goals.
              </motion.span>
            </motion.h2>
            <motion.p
              variants={FADE_UP}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "clamp(13px, 1.2vw, 16px)",
                color: "var(--color-text-primary)",
                lineHeight: 1.75,
                letterSpacing: "-0.02em",
                maxWidth: 460,
              }}
            >
              Drop us a note about your sponsorship goals and the team will get back to you within a
              few working days. The more context you share, the more tailored the response.
            </motion.p>
          </div>

          {/* Right: form / success card */}
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start gap-4 py-4"
                >
                  <motion.span
                    className="inline-flex items-center justify-center rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "rgba(34,197,94,0.16)",
                      border: "1px solid rgba(34,197,94,0.4)",
                    }}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M5 12l5 5L19 7"
                        stroke="#22c55e"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.span>
                  <h3
                    style={{
                      fontFamily: "var(--font-boldonse)",
                      fontSize: "clamp(20px, 2.4vw, 28px)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Inquiry received.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 14,
                      color: "var(--color-text-primary)",
                      lineHeight: 1.65,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Thanks {form.name.trim().split(" ")[0] || "there"} — we&apos;ve emailed you a
                    copy. The team will be in touch within a few working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY);
                      setState("idle");
                    }}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 12,
                      color: "#ff8855",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "underline",
                      textUnderlineOffset: 4,
                    }}
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Honeypot — visually hidden, off-screen so screen readers ignore */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: -9999,
                      width: 1,
                      height: 1,
                      overflow: "hidden",
                    }}
                  >
                    <label>
                      Website (leave blank)
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={(e) => update("website", e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                    <Field
                      label="Company"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Your organization"
                      autoComplete="organization"
                      required
                    />
                  </div>
                  <Field
                    label="Work email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                  <Field
                    label="Message"
                    value={form.message}
                    onChange={(v) => update("message", v)}
                    placeholder="Tier you're interested in, goals, anything else we should know."
                    textarea
                    required
                  />

                  <AnimatePresence>
                    {state === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: 12,
                          color: "#ff5c4d",
                          letterSpacing: "-0.01em",
                          margin: 0,
                        }}
                      >
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={state === "loading"}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 disabled:opacity-60"
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
                    animate={
                      state === "loading"
                        ? {}
                        : { backgroundPosition: ["0% 50%", "200% 50%"] }
                    }
                    transition={
                      state === "loading"
                        ? {}
                        : { duration: 6, repeat: Infinity, ease: "linear" }
                    }
                    whileHover={state === "loading" ? {} : { scale: 1.02, boxShadow: "0 0 24px rgba(255,90,77,0.45)" }}
                    whileTap={state === "loading" ? {} : { scale: 0.98 }}
                  >
                    {state === "loading" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send inquiry</span>
                        <span aria-hidden>→</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  textarea,
  autoComplete,
}: FieldProps) {
  const baseStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(7,7,8,0.55)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "12px 14px",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-geist-mono)",
    fontSize: 14,
    letterSpacing: "-0.01em",
    outline: "none",
    resize: textarea ? "vertical" : "none",
    minHeight: textarea ? 120 : undefined,
  };

  return (
    <label className="flex flex-col gap-1.5">
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          color: "#ff8855",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#ff5c4d", marginLeft: 4 }} aria-hidden>
            *
          </span>
        )}
      </span>
      {textarea ? (
        <textarea
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          style={baseStyle}
          className="placeholder:text-white/30 focus:border-[#ff8855] focus:bg-[rgba(7,7,8,0.75)] transition-colors"
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={baseStyle}
          className="placeholder:text-white/30 focus:border-[#ff8855] focus:bg-[rgba(7,7,8,0.75)] transition-colors"
        />
      )}
    </label>
  );
}
