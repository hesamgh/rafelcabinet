"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import { SITE } from "@/lib/seo";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PlaceCard({
  title,
  address,
  phones,
  locale,
  delay = 0,
}: {
  title: string;
  address: string;
  phones: readonly { raw: string; display: Record<"fa" | "en" | "ar", string> }[];
  locale: "fa" | "en" | "ar";
  delay?: number;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,85,0.12),transparent_55%)] opacity-80 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[var(--brass)]/50 to-transparent" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--brass)]/30 bg-[var(--brass)]/10 text-[var(--brass)]">
            <PinIcon />
          </span>
          <p className="text-xs tracking-[0.22em] text-[var(--brass)] uppercase">{title}</p>
        </div>

        <h3 className="mt-5 font-display text-xl leading-9 text-[var(--fg)] sm:text-2xl">
          {address}
        </h3>

        <div className="mt-auto space-y-3 border-t border-[var(--border)] pt-6">
          {phones.map((p) => (
            <a
              key={p.raw}
              href={`tel:${p.raw}`}
              className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-[var(--fg)] transition hover:border-[var(--brass)]/35 hover:bg-[var(--brass)]/8 hover:text-[var(--brass)]"
              dir="ltr"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brass)]/12 text-[var(--brass)]">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="text-base tracking-wide sm:text-lg">{p.display[locale]}</span>
            </a>
          ))}
        </div>
      </div>
    </m.article>
  );
}

export function Contact() {
  const { t, locale } = useLanguage();
  const tel = BRAND.telLink;
  const wa = SITE.whatsapp;

  return (
    <section id="contact" className="section-shell bg-contact relative py-28 sm:py-36">
      <div className="section-divider" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow justify-center">{t.contact.eyebrow}</p>
          <h2 className="section-title mt-4">{t.contact.title}</h2>
          <p className="section-subtitle mx-auto">{t.contact.subtitle}</p>
        </m.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* تماس اصلی — باکس برجسته */}
          <m.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[var(--brass)]/35 bg-[linear-gradient(155deg,rgba(176,141,85,0.18),var(--surface)_42%,var(--surface))] p-7 shadow-[var(--shadow-soft)] sm:p-8 lg:col-span-1"
          >
            <div className="pointer-events-none absolute -start-10 -top-10 h-40 w-40 rounded-full bg-[var(--brass)]/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[var(--brass)] to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--fg)] text-[var(--bg)] shadow-[var(--shadow-soft)]">
                  <PhoneIcon />
                </span>
                <p className="text-xs tracking-[0.22em] text-[var(--brass)] uppercase">
                  {t.contact.mainPhone}
                </p>
              </div>

              <a
                href={tel}
                className="mt-6 block font-display text-3xl leading-tight text-[var(--fg)] transition hover:text-[var(--brass)] sm:text-4xl"
                dir="ltr"
              >
                {BRAND.mainPhoneDisplay[locale]}
              </a>
              <p className="mt-2 text-sm text-[var(--muted-fg)]" dir="ltr">
                {BRAND.mainPhone}
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row sm:flex-wrap">
                <a href={tel} className="btn-primary !px-5 !py-3 !text-sm !shadow-none">
                  {t.contact.callNow}
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-5 py-3 text-sm text-[var(--fg)] backdrop-blur-sm transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
                >
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </m.article>

          <PlaceCard
            title={t.contact.store}
            address={BRAND.storeAddress[locale]}
            phones={BRAND.storePhones}
            locale={locale}
            delay={0.08}
          />
          <PlaceCard
            title={t.contact.workshop}
            address={BRAND.workshopAddress[locale]}
            phones={BRAND.workshopPhones}
            locale={locale}
            delay={0.14}
          />
        </div>
      </div>
    </section>
  );
}
