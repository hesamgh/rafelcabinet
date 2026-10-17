"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary } from "@/data/translations";
import type { Locale } from "@/lib/constants";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getDir(locale: Locale): "rtl" | "ltr" {
  return locale === "en" ? "ltr" : "rtl";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fa");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    const stored = localStorage.getItem("rafel-locale");
    const preferred: Locale =
      fromQuery === "fa" || fromQuery === "en" || fromQuery === "ar"
        ? fromQuery
        : stored === "fa" || stored === "en" || stored === "ar"
          ? stored
          : "fa";
    setLocaleState(preferred);
    document.documentElement.lang = preferred;
    document.documentElement.dir = getDir(preferred);
    if (fromQuery === "fa" || fromQuery === "en" || fromQuery === "ar") {
      localStorage.setItem("rafel-locale", preferred);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("rafel-locale", l);
    document.documentElement.lang = l;
    document.documentElement.dir = getDir(l);
    const url = new URL(window.location.href);
    if (l === "fa") url.searchParams.delete("lang");
    else url.searchParams.set("lang", l);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dir: getDir(locale),
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
