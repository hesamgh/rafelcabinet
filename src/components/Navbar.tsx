"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { href: "#home", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#why-us", key: "whyUs" as const },
  { href: "#faq", key: "faq" as const },
  { href: "#contact", key: "contact" as const },
];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over dark hero video: force light text (same readability as dark theme)
  const onHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative z-[60] mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-[padding] duration-500 sm:px-6 lg:px-8 ${
          scrolled || open ? "py-3" : "py-5"
        }`}
      >
        <a href="#home" className="group flex min-w-0 flex-1 items-center gap-3 pe-2">
          <LogoMark className="h-10 w-10 shrink-0 rounded-[10px] shadow-sm sm:h-11 sm:w-11" />
          <span className="flex min-w-0 flex-col gap-1.5 leading-tight">
            <span
              className={`font-display truncate text-xl tracking-[0.02em] transition sm:text-2xl ${
                onHero
                  ? "text-white group-hover:text-[#D4C4A8]"
                  : "text-[var(--fg)] group-hover:text-[var(--brass)]"
              }`}
            >
              {t.hero.brand}
            </span>
            <span
              className={`max-w-[11rem] text-[10px] leading-snug tracking-[0.12em] sm:max-w-none sm:text-[11px] sm:tracking-[0.18em] sm:uppercase ${
                onHero ? "text-white/70" : "text-[var(--muted-fg)] opacity-80"
              }`}
            >
              {t.hero.collection}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                onHero
                  ? "text-white/75 hover:text-white"
                  : "text-[var(--muted-fg)] hover:text-[var(--fg)]"
              }`}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher onHero={onHero} />
          <ThemeSwitcher onHero={onHero} />
          <a
            href={BRAND.telLink}
            className="hidden items-center rounded-full bg-[var(--brass)] px-4 py-2 text-sm font-medium text-[var(--brass-ink)] transition hover:brightness-110 md:inline-flex"
          >
            {t.hero.callCta}
          </a>
          <button
            type="button"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md lg:hidden ${
              onHero
                ? "border-white/30 bg-white/10 text-white"
                : "border-[var(--border)] text-[var(--fg)]"
            }`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span className={`h-px bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-px bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-[55] overflow-hidden border-t border-[var(--border)] bg-[var(--nav-bg)] lg:hidden"
          >
            <div className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto px-4 pb-5 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[var(--fg)] transition hover:bg-[var(--muted)]"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href={BRAND.telLink}
                className="mt-2 rounded-full bg-[var(--brass)] px-4 py-3 text-center text-sm font-medium text-[var(--brass-ink)]"
              >
                {t.hero.callCta}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
