import type { Metadata } from "next";

import { siteDescription, siteName, siteUrl } from "../../content/shared/site";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteUrl).toString();
}

type CreatePageMetadataOptions = {
  description: string;
  path: string;
  title: string;
};

export function createPageMetadata({
  description,
  path,
  title,
}: CreatePageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    alternates: {
      canonical: url,
    },
    description,
    openGraph: {
      description,
      siteName,
      title: `${title} | ${siteName}`,
      type: "website",
      url,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      title: `${title} | ${siteName}`,
    },
  };
}

export const defaultSiteMetadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  applicationName: siteName,
  description: siteDescription,
  openGraph: {
    description: siteDescription,
    locale: "en_US",
    siteName,
    title: siteName,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
    title: siteName,
  },
};
