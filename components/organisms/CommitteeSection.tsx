"use client";

import { motion } from "framer-motion";
import CommitteeMemberCard from "@/components/molecules/CommitteeMemberCard";
import { CommitteeMember } from "@/types";

interface CommitteeSectionProps {
  id: string;
  kicker: string;
  title: string;
  highlight: string;
  members: CommitteeMember[];
}

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const VIEWPORT = { once: true, margin: "-80px" };

export default function CommitteeSection({
  id,
  kicker,
  title,
  highlight,
  members,
}: CommitteeSectionProps) {
  return (
    <section
      id={id}
      aria-label={`${title} ${highlight}`}
      style={{
        backgroundColor: "var(--color-background)",
        padding: "clamp(40px, 5vw, 72px) 20px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-10"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 12,
              color: "#ff8855",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            [ {kicker} ]
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--color-text-primary)",
            }}
          >
            {title}{" "}
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
              {highlight}
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {members.map((m) => (
            <CommitteeMemberCard key={m.id} member={m} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
