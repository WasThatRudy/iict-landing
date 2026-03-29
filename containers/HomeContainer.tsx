"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import TalksSection from "@/components/organisms/TalksSection";
import SubscribeModal from "@/components/organisms/SubscribeModal";
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
  {
    id: "talk-1",
    title: "talk name Ullamco pariatur sit culpa enim cupidatat",
    watchUrl: "#talk-1",
    bgImageSrc: TALK_CARD_BG,
  },
  {
    id: "talk-2",
    title: "talk name Ullamco pariatur sit culpa enim cupidatat",
    watchUrl: "#talk-2",
    bgImageSrc: TALK_CARD_BG,
  },
  {
    id: "talk-3",
    title: "talk name Ullamco pariatur sit culpa enim cupidatat",
    watchUrl: "#talk-3",
    bgImageSrc: TALK_CARD_BG,
  },
  {
    id: "talk-4",
    title: "talk name Ullamco pariatur sit culpa enim cupidatat",
    watchUrl: "#talk-4",
    bgImageSrc: TALK_CARD_BG,
  },
];

export default function HomeContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <>
      {/* Landing page — always mounted, fades in after splash */}
      <motion.main
        style={{ backgroundColor: "var(--color-background)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoStarted || splashDone ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <HeroSection avatars={AVATARS} onOpenModal={() => setModalOpen(true)} />
        <ArchiveSection />
        <TalksSection talks={TALKS} />
        {modalOpen && <SubscribeModal onClose={() => setModalOpen(false)} />}
      </motion.main>

      {/* Splash — unmounts after transition */}
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
