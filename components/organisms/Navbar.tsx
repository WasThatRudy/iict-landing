import Image from "next/image";
import NavLink from "@/components/atoms/NavLink";
import { NavLink as NavLinkType } from "@/types";

interface NavbarProps {
  links: NavLinkType[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex items-center justify-between px-8"
        style={{ maxWidth: 1240, height: 76 }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="IICT Home">
          <Image
            src="/assets/svgs/logo.png"
            alt="IICT Logo"
            width={178}
            height={59}
            className="object-contain"
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              hasDropdown={link.hasDropdown}
              active={link.label === "Home"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
