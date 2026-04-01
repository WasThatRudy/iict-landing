import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const boldonse = localFont({
  src: "../public/assets/fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  display: "swap",
  fallback: ["sans-serif"],
});

const bebasNeue = localFont({
  src: "../public/assets/fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://compilertech.org"),
  title: "IICT 2026 — India's Inclusive Computing Conference",
  description:
    "Join IICT 2026 in Bengaluru. The premier conference for computing practitioners across India. Sign up for updates.",
  openGraph: {
    title: "IICT 2026",
    description: "India's Inclusive Computing Conference — Coming Soon, Bengaluru",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IICT 2026 — A Compiler Workshop bridging academia and industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IICT 2026",
    description: "India's Inclusive Computing Conference — Coming Soon, Bengaluru",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${inter.variable} ${boldonse.variable} ${bebasNeue.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
