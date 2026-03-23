import type { MetadataRoute } from "next";

import { siteUrl } from "../content/shared/site";

export default function robots(): MetadataRoute.Robots {
  return {
    host: siteUrl,
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
