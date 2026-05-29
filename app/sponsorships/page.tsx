import type { Metadata } from "next";
import SponsorshipsContainer from "@/containers/SponsorshipsContainer";

export const metadata: Metadata = {
  title: "Sponsorships — IICT 2026",
  description:
    "Partner with IICT 2026. Reach compiler researchers, engineers, and students at India's premier compiler workshop in Bengaluru on Oct 2–3, 2026.",
  openGraph: {
    title: "Sponsor IICT 2026 — Innovations In Compiler Technology",
    description:
      "Four sponsorship tiers tailored to your outreach and engagement goals. Partner with India's premier compiler workshop.",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sponsor IICT 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor IICT 2026 — Innovations In Compiler Technology",
    description:
      "Four sponsorship tiers tailored to your outreach and engagement goals.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function SponsorshipsPage() {
  return <SponsorshipsContainer />;
}
