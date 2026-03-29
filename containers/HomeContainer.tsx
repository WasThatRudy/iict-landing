"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import HeroSection, { HeroSectionHandle } from "@/components/organisms/HeroSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import TalksSection from "@/components/organisms/TalksSection";
import SplashScreen from "@/components/organisms/SplashScreen";
import { TalkCard } from "@/types";

const AVATARS = [
  { src: "/assets/images/avatar-1.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-2.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-3.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-4.png", alt: "IICT 2025 attendee" },
];

const TALKS: TalkCard[] = [
  {
    id: "talk-1",
    title: "Imagining a Next-generation Superoptimizer",
    watchUrl: "https://www.youtube.com/watch?v=f6a1K81L7hs&t=99s",
    gradient: "radial-gradient(ellipse at 80% 130%, rgba(139,92,246,0.85) 0%, transparent 50%), radial-gradient(ellipse at 25% 115%, rgba(156,163,175,0.5) 0%, transparent 45%)",
  },
  {
    id: "talk-2",
    title: "Evolving the OCaml Programming Language",
    watchUrl: "https://www.youtube.com/watch?v=gxJJhjYJ5oo",
    gradient: "radial-gradient(ellipse at 55% 125%, rgba(249,115,22,0.85) 0%, transparent 45%), radial-gradient(ellipse at 75% 140%, rgba(236,72,153,0.75) 0%, transparent 50%)",
  },
  {
    id: "talk-3",
    title: "Compilers @ Nvidia: Challenges, Innovations, and the Impact of AI",
    watchUrl: "https://www.youtube.com/watch?v=ePu8AyNiWYs",
    gradient: "radial-gradient(ellipse at 20% 125%, rgba(234,88,12,0.85) 0%, transparent 45%), radial-gradient(ellipse at 65% 115%, rgba(124,58,237,0.7) 0%, transparent 50%)",
  },
  {
    id: "talk-4",
    title: "eld — Embedded Linker. Why another linker?",
    watchUrl: "https://www.youtube.com/watch?v=7-dm_iRRdZM",
    gradient: "radial-gradient(ellipse at 60% 125%, rgba(67,56,202,0.85) 0%, transparent 45%), radial-gradient(ellipse at 25% 130%, rgba(219,39,119,0.65) 0%, transparent 50%)",
  },
  {
    id: "archive-2025",
    title: "2025 Website Archive",
    watchUrl: "https://2025.compilertech.org",
    ctaLabel: "Visit",
    gradient: "radial-gradient(ellipse at 50% 115%, rgba(78,3,255,0.6) 0%, transparent 50%), radial-gradient(ellipse at 80% 130%, rgba(107,70,193,0.45) 0%, transparent 45%)",
  },
];

export default function HomeContainer() {
  const [splashDone, setSplashDone] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const heroRef = useRef<HeroSectionHandle>(null);

  function openHeroInput() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => heroRef.current?.openInput(), 400);
  }

  return (
    <>
      <motion.main
        style={{ backgroundColor: "var(--color-background)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoStarted || splashDone ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Navbar onOpenModal={openHeroInput} />
        <HeroSection ref={heroRef} avatars={AVATARS} onOpenModal={openHeroInput} />
        <ArchiveSection />
        <TalksSection talks={TALKS} />
      </motion.main>

      <AnimatePresence>
        {!splashDone && (
          <SplashScreen
            onVideoStart={() => setVideoStarted(true)}
            onDone={() => setSplashDone(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
