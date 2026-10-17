"use client";

import { m } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export function ThemeSwitcher({ onHero = false }: { onHero?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.light : t.theme.dark}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition hover:border-[var(--brass)] hover:text-[var(--brass)] ${
        onHero
          ? "border-white/30 bg-white/10 text-white"
          : "border-[var(--border)] bg-[var(--glass)] text-[var(--fg)]"
      }`}
    >
      <m.span
        key={theme}
        initial={{ rotate: -40, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-sm"
      >
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </m.span>
    </button>
  );
}
