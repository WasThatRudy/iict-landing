"use client";

import Navbar from "@/components/organisms/Navbar";
import SubmissionsHero from "@/components/organisms/SubmissionsHero";
import SubmissionsDetailsSection from "@/components/organisms/SubmissionsDetailsSection";
import Footer from "@/components/organisms/Footer";

const SUBMISSIONS_EMAIL = "submissions@compilertech.org";

export default function SubmissionsContainer() {
  function openSubmissionsEmail() {
    window.location.href = `mailto:${SUBMISSIONS_EMAIL}`;
  }

  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={openSubmissionsEmail} />
      <SubmissionsHero />
      <SubmissionsDetailsSection />
      <Footer />
    </main>
  );
}
