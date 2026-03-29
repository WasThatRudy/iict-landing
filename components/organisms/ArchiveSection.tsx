"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const YOUTUBE_VIDEO_ID = "l61dY6O0A5s";

interface FloatingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  floatDuration: number;
  floatDelay: number;
  floatDistance: number;
  className?: string;
}

function FloatingImage({
  src,
  alt,
  width,
  height,
  floatDuration,
  floatDelay,
  floatDistance,
  className = "",
}: FloatingImageProps) {
  return (
    <motion.div
      animate={{ y: [0, -floatDistance, 0] }}
      transition={{
        y: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.12, ease: "easeOut" },
      }}
      whileHover={{ scale: 1.5, zIndex: 20 }}
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        width,
        height,
        border: "1px solid rgba(250,250,250,0.08)",
        transformOrigin: "center center",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}

export default function ArchiveSection() {
  return (
    <section
      id="recap"
      className="relative overflow-hidden py-14 md:py-24"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="IICT 2025 Archive"
    >
      {/* Top-left */}
      <div className="absolute left-[7%] top-16 hidden xl:block">
        <FloatingImage
          src="/assets/images/img-keynote.png"
          alt="IICT 2025 keynote"
          width={156}
          height={187}
          floatDuration={4.2}
          floatDelay={0}
          floatDistance={12}
        />
      </div>

      {/* Top-right */}
      <div className="absolute right-[7%] top-16 hidden xl:block">
        <FloatingImage
          src="/assets/images/img-attendees.png"
          alt="IICT 2025 attendees"
          width={102}
          height={122}
          floatDuration={3.8}
          floatDelay={0.7}
          floatDistance={9}
        />
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-16 left-[7%] hidden xl:block">
        <FloatingImage
          src="/assets/images/img-talk-screen.png"
          alt="IICT 2025 talk presentation"
          width={130}
          height={115}
          floatDuration={5.1}
          floatDelay={1.4}
          floatDistance={14}
        />
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-16 right-[7%] hidden xl:block">
        <FloatingImage
          src="/assets/images/img-speaker-mic.png"
          alt="IICT 2025 speaker"
          width={114}
          height={169}
          floatDuration={4.6}
          floatDelay={0.3}
          floatDistance={10}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center gap-12"
        style={{ maxWidth: 800, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: 14 }}
          >
            [Archive]
          </span>
          <h2
            className="text-[var(--color-text-primary)] text-center"
            style={{
              fontFamily: "var(--font-boldonse)",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            Revisit the Energy of IICT 2025
          </h2>
          <p
            className="text-[var(--color-text-secondary)] text-center"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.75,
              maxWidth: 680,
            }}
          >
            Talks that sparked ideas. Conversations that built community. Relive
            the moments that made IICT 2025 a compiler workshop like no other.
          </p>
        </div>

        {/* YouTube embed */}
        <div
          className="relative w-full overflow-hidden rounded-xl"
          style={{ border: "1px solid rgba(250,250,250,0.05)" }}
        >
          <div
            className="relative w-full"
            style={{ paddingBottom: "56.25%" /* 16:9 */ }}
          >
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="IICT 2025 Experience Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
