"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import { heroPoster, heroVideos } from "@/data/portfolio";

export function Hero() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [layer, setLayer] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const refs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  const play = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return;
    void el.play().catch(() => undefined);
  }, []);

  // Preload all hero videos in the background.
  useEffect(() => {
    heroVideos.forEach((src) => {
      const v = document.createElement("video");
      v.preload = "auto";
      v.muted = true;
      v.src = src;
      v.load();
    });
  }, []);

  // Start first video on mount.
  useEffect(() => {
    const el = refs[0].current;
    if (!el) return;
    el.src = heroVideos[0];
    el.load();
    play(el);
  }, [play]);

  const handleCanPlay = useCallback(() => {
    setVideoReady(true);
  }, []);

  const handleEnded = useCallback(() => {
    const nextIndex = (index + 1) % heroVideos.length;
    const backLayer = 1 - layer;
    const backEl = refs[backLayer].current;
    if (!backEl) return;

    backEl.src = heroVideos[nextIndex];
    backEl.load();

    const onReady = () => {
      backEl.removeEventListener("canplay", onReady);
      play(backEl);
      setLayer(backLayer);
      setIndex(nextIndex);
    };

    if (backEl.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onReady();
    } else {
      backEl.addEventListener("canplay", onReady);
    }
  }, [index, layer, play]);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0806]">
        {/* Poster — visible until video is ready, then stays as fallback */}
        <Image
          src={heroPoster}
          alt=""
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"}`}
          sizes="100vw"
        />

        {/* Dual video layers for smooth crossfade */}
        {refs.map((ref, i) => (
          <video
            key={i}
            ref={ref}
            className={`absolute inset-0 h-full w-full scale-[1.05] object-cover transition-opacity duration-700 ${
              i === layer ? "opacity-100" : "opacity-0"
            } ${videoReady ? "" : "opacity-0"}`}
            muted
            playsInline
            preload="auto"
            poster={heroPoster}
            onCanPlay={i === 0 ? handleCanPlay : undefined}
            onEnded={i === layer ? handleEnded : undefined}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,6,0.94)] via-[rgba(10,8,6,0.52)] to-[rgba(10,8,6,0.28)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(176,141,85,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,8,6,0.5)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="hero-brand-line" />
          <p className="text-xs tracking-[0.28em] text-[#E2C896] uppercase sm:text-sm">
            {t.hero.collection}
          </p>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]"
        >
          {t.hero.brand}
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl"
        >
          {t.hero.tagline}
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          className="mt-4 max-w-xl text-sm leading-8 text-white/62 sm:text-base"
        >
          {t.hero.subtitle}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a href={BRAND.telLink} className="btn-primary">
            {t.hero.callCta}
          </a>
          <a href="#portfolio" className="btn-ghost">
            {t.hero.portfolioCta}
          </a>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/25 bg-white/5 p-1.5 backdrop-blur-sm">
          <m.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-[#E2C896]"
          />
        </div>
      </m.div>
    </section>
  );
}
