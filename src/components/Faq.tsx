"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section-shell bg-portfolio relative py-28 sm:py-36" aria-labelledby="faq-heading">
      <div className="section-divider" />
      <div className="relative z-[1] mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-eyebrow justify-center">{t.faq.eyebrow}</p>
          <h2 id="faq-heading" className="section-title mt-4">
            {t.faq.title}
          </h2>
          <p className="section-subtitle mx-auto">{t.faq.subtitle}</p>
        </m.div>

        <div className="mt-12 space-y-3">
          {faqKeys.map((key, i) => (
            <m.details
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group luxury-card overflow-hidden rounded-2xl px-5 py-1 open:pb-4"
            >
              <summary className="cursor-pointer list-none py-4 font-medium text-[var(--fg)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span>{t.faq.items[key].q}</span>
                  <span className="text-[var(--brass)] transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pb-2 text-sm leading-7 text-[var(--muted-fg)]">{t.faq.items[key].a}</p>
            </m.details>
          ))}
        </div>
      </div>
    </section>
  );
}
