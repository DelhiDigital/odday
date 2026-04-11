"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface Slide {
  image: string;
  headline: string;
  sub: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    image: "/images/odday-friends.jpg",
    headline: "Mindset is Bigger\nthan Medals.",
    sub: "First Collection 2026",
    cta: "Shop the Drop",
    href: "/shop?collection=new",
  },
  {
    image: "/images/odday-music.jpg",
    headline: "Elevated\nKidswear.",
    sub: "220 GSM Premium Cotton",
    cta: "Explore Collection",
    href: "/shop",
  },
  {
    image: "/images/odday-skate-boy.jpg",
    headline: "Effort Over\nTrophies.",
    sub: "Streetwear for Ages 4–13",
    cta: "Shop Now",
    href: "/shop",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 0=initial, 1=next, -1=prev

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[100svh] bg-[#111] overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            className={`object-cover transition-transform duration-[6000ms] ease-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-end z-10">
        <div className="w-full px-6 md:px-12 pb-16 md:pb-20 max-w-[1500px] mx-auto">
          <div
            key={current}
            className="animate-fade-up"
            style={{ animationDuration: "0.7s" }}
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/50 font-medium mb-4">
              {slide.sub}
            </p>
            <h1 className="text-[38px] md:text-[64px] lg:text-[80px] font-bold tracking-[-0.04em] leading-[0.95] text-white mb-8 whitespace-pre-line">
              {slide.headline}
            </h1>
            <Link
              href={slide.href}
              className="inline-block text-[11px] tracking-[0.12em] uppercase font-medium text-white border-b border-white/40 pb-1.5 hover:border-white transition-colors"
            >
              {slide.cta}
            </Link>
          </div>

          {/* Slide navigation */}
          <div className="flex items-center gap-6 mt-10">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-[2px] transition-all duration-500 ${
                    i === current ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/40 tracking-[0.1em] font-medium">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Side arrows — desktop only */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/40 hover:text-white transition-colors"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 4l-8 8 8 8" />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/40 hover:text-white transition-colors"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 4l8 8-8 8" />
        </svg>
      </button>
    </section>
  );
}
