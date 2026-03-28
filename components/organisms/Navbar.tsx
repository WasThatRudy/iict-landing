import Image from "next/image";
import NavLink from "@/components/atoms/NavLink";
import { NavLink as NavLinkType } from "@/types";

interface NavbarProps {
  links: NavLinkType[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Glass bar */}
      <div
        className="border-b"
        style={{
          backgroundColor: "rgba(7,7,8,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: 1240,
            height: 76,
            paddingLeft: 32,
            paddingRight: 32,
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" aria-label="IICT Home" className="shrink-0">
            <Image
              src="/assets/svgs/logo.png"
              alt="IICT Logo"
              width={90}
              height={30}
              className="object-contain"
              priority
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

          {/* CTA — Contact Us */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{
              fontFamily: "var(--font-geist-mono)",
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
