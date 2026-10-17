"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { serviceImages } from "@/data/portfolio";
import type { ServiceSlug } from "@/data/servicePages";

const keys = ["kitchen", "modern", "classic", "wardrobe", "tv", "interior"] as const;

const serviceRoutes: Record<(typeof keys)[number], ServiceSlug> = {
  kitchen: "kabinet-ashpazkhane",
  modern: "kabinet-modern",
  classic: "kabinet-classic",
  wardrobe: "komod-divari",
  tv: "miz-tv",
  interior: "ja-kafshi",
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-shell section-mesh bg-services relative overflow-hidden py-28 sm:py-36">
      <div className="section-divider" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow justify-center">{t.services.eyebrow}</p>
          <h2 className="section-title mt-4">{t.services.title}</h2>
          <p className="section-subtitle mx-auto">{t.services.subtitle}</p>
        </m.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, index) => {
            const item = t.services.items[key];
            return (
              <m.article
                key={key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="luxury-card group overflow-hidden rounded-[1.4rem]"
              >
                <Link href={`/services/${serviceRoutes[key]}`} className="block">
                  <div className="relative aspect-[5/3.2] overflow-hidden">
                    <Image
                      src={serviceImages[key]}
                      alt={`${item.title} — رافل کابینت | rafelcabinet.ir`}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(12,10,8,0.78)] via-[rgba(12,10,8,0.15)] to-transparent" />
                    <span className="absolute start-4 top-4 font-display text-3xl text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-2xl text-[var(--fg)] transition group-hover:text-[var(--brass)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-fg)]">{item.desc}</p>
                    <div className="mt-6 h-px w-12 bg-gradient-to-l from-transparent to-[var(--brass)] transition-all duration-500 group-hover:w-20" />
                  </div>
                </Link>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
