"use client";

import Navbar from "@/components/organisms/Navbar";
import RegistrationsHero from "@/components/organisms/RegistrationsHero";
import RegistrationsFeeSection from "@/components/organisms/RegistrationsFeeSection";
import Footer from "@/components/organisms/Footer";

// External checkout link (2025 used Explara). null until the 2026 checkout
// goes live — the page then shows an "opening soon" state on every CTA.
const REGISTRATION_URL: string | null = null;

export default function RegistrationsContainer() {
  function goToUpdatesSignup() {
    if (typeof window === "undefined") return;
    window.location.href = "/#hero";
  }

  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={goToUpdatesSignup} />
      <RegistrationsHero registrationUrl={REGISTRATION_URL} />
      <RegistrationsFeeSection registrationUrl={REGISTRATION_URL} />
      <Footer />
    </main>
  );
}
