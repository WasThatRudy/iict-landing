"use client";

import Navbar from "@/components/organisms/Navbar";
import SponsorshipsHero from "@/components/organisms/SponsorshipsHero";
import WhyPartnerSection from "@/components/organisms/WhyPartnerSection";
import AudienceProfileSection from "@/components/organisms/AudienceProfileSection";
import SponsorshipTiersSection from "@/components/organisms/SponsorshipTiersSection";
import SponsorshipContactSection from "@/components/organisms/SponsorshipContactSection";
import Footer from "@/components/organisms/Footer";

const SPONSORSHIP_EMAIL = "sponsorship@compilertech.org";

export default function SponsorshipsContainer() {
  function openSponsorshipEmail() {
    window.location.href = `mailto:${SPONSORSHIP_EMAIL}`;
  }

  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <Navbar onOpenModal={openSponsorshipEmail} />
      <SponsorshipsHero sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <WhyPartnerSection sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <AudienceProfileSection />
      <SponsorshipTiersSection sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <SponsorshipContactSection sponsorshipEmail={SPONSORSHIP_EMAIL} />
      <Footer />
    </main>
  );
}
