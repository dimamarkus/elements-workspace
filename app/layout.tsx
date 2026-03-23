import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";

import { SiteFooter } from "../components/marketing/site-footer";
import { SiteHeader } from "../components/marketing/site-header";
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
  metadataBase: new URL("https://elementsworkspace.com"),
  title: {
    default: "Elements Workspace",
    template: "%s | Elements Workspace",
  },
  description:
    "A Montessori-inspired enrichment center for homeschooling families in Brooklyn. Cozy in size. Serious about learning. Deep in community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
