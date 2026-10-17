"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/constants";

const locales: Locale[] = ["fa", "en", "ar"];

export function LanguageSwitcher({ onHero = false }: { onHero?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-medium tracking-wide backdrop-blur-md transition hover:border-[var(--brass)] hover:text-[var(--brass)] ${
          onHero
            ? "border-white/30 bg-white/10 text-white"
            : "border-[var(--border)] bg-[var(--glass)] text-[var(--fg)]"
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{t.lang[locale]}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <m.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute end-0 top-[calc(100%+8px)] z-50 min-w-[8.5rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] py-1 shadow-xl"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={`block w-full px-3 py-2 text-start text-sm transition hover:bg-[var(--muted)] ${
                    locale === l ? "text-[var(--brass)]" : "text-[var(--fg)]"
                  }`}
                >
                  {t.lang[l]}
                </button>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
