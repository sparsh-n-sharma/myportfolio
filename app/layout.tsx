import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { media } from "@/lib/data/media";
import { siteContent } from "@/lib/data/content";
import { seoConfig, siteUrl } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: seoConfig.title,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  authors: [{ name: siteContent.name, url: siteUrl }],
  creator: siteContent.name,
  publisher: seoConfig.siteName,
  applicationName: seoConfig.siteName,
  category: "video editing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    type: "website",
    locale: seoConfig.locale,
    url: siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: media.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteContent.name} — Reels & AI short-form video editor in Bengaluru, India`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [media.ogImage],
  },
  other: {
    "geo.region": seoConfig.geo.region,
    "geo.placename": seoConfig.geo.placename,
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} min-h-full antialiased`}
      >
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
