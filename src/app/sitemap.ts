import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-10-10T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
