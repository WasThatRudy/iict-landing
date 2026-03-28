"use client";

import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true, hasDropdown: false },
  { label: "Pages", href: "#", active: false, hasDropdown: true },
  { label: "About us", href: "#about", active: false, hasDropdown: false },
  { label: "Organisers", href: "#organisers", active: false, hasDropdown: false },
  { label: "Speakers", href: "#speakers", active: false, hasDropdown: false },
];

export default function Navbar() {
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
        style={{
          maxWidth: 1240,
          height: 121,
          paddingLeft: 40,
          paddingRight: 40,
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="IICT Home" className="shrink-0">
          <div style={{ width: 178, height: 59, position: "relative" }}>
            <Image
              src="/assets/svgs/logo.png"
              alt="IICT Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

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
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 14,
                letterSpacing: "0.14em",
                color: link.active ? "#ffffff" : "rgba(255,255,255,0.5)",
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <Image
                  src="/assets/svgs/icon-chevron-down.svg"
                  alt=""
                  width={14}
                  height={14}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact Us — gradient border button */}
        <a
          href="#contact"
          className="hidden md:block relative shrink-0 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          style={{
            padding: 1,
            background:
              "linear-gradient(105.87deg, #00ffff 0%, #00ed97 33.2%, #00aa6c 65.7%, #ffa467 100%)",
          }}
          aria-label="Contact Us"
        >
          <div
            className="flex items-center justify-center rounded-[3px] px-8 py-[15px]"
            style={{ backgroundColor: "#000000" }}
          >
            <span
              className="text-white whitespace-nowrap"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: 16,
                letterSpacing: "0.14em",
              }}
            >
              Contact Us
            </span>
          </div>
        </a>
      </nav>
    </header>
  );
}
