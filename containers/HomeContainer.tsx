import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import TalksSection from "@/components/organisms/TalksSection";
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
  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar />
      <HeroSection avatars={AVATARS} />
      <ArchiveSection />
      <TalksSection talks={TALKS} />
    </main>
  );
}
