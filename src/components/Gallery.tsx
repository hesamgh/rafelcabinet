"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/data/portfolio";

const filterKeys: PortfolioCategory[] = [
  "video",
  "cabinet",
  "komod",
  "jakafshi",
  "tv",
  "workshop",
];

const categoryAlt: Record<PortfolioCategory, string> = {
  cabinet: "کابینت آشپزخانه رافل کابینت",
  komod: "کمد دیواری رافل کابینت",
  jakafshi: "جا کفشی رافل کابینت",
  tv: "میز تلویزیون رافل کابینت",
  workshop: "کارگاه کابینت سازی رافل کابینت",
  video: "ویدیو پروژه رافل کابینت",
};

function portfolioAlt(item: PortfolioItem) {
  const cat = item.category.find((c) => c !== "video") ?? item.category[0];
  return `${categoryAlt[cat]} — نمونه کار rafelcabinet.ir`;
}

function AutoPlayVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    const play = () => {
      void el.play().catch(() => undefined);
    };
    play();
    el.addEventListener("loadeddata", play);
    return () => el.removeEventListener("loadeddata", play);
  }, [src, active]);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      muted
      loop
      playsInline
      autoPlay={active}
      preload={active ? "metadata" : "none"}
      className={className}
    />
  );
}

export function Gallery() {
  const { t, dir } = useLanguage();
  const [filter, setFilter] = useState<PortfolioCategory>("video");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const items = useMemo(
    () => portfolioItems.filter((item) => item.category.includes(filter)),
    [filter],
  );

  const imageItems = useMemo(
    () => items.filter((item) => item.type === "image"),
    [items],
  );

  const activeIndex = useMemo(
    () => (active ? imageItems.findIndex((item) => item.id === active.id) : -1),
    [active, imageItems],
  );

  const go = useCallback(
    (delta: number) => {
      if (imageItems.length === 0 || activeIndex < 0) return;
      const next = (activeIndex + delta + imageItems.length) % imageItems.length;
      setActive(imageItems[next]);
    },
    [activeIndex, imageItems],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(dir === "rtl" ? -1 : 1);
      if (e.key === "ArrowLeft") go(dir === "rtl" ? 1 : -1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, dir, go]);

  const categoryLabel = active
    ? t.portfolio.filters[
        active.category.find((c) => c !== "video") ?? active.category[0]
      ]
    : "";

  return (
    <section id="portfolio" className="section-shell bg-portfolio relative py-28 sm:py-36">
      <div className="section-divider" />
      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow justify-center">{t.portfolio.eyebrow}</p>
          <h2 className="section-title mt-4">{t.portfolio.title}</h2>
          <p className="section-subtitle mx-auto">{t.portfolio.subtitle}</p>
        </m.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {filterKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2.5 text-xs tracking-wide transition sm:text-sm ${
                filter === key
                  ? "bg-[var(--fg)] text-[var(--bg)] shadow-[var(--shadow-soft)]"
                  : "border border-[var(--border)] bg-[var(--surface)]/70 text-[var(--muted-fg)] backdrop-blur-sm hover:border-[var(--brass)] hover:text-[var(--fg)]"
              }`}
            >
              {t.portfolio.filters[key]}
            </button>
          ))}
        </div>

        <div
          className={`mt-10 grid gap-2.5 sm:mt-12 sm:gap-3 ${
            items.length <= 2
              ? "grid-cols-2 mx-auto max-w-3xl"
              : items.length <= 4
                ? "grid-cols-2 lg:grid-cols-4"
                : "grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((item, index) => {
            const cardClass =
              "group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[var(--surface)] shadow-[var(--shadow-soft)] sm:rounded-2xl";

            if (item.type === "video") {
              return (
                <m.div
                  key={`${filter}-${item.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
                  className={cardClass}
                >
                  <AutoPlayVideo
                    src={item.src}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                </m.div>
              );
            }

            return (
              <m.button
                key={`${filter}-${item.id}`}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
                onClick={() => setActive(item)}
                className={cardClass}
              >
                <Image
                  src={item.src}
                  alt={portfolioAlt(item)}
                  fill
                  className="img-zoom object-cover"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-400 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition duration-400 group-hover:opacity-100 sm:p-4">
                  <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] text-white backdrop-blur-md sm:text-xs">
                    {t.portfolio.view}
                  </span>
                </div>
              </m.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && active.type === "image" && (
          <m.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={portfolioAlt(active)}
          >
            <div className="absolute inset-0 bg-[rgba(12,10,8,0.82)] backdrop-blur-md" />

            <m.div
              key={active.id}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[1] flex w-full max-w-[min(920px,92vw)] flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div className="min-w-0">
                  <p className="truncate text-xs tracking-[0.18em] text-[#E2C896] uppercase">
                    {categoryLabel}
                  </p>
                  {activeIndex >= 0 && (
                    <p className="mt-1 text-xs text-white/45" dir="ltr">
                      {activeIndex + 1} / {imageItems.length}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/85 transition hover:border-[#E2C896]/50 hover:bg-white/12 hover:text-white"
                  aria-label={t.portfolio.close}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[rgba(18,15,12,0.9)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-[#E2C896]/15">
                <div className="relative mx-auto flex max-h-[min(78vh,820px)] items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(40,34,28,0.5),transparent_70%)] p-2 sm:p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={active.src}
                    alt={portfolioAlt(active)}
                    className="max-h-[min(74vh,780px)] w-auto max-w-full rounded-[1rem] object-contain"
                  />
                </div>
              </div>

              {imageItems.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/85 transition hover:border-[#E2C896]/45 hover:text-white"
                    aria-label="Previous"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={dir === "rtl" ? "rotate-180" : undefined}
                      aria-hidden
                    >
                      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/85 transition hover:border-[#E2C896]/45 hover:text-white"
                    aria-label="Next"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={dir === "rtl" ? "rotate-180" : undefined}
                      aria-hidden
                    >
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
