"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import { SITE } from "@/lib/seo";
import { outboundLinks } from "@/data/seoLinks";
import { servicePages, serviceSlugList } from "@/data/servicePages";
import { LogoMark } from "@/components/LogoMark";

const quick = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#faq", key: "faq" as const },
  { href: "#contact", key: "contact" as const },
];

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell bg-footer relative overflow-hidden border-t border-[var(--border)]">
      <div className="section-divider" />
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12 rounded-[12px] shadow-[var(--shadow-soft)]" />
            <div>
              <p className="font-display text-2xl text-[var(--fg)] sm:text-3xl">{t.hero.brand}</p>
              <p className="mt-1 text-sm text-[var(--muted-fg)]">{t.hero.collection}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted-fg)]">
            {t.footer.tagline}
          </p>
          <a
            href={SITE.url}
            className="mt-4 inline-block text-sm text-[var(--brass)] transition hover:underline"
            dir="ltr"
          >
            {SITE.url.replace("https://", "")}
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
            {t.footer.quickLinks}
          </p>
          <ul className="mt-4 space-y-2">
            {quick.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--muted-fg)] transition hover:text-[var(--fg)]"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
            {t.nav.services}
          </p>
          <ul className="mt-4 space-y-2">
            {serviceSlugList.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="text-sm text-[var(--muted-fg)] transition hover:text-[var(--fg)]"
                >
                  {servicePages[slug].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
            {t.footer.usefulLinks}
          </p>
          <ul className="mt-4 space-y-2">
            {outboundLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted-fg)] transition hover:text-[var(--fg)]"
                >
                  {link.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
            {t.nav.contact}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted-fg)]">
            <li>
              <a href={BRAND.telLink} className="transition hover:text-[var(--brass)]" dir="ltr">
                {BRAND.mainPhoneDisplay[locale]}
              </a>
            </li>
            <li>{BRAND.workshopAddress[locale]}</li>
            <li>{BRAND.storeAddress[locale]}</li>
          </ul>
          <p className="mt-6 text-xs tracking-[0.2em] text-[var(--brass)] uppercase">
            {t.footer.follow}
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 2.2c-2.7 0-3 .01-4 .07a6.4 6.4 0 0 0-4.2 4.2C3.21 7.5 3.2 7.8 3.2 10.5s.01 3 .07 4a6.4 6.4 0 0 0 4.2 4.2c1 .06 1.3.07 4 .07s3-.01 4-.07a6.4 6.4 0 0 0 4.2-4.2c.06-1 .07-1.3.07-4s-.01-3-.07-4a6.4 6.4 0 0 0-4.2-4.2c-1-.06-1.3-.07-4-.07zm0 1.8c2.6 0 2.9.01 4 .06a4.6 4.6 0 0 1 3.1 3.1c.05 1.1.06 1.4.06 4s-.01 2.9-.06 4a4.6 4.6 0 0 1-3.1 3.1c-1.1.05-1.4.06-4 .06s-2.9-.01-4-.06a4.6 4.6 0 0 1-3.1-3.1c-.05-1.1-.06-1.4-.06-4s.01-2.9.06-4a4.6 4.6 0 0 1 3.1-3.1c1.1-.05 1.4-.06 4-.06z" />
              </svg>
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
              aria-label="WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3.5A10 10 0 0 0 3.3 16.8L2 22l5.4-1.4A10 10 0 1 0 20 3.5zm-8 16a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8.1 8.1 0 1 1 12 19.5zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.6c-.1-.3 0-.4.1-.5l.4-.4.2-.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9c.5.2 1 .4 1.5.5a3.6 3.6 0 0 0 1.7 0 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c0-.1-.2-.2-.4-.3z" />
              </svg>
            </a>
            <a
              href={BRAND.telLink}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
              aria-label="Phone"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-5 text-center text-xs text-[var(--muted-fg)]">
        © {year} {t.hero.brand}. {t.footer.rights}{" "}
        <a href={SITE.url} className="text-[var(--brass)] hover:underline" dir="ltr">
          rafelcabinet.ir
        </a>
      </div>
    </footer>
  );
}
