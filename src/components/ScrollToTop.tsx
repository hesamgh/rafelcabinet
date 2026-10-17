"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ScrollToTop() {
  const { t, dir } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 480);
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circumference = 2 * Math.PI * 18;
  const offset = circumference * (1 - progress);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <m.button
            type="button"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.28 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={dir === "rtl" ? "بازگشت به بالا" : "Back to top"}
            className="fixed bottom-5 end-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] shadow-[var(--shadow-soft)] backdrop-blur-md transition hover:border-[var(--brass)] hover:text-[var(--brass)] sm:bottom-8 sm:end-8"
          >
            <svg className="absolute inset-0 h-full w-full -rotate-90 p-[3px]" viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="18" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="var(--brass)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 19V5M12 5l-6 6M12 5l6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">{t.nav.home}</span>
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}
