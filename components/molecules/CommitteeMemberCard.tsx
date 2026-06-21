"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CommitteeMember } from "@/types";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  const role = member.position.replace(/[()]/g, "");
  // Committee SVGs ship with an 8px drop-shadow ring on a 116×116 canvas
  // (inner photo is 100×100). Scale them up to crop the ring so the photo
  // reaches the card edges. WebP photos render full-bleed and need no scaling.
  const isSvg = member.image.endsWith(".svg");
  return (
    <motion.a
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2"
      style={{
        backgroundColor: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      whileHover={{ y: -4, borderColor: "rgba(236,72,153,0.3)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show:   { opacity: 1, y: 0 },
      }}
      aria-label={`${member.name}, ${role}`}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
          style={{
            transform: isSvg ? "scale(1.16)" : "none",
            transformOrigin: "center",
          }}
        />
        {/* Bottom gradient for legibility on image edge */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "30%",
            background:
              "linear-gradient(180deg, rgba(7,7,8,0) 0%, rgba(7,7,8,0.55) 100%)",
          }}
        />
        {/* Role pill */}
        <span
          className="absolute top-2 right-2 inline-flex items-center rounded-full px-2 py-0.5"
          style={{
            backgroundColor: "rgba(7,7,8,0.7)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,136,85,0.45)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 10,
              color: "#ff8855",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {role}
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="px-3.5 py-3 md:px-4 md:py-3.5 flex flex-col gap-0.5">
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.35,
          }}
        >
          {member.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11.5,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.45,
            opacity: 0.92,
          }}
        >
          {member.institute}
        </span>
      </div>
    </motion.a>
  );
}
