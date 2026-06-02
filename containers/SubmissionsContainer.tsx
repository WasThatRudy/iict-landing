"use client";

import Navbar from "@/components/organisms/Navbar";
import SubmissionsHero from "@/components/organisms/SubmissionsHero";
import SubmissionsTracksSection from "@/components/organisms/SubmissionsTracksSection";
import SubmissionsReviewProcessSection from "@/components/organisms/SubmissionsReviewProcessSection";
import SubmissionsImportantDatesSection from "@/components/organisms/SubmissionsImportantDatesSection";
import SubmissionsInfoSection from "@/components/organisms/SubmissionsInfoSection";
import Footer from "@/components/organisms/Footer";

export default function SubmissionsContainer() {
  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={() => {}} />
      <SubmissionsHero />
      <SubmissionsTracksSection />
      <SubmissionsReviewProcessSection />
      <SubmissionsImportantDatesSection />
      <SubmissionsInfoSection />
      <Footer />
    </main>
  );
}
