import type { Metadata } from "next";
import CommitteeContainer from "@/containers/CommitteeContainer";

export const metadata: Metadata = {
  title: "Committee — IICT 2026",
  description:
    "Meet the Program, Steering, and Organizing Committees behind IICT 2026 — researchers and engineers from IITs, IISc, NVIDIA, AMD, Qualcomm and more shaping India's premier compiler workshop.",
  openGraph: {
    title: "Committee — IICT 2026",
    description:
      "The Program, Steering, and Organizing Committees of IICT 2026.",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IICT 2026 Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Committee — IICT 2026",
    description: "The Program, Steering, and Organizing Committees of IICT 2026.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function CommitteePage() {
  return <CommitteeContainer />;
}
