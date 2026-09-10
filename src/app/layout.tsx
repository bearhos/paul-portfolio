import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/content/portfolio";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
const mono = localFont({
  src: "../../public/fonts/jetbrains-mono.ttf",
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? {
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: "Phạm Hải Phước | Senior React Native Engineer",
    template: "%s | Phạm Hải Phước",
  },
  description:
    "Senior React Native engineer at SCEX. Explore my work in mobile banking, real-time communication, and thoughtful digital experiences.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Phạm Hải Phước | Thoughtful code. Real-world impact.",
    description:
      "Senior React Native Engineer. Mobile products, real-time experiences, and the engineering behind them.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#080808" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${mono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
