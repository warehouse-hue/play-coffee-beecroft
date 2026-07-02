import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "Play Coffee - Beecroft",
    template: "%s | Play Coffee - Beecroft",
  },
  description:
    "A warm neighborhood cafe serving handcrafted coffee, artisan pastries, and seasonal brunch in Portland.",
  openGraph: {
    title: "Play Coffee - Beecroft",
    description:
      "A warm neighborhood cafe serving handcrafted coffee, artisan pastries, and seasonal brunch in Portland.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}