import type { Metadata } from "next";
import RegistrationsContainer from "@/containers/RegistrationsContainer";

export const metadata: Metadata = {
  title: "Registrations — IICT 2026",
  description:
    "Register to attend IICT 2026, India's premier compiler workshop, Oct 2–3, 2026 at IISc Bangalore. Fee structure, ACM member discounts and what your ticket includes.",
  openGraph: {
    title: "Registrations — IICT 2026",
    description:
      "Fee structure and registration details for IICT 2026.",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IICT 2026 Registrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registrations — IICT 2026",
    description: "Fee structure and registration details for IICT 2026.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function RegistrationsPage() {
  return <RegistrationsContainer />;
}
