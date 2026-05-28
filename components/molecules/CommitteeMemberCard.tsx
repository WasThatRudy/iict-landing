"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CommitteeMember } from "@/types";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  const role = member.position.replace(/[()]/g, "");
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
      <div className="relative" style={{ aspectRatio: "4 / 5" }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          style={{ transition: "transform 0.4s ease" }}
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
          className="absolute top-3 right-3 inline-flex items-center rounded-full px-3 py-1"
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
              fontSize: 11,
              color: "#ff8855",
              letterSpacing: "0.08em",
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
      <div className="px-5 py-4 flex flex-col gap-1">
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
          }}
        >
          {member.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 12.5,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.5,
            opacity: 0.92,
          }}
        >
          {member.institute}
        </span>
      </div>
    </motion.a>
  );
}
