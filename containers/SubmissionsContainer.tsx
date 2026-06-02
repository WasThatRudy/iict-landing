"use client";

import Navbar from "@/components/organisms/Navbar";
import SubmissionsHero from "@/components/organisms/SubmissionsHero";
import SubmissionsTracksSection from "@/components/organisms/SubmissionsTracksSection";
import SubmissionsReviewProcessSection from "@/components/organisms/SubmissionsReviewProcessSection";
import SubmissionsImportantDatesSection from "@/components/organisms/SubmissionsImportantDatesSection";
import SubmissionsInfoSection from "@/components/organisms/SubmissionsInfoSection";
import Footer from "@/components/organisms/Footer";

const EASYCHAIR_URL = "https://easychair.org/my/conference?conf=compilertech2025";

export default function SubmissionsContainer() {
  function openEasyChair() {
    if (typeof window === "undefined") return;
    window.open(EASYCHAIR_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={openEasyChair} />
      <SubmissionsHero easyChairUrl={EASYCHAIR_URL} />
      <SubmissionsTracksSection easyChairUrl={EASYCHAIR_URL} />
      <SubmissionsReviewProcessSection />
      <SubmissionsImportantDatesSection />
      <SubmissionsInfoSection />
      <Footer />
    </main>
  );
}
