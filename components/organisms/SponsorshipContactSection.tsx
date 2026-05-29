"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SponsorshipContactSectionProps {
  sponsorshipEmail: string;
}

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
};

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function SponsorshipContactSection({
  sponsorshipEmail,
}: SponsorshipContactSectionProps) {
  const rows = [
    { label: "Email",   value: sponsorshipEmail,                         href: `mailto:${sponsorshipEmail}` },
    { label: "Website", value: "compilertech.org",                       href: "https://compilertech.org" },
    { label: "Venue",   value: "AV Rama Rao Auditorium · IISc, Bangalore" },
    { label: "Edition", value: "IICT 2026 · 3rd Edition" },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact for sponsorship"
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
            "radial-gradient(ellipse at 80% 100%, rgba(236,72,153,0.16) 0%, transparent 45%), radial-gradient(ellipse at 10% 0%, rgba(78,3,255,0.14) 0%, transparent 40%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            [ Contact ]
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
            }}
          >
            Contact{" "}
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
              us
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
              maxWidth: 720,
            }}
          >
            For sponsorship inquiries or customized proposals, our team is ready to design a
            partnership that fits your goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Details card */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            variants={CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 px-5 md:px-8 py-5"
                style={{
                  borderBottom:
                    i === rows.length - 1 ? "none" : "1px dashed rgba(255,255,255,0.08)",
                }}
                variants={FADE_UP}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 11,
                    color: "#ff8855",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(13px, 1.1vw, 15px)",
                      color: "#ff6699",
                      letterSpacing: "-0.01em",
                      wordBreak: "break-word",
                    }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "clamp(13px, 1.1vw, 15px)",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {row.value}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.a
            href="#contact-form"
            className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between gap-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(78,3,255,0.18) 0%, rgba(236,72,153,0.14) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: 220,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -4, borderColor: "rgba(236,72,153,0.45)" }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Drifting backdrop sheen */}
            <motion.div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10) 0%, transparent 40%)",
              }}
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10) 0%, transparent 40%)",
                  "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.10) 0%, transparent 40%)",
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.10) 0%, transparent 40%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex flex-col gap-3">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "#ff8855",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Get in touch
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(26px, 2.8vw, 34px)",
                  letterSpacing: "0.04em",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.1,
                }}
              >
                Let&apos;s build the next edition together.
              </h3>
            </div>
            <div className="relative flex items-center gap-3">
              <motion.span
                className="flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, backgroundColor: "var(--color-primary)" }}
                whileHover={{ rotate: -8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/assets/svgs/icon-arrow.svg" alt="" width={14} height={14} />
              </motion.span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                Open the inquiry form
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
