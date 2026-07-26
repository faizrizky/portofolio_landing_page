import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import CursorSpotlight from "@/components/CursorSpotlight";
import { getProfile } from "@/lib/api";
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

// Dynamic — narik nama/role/tagline dari admin panel, jadi judul tab browser
// dan preview link (WhatsApp/Twitter/dll) ikut update begitu kamu ganti
// profile, tanpa perlu edit kode ini lagi.
export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  if (!profile) {
    return {
      title: "Portfolio",
      description: "Portofolio project freelance.",
    };
  }

  return {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  };
}

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
