import type { Metadata } from "next";
import {
  Crimson_Pro,
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  Fraunces,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://annapaskini.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "What to do during a dementia visit - a free 15-minute guide | Anna Paskini",
    template: "%s | Anna Paskini",
  },
  description:
    "A free 15-Minute Visit Guide for adult children caring for a parent with dementia. Plus a book series of memory activities for men.",
  openGraph: {
    type: "website",
    siteName: "Anna Paskini",
    images: ["/images/og-default.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cfToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${inter.variable} ${jetbrains.variable} ${playfair.variable} ${fraunces.variable}`}
    >
      <body data-serif="playfair" data-density="compact">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        {cfToken && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
