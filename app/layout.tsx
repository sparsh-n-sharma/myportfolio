import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { media } from "@/lib/data/media";
import { siteContent } from "@/lib/data/content";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${siteContent.name} — ${siteContent.title}`,
  description: siteContent.bio,
  keywords: [
    "short-form video editor",
    "motion designer",
    "reels editor",
    "Bengaluru",
    "social media editing",
    "monthly retainer editing",
    "Sparsh Sharma",
  ],
  openGraph: {
    title: `${siteContent.name} — ${siteContent.title}`,
    description: siteContent.tagline,
    type: "website",
    locale: "en_IN",
    images: [{ url: media.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} — ${siteContent.title}`,
    description: siteContent.tagline,
    images: [media.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} min-h-full antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
