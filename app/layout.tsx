import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import CursorSpotlight from "@/components/CursorSpotlight";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "Nama Kamu — Full-Stack Developer",
  description:
    "Portofolio project freelance: web app, dashboard, dan API yang sudah dikerjakan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable} ${jbMono.variable}`}
    >
      <body suppressHydrationWarning>
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
