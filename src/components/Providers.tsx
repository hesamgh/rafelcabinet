"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
