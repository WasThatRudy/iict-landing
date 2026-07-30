"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 2025 fee structure carried over as placeholder — confirm 2026 pricing
// before the checkout link goes live.
const FEE_TIERS: { tier: string; price: string }[] = [
  { tier: "ACM Student",            price: "₹700"  },
  { tier: "Student",                price: "₹800"  },
  { tier: "ACM Professional Member", price: "₹1200" },
  { tier: "Professional Member",     price: "₹1300" },
];

const INCLUDES: { icon: string; text: string }[] = [
  { icon: "/assets/svgs/Attendee.svg",     text: "Two workshop days: October 2–3, 2026" },
  { icon: "/assets/svgs/Food-outline.svg", text: "Daily light breakfast, lunch & snacks" },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

const VIEWPORT = { once: true, margin: "-80px" };

interface RegistrationsFeeSectionProps {
  registrationUrl: string | null;
}

export default function RegistrationsFeeSection({ registrationUrl }: RegistrationsFeeSectionProps) {
  const open = registrationUrl !== null;

  return (
    <section
      id="fees"
      aria-label="Registration fee structure"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(48px, 6vw, 88px) 20px" }}
    >
      <div className="mx-auto flex flex-col gap-10" style={{ maxWidth: 900 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "var(--color-accent-orange)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            [ Fee Structure ]
          </span>
          <h2
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(28px, 3.4vw, 44px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--color-text-primary)",
            }}
          >
            Registration Fees
          </h2>
        </motion.div>

        {/* Fee table */}
        <motion.div
          className="overflow-hidden rounded-2xl"
          style={{ border: "1px solid var(--color-border-subtle)", backgroundColor: "var(--color-background-card)" }}
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          {FEE_TIERS.map(({ tier, price }, i) => (
            <div
              key={tier}
              className="flex items-center justify-between px-6 md:px-10 py-5 md:py-6"
              style={{
                borderBottom: i < FEE_TIERS.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {tier}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(22px, 2.2vw, 28px)",
                  letterSpacing: "0.06em",
                  color: "var(--color-text-primary)",
                }}
              >
                {price}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Notes */}
        <motion.div
          className="flex flex-col gap-2"
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          {[
            "Amounts are excluding 18% GST.",
            "To avail the ACM member discount, enter your ACM membership ID in the registration form.",
          ].map((note) => (
            <p
              key={note}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 14,
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
              }}
            >
              — {note}
            </p>
          ))}
        </motion.div>

        {/* Ticket includes + CTA */}
        <motion.div
          className="flex flex-col gap-5"
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 22,
              letterSpacing: "0.14em",
              color: "var(--color-text-primary)",
              textTransform: "uppercase",
            }}
          >
            Ticket Includes
          </h3>
          {INCLUDES.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 44, height: 44, backgroundColor: "var(--color-background-secondary)" }}
              >
                <Image src={icon} alt="" width={22} height={22} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 15,
                  color: "var(--color-text-primary)",
                }}
              >
                {text}
              </span>
            </div>
          ))}

          {open ? (
            <motion.a
              href={registrationUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start rounded-[4px] px-10 py-3.5 text-white mt-2"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 16,
                letterSpacing: "0.14em",
                backgroundColor: "var(--color-primary)",
              }}
              whileHover={{ scale: 1.03, backgroundColor: "var(--color-primary-hover)" }}
              transition={{ duration: 0.15 }}
            >
              Register
            </motion.a>
          ) : (
            <span
              className="self-start rounded-[4px] px-10 py-3.5 mt-2"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 16,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.14)",
                cursor: "not-allowed",
              }}
            >
              Opening Soon
            </span>
          )}
        </motion.div>

        {/* Queries */}
        <motion.div
          className="rounded-2xl px-6 md:px-10 py-6"
          style={{
            border: "1px dashed rgba(78,3,255,0.55)",
            backgroundColor: "rgba(255,255,255,0.025)",
          }}
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 14,
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
            }}
          >
            For queries about the event or the registration process — including bulk
            registrations — reach out to{" "}
            <a
              href="mailto:support@compilertech.org"
              style={{ color: "var(--color-primary-light)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              support@compilertech.org
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
