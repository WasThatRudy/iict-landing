"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Archive", href: "#archive", active: false },
  { label: "Talks", href: "#talks", active: false },
  { label: "About", href: "#about", active: false },
  { label: "Speakers", href: "#speakers", active: false },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  return (
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
        style={{ maxWidth: 1240, height: 121, paddingLeft: 40, paddingRight: 40 }}
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
          <div style={{ width: 178, height: 59, position: "relative" }}>
            <Image
              src="/assets/svgs/logo.png"
              alt="IICT Logo"
              fill
              sizes="178px"
              className="object-contain object-left"
              priority
            />
          </div>
        </motion.a>

        {/* Nav links pill */}
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

        {/* Get Updates CTA */}
        <motion.button
          onClick={onOpenModal}
          className="hidden md:block shrink-0 rounded-[4px] px-6 py-2.5 text-white focus:outline-none"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: 15,
            letterSpacing: "0.14em",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          whileHover={{ borderColor: "rgba(255,255,255,0.7)", color: "#ffffff", scale: 1.03 }}
          transition={{ duration: 0.15 }}
        >
          Get Updates
        </motion.button>
      </nav>
    </header>
  );
}
