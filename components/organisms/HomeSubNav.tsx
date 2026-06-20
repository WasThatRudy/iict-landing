"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const ITEMS: NavItem[] = [
  { label: "Dates",     href: "#dates",     id: "dates" },
  { label: "Tracks",    href: "#tracks",    id: "tracks" },
  { label: "Speakers",  href: "#speakers",  id: "speakers" },
  { label: "Committee", href: "#committee", id: "committee" },
  { label: "Venue",     href: "#venue",     id: "venue" },
  { label: "Sponsors",  href: "#sponsors",  id: "sponsors" },
];

const NAVBAR_OFFSET = 80; // existing navbar height

export default function HomeSubNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Reveal once the hero is mostly out of view.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.3),
      { threshold: [0, 0.3, 1] }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Track the section that's currently dominant in the viewport.
  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (s): s is HTMLElement => s !== null
    );
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose intersection rect top is closest to (but past)
        // the subnav line; fallback to any intersecting.
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const next = intersecting[0]?.target.id;
        if (next) setActive(next);
      },
      { rootMargin: `-${NAVBAR_OFFSET + 60}px 0px -55% 0px`, threshold: [0, 0.25] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET - 8;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Section navigation"
          className="sticky z-40"
          style={{ top: NAVBAR_OFFSET }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <div
            style={{
              backgroundColor: "rgba(7,7,8,0.78)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderTop: "1px solid rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <ul
              className="mx-auto flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar"
              style={{
                maxWidth: 1240,
                height: 44,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.id)}
                      className="inline-flex items-center px-3 md:px-4 h-full focus:outline-none"
                      style={{
                        fontFamily: "var(--font-bebas-neue)",
                        fontSize: 13,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: isActive ? "var(--color-text-primary)" : "rgba(255,255,255,0.5)",
                        borderBottom: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
                        transition: "color 0.18s ease, border-color 0.18s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
