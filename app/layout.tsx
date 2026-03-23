import type { Metadata, Viewport } from "next";
import { DM_Sans, Lora } from "next/font/google";

import { SiteFooter } from "../components/marketing/site-footer";
import { SiteHeader } from "../components/marketing/site-header";
import { JsonLd } from "../components/seo/json-ld";
import { siteUrl } from "../content/shared/site";
import { defaultSiteMetadata } from "../lib/seo/metadata";
import {
  createLocalBusinessJsonLd,
  createWebsiteJsonLd,
} from "../lib/seo/structured-data";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  ...defaultSiteMetadata,
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elements Workspace",
    template: "%s | Elements Workspace",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={createWebsiteJsonLd()} />
        <JsonLd data={createLocalBusinessJsonLd()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
