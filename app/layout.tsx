import type { Metadata } from "next";
import localFont from "next/font/local";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const barlow = localFont({
  src: [
    { path: "../public/fonts/barlow-regular.ttf", weight: "400" },
    { path: "../public/fonts/barlow-medium.ttf", weight: "500" },
    { path: "../public/fonts/barlow-semibold.ttf", weight: "600" },
    { path: "../public/fonts/barlow-bold.ttf", weight: "700" },
  ],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = localFont({
  src: [
    { path: "../public/fonts/barlow-condensed-medium.ttf", weight: "500" },
    { path: "../public/fonts/barlow-condensed-semibold.ttf", weight: "600" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carbon Data Hub | DataCruiser",
  description:
    "Explore Scope3Trace and GHGBench: DataCruiser research datasets for traceable emissions evidence and reproducible greenhouse-gas evaluation.",
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
