import type { Metadata } from "next";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Data Hub | Scope3Trace & GHGBench",
  description:
    "A Data Cruiser research initiative for the Scope3Trace and GHGBench carbon datasets.",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
