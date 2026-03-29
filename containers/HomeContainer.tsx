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

const TALK_CARD_BG = "/assets/images/talk-card-bg.png";

const TALKS: TalkCard[] = [
  { id: "talk-1", title: "Imagining a Next-generation Superoptimizer", watchUrl: "https://www.youtube.com/watch?v=f6a1K81L7hs&t=99s", bgImageSrc: TALK_CARD_BG },
  { id: "talk-2", title: "Evolving the OCaml Programming Language", watchUrl: "https://www.youtube.com/watch?v=gxJJhjYJ5oo", bgImageSrc: TALK_CARD_BG },
  { id: "talk-3", title: "Compilers @ Nvidia: Challenges, Innovations, and the Impact of AI", watchUrl: "https://www.youtube.com/watch?v=ePu8AyNiWYs", bgImageSrc: TALK_CARD_BG },
  { id: "talk-4", title: "eld — Embedded Linker. Why another linker?", watchUrl: "https://www.youtube.com/watch?v=7-dm_iRRdZM", bgImageSrc: TALK_CARD_BG },
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
