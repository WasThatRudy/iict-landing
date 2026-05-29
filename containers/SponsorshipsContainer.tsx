"use client";

import Navbar from "@/components/organisms/Navbar";
import SponsorshipsHero from "@/components/organisms/SponsorshipsHero";
import WhyPartnerSection from "@/components/organisms/WhyPartnerSection";
import AudienceProfileSection from "@/components/organisms/AudienceProfileSection";
import SponsorshipTiersSection from "@/components/organisms/SponsorshipTiersSection";
import SponsorshipFormSection from "@/components/organisms/SponsorshipFormSection";
import SponsorshipContactSection from "@/components/organisms/SponsorshipContactSection";
import Footer from "@/components/organisms/Footer";

const SPONSORSHIP_EMAIL = "sponsorship@compilertech.org";
const CONTACT_ANCHOR = "/sponsorships#contact-form";

export default function SponsorshipsContainer() {
  function scrollToForm() {
    if (typeof window === "undefined") return;
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = CONTACT_ANCHOR;
    }
  }

  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={scrollToForm} />
      <SponsorshipsHero sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <WhyPartnerSection />
      <AudienceProfileSection />
      <SponsorshipTiersSection />
      <SponsorshipFormSection />
      <SponsorshipContactSection sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <Footer />
    </main>
  );
}
