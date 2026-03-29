"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Archive", href: "#archive", active: false },
  { label: "Talks", href: "#talks", active: false },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 overflow-hidden"
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1240, height: 80, paddingLeft: 20, paddingRight: 20 }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="/"
            aria-label="IICT Home"
            className="shrink-0"
            whileHover={{ opacity: 0.75 }}
            transition={{ duration: 0.15 }}
          >
            <div style={{ width: 130, height: 43, position: "relative" }}>
              <Image
                src="/assets/svgs/logo.png"
                alt="IICT Logo"
                fill
                sizes="130px"
                className="object-contain object-left"
                priority
              />
            </div>
          </motion.a>

          {/* Nav links pill — desktop only */}
          <div
            className="hidden md:flex items-center gap-9"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 4,
              height: 47,
              paddingLeft: 23,
              paddingRight: 23,
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: 14,
                  letterSpacing: "0.14em",
                  color: link.active ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
                whileHover={{ color: "#ffffff", y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            onClick={onOpenModal}
            className="hidden md:block shrink-0 rounded-[4px] px-6 py-2.5 text-white focus:outline-none"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: 15,
              letterSpacing: "0.14em",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            whileHover={{ borderColor: "rgba(255,255,255,0.7)", scale: 1.03 }}
            transition={{ duration: 0.15 }}
          >
            Get Updates
          </motion.button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block rounded-full"
              style={{ width: 22, height: 2, backgroundColor: "white" }}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block rounded-full"
              style={{ width: 22, height: 2, backgroundColor: "white" }}
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block rounded-full"
              style={{ width: 22, height: 2, backgroundColor: "white" }}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10 md:hidden"
            style={{ backgroundColor: "rgba(7,7,8,0.97)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 border-b"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: 32,
                    letterSpacing: "0.1em",
                    color: link.active ? "#ffffff" : "rgba(255,255,255,0.5)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => { setMenuOpen(false); onOpenModal(); }}
              className="mt-8 w-full rounded-lg py-4 text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 18,
                letterSpacing: "0.14em",
                backgroundColor: "var(--color-primary)",
              }}
            >
              Get Updates
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
