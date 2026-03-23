import type { MetadataRoute } from "next";

import { siteUrl } from "../content/shared/site";

const routes = [
  "",
  "/about",
  "/programs",
  "/summer-camp",
  "/team",
  "/faq",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    changeFrequency: route === "" ? "weekly" : "monthly",
    lastModified,
    priority: route === "" ? 1 : 0.7,
    url: `${siteUrl}${route}`,
  }));
}
