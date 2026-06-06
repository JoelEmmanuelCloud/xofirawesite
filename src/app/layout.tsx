import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://xofira.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xofira — Instant money transfers between Nigeria and Ivory Coast",
    template: "%s · Xofira",
  },
  description:
    "Send money both ways between Nigeria (NGN) and Ivory Coast (XOF) in minutes. Transparent rates, low fees, bank-grade security. Fast. Secure. Global.",
  keywords: [
    "Nigeria to Ivory Coast transfer",
    "NGN to XOF",
    "XOF to NGN",
    "send money to Ivory Coast",
    "cross-border payments Africa",
    "Xofira",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Xofira — Cross-border transfers between Nigeria and Ivory Coast",
    description:
      "Bidirectional NGN ↔ XOF transfers in minutes. Transparent rates, low fees, bank-grade security.",
    siteName: "Xofira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xofira — NGN ↔ XOF cross-border transfers",
    description:
      "Send money both ways between Nigeria and Ivory Coast in minutes. Fast. Secure. Global.",
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
      className={`${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
