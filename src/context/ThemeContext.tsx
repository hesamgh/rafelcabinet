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
import type { ThemeMode } from "@/lib/constants";

type ThemeContextValue = {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (t: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = localStorage.getItem("rafel-theme");
    const preferred: ThemeMode =
      stored === "dark" || stored === "light" ? stored : "light";
    setThemeState(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    localStorage.setItem("rafel-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
