"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const keys = [
  "design",
  "execution",
  "material",
  "experience",
  "price",
  "delivery",
] as const;

const icons: Record<(typeof keys)[number], ReactNode> = {
  design: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20l5-1 10.5-10.5a2.1 2.1 0 0 0-3-3L6 16l-1 4z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  execution: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  material: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l9-5M12 12v9M12 12L3 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  experience: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  price: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v18M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  delivery: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.5" fill="currentColor" />
      <circle cx="17" cy="18" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-shell section-mesh bg-why relative overflow-hidden py-28 sm:py-36">
      <div className="section-divider" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow justify-center">{t.whyUs.eyebrow}</p>
          <h2 className="section-title mt-4">{t.whyUs.title}</h2>
          <p className="section-subtitle mx-auto">{t.whyUs.subtitle}</p>
        </m.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, i) => {
            const item = t.whyUs.items[key];
            return (
              <m.div
                key={key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="luxury-card group relative overflow-hidden rounded-[1.4rem] p-7 sm:p-8"
              >
                <span className="pointer-events-none absolute end-5 top-4 font-display text-5xl text-[var(--brass)]/10 transition group-hover:text-[var(--brass)]/20">
                  0{i + 1}
                </span>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)]/50 text-[var(--brass)] transition group-hover:border-[var(--brass)]/40">
                  {icons[key]}
                </div>
                <h3 className="font-display text-xl text-[var(--fg)] sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-fg)]">{item.desc}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
