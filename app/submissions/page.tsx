import type { Metadata } from "next";
import SubmissionsContainer from "@/containers/SubmissionsContainer";

export const metadata: Metadata = {
  title: "Submissions — IICT 2026",
  description:
    "Submit a proposal for IICT 2026. Read the submission guidelines and review process for India's premier compiler workshop, Oct 2–3, 2026 at IISc Bangalore.",
  openGraph: {
    title: "Submissions — IICT 2026",
    description:
      "Submission guidelines and review process for IICT 2026.",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IICT 2026 Submissions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submissions — IICT 2026",
    description: "Submission guidelines and review process for IICT 2026.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function SubmissionsPage() {
  return <SubmissionsContainer />;
}
