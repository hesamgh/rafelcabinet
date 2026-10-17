import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePageView";
import {
  serviceCanonical,
  servicePages,
  serviceSlugList,
  type ServiceSlug,
} from "@/data/servicePages";
import { SITE, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugList.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug as ServiceSlug];
  if (!page) return {};

  const url = serviceCanonical(page.slug);
  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url,
      siteName: SITE.name,
      locale: "fa_IR",
      type: "article",
      images: [{ url: absoluteUrl(page.image), width: 1200, height: 900, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: [absoluteUrl(page.image)],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params;
  const page = servicePages[slug as ServiceSlug];
  if (!page) notFound();

  const url = serviceCanonical(page.slug);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "تهران" },
      { "@type": "City", name: "شهر ری" },
    ],
    image: absoluteUrl(page.image),
    mainEntityOfPage: url,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "خدمات", item: `${SITE.url}/#services` },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
    ],
  };

  return (
    <>
      {[serviceLd, faqLd, breadcrumbLd].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <ServicePageView page={page} />
    </>
  );
}
