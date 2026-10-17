"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { aboutImages } from "@/data/portfolio";

export function About() {
  const { t } = useLanguage();
  const highlights = [t.about.highlight1, t.about.highlight2, t.about.highlight3];

  return (
    <section id="about" className="section-shell bg-about relative overflow-hidden py-28 sm:py-36">
      <div className="section-divider" />
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title mt-4">{t.about.title}</h2>
          <p className="section-subtitle mt-6 !max-w-xl">{t.about.body}</p>

          <ul className="mt-10 space-y-4">
            {highlights.map((item, i) => (
              <m.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.5 }}
                className="group flex items-start gap-4 rounded-2xl border border-transparent px-1 py-2 transition hover:border-[var(--border)] hover:bg-[var(--surface)]"
              >
                <span className="mt-0.5 font-display text-2xl text-[var(--brass)]/70">
                  0{i + 1}
                </span>
                <span className="pt-1 text-sm leading-7 text-[var(--fg)] sm:text-base">{item}</span>
              </m.li>
            ))}
          </ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[1.75rem] border border-[var(--brass)]/20 sm:-inset-4" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-soft)]">
              <Image
                src={aboutImages[0]}
                alt="کارگاه تولید کابینت رافل کابینت در تهران"
                fill
                className="img-zoom object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-60" />
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-soft)]">
              <Image
                src={aboutImages[1]}
                alt="ساخت کابینت و کمد دیواری در کارگاه رافل کابینت"
                fill
                className="img-zoom object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <div className="group relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-soft)] sm:mt-10">
              <Image
                src={aboutImages[2]}
                alt="تولید میز تلویزیون و دکوراسیون چوبی سفارشی"
                fill
                className="img-zoom object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
