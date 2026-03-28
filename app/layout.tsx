import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const boldonse = localFont({
  src: "../public/assets/fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "IICT 2026 — India's Inclusive Computing Conference",
  description:
    "Join IICT 2026 in Bengaluru. The premier conference for computing practitioners across India. Sign up for updates.",
  openGraph: {
    title: "IICT 2026",
    description: "India's Inclusive Computing Conference — Coming Soon, Bengaluru",
    type: "website",
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
      className={`${geistMono.variable} ${boldonse.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
