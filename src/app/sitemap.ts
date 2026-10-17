import type { MetadataRoute } from "next";
import { servicePages, serviceSlugList } from "@/data/servicePages";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...serviceSlugList.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${SITE_URL}${servicePages[slug].image}`],
    })),
  ];
}
