"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const categories = [
  {
    label: "New Drop",
    sub: "First Collection 2026",
    image: "/images/odday-plane.jpg",
    href: "/home",
  },
  {
    label: "Boys",
    sub: "Ages 4–13",
    image: "/images/odday-jersey.jpg",
    href: "/shop?category=boy",
  },
  {
    label: "Girls",
    sub: "Ages 4–13",
    image: "/images/odday-skate-girl.jpg",
    href: "/shop?category=girl",
  },
];

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    // Wait for preloader to finish
    const t = setTimeout(() => setLoaded(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-[100svh] bg-[#111] flex flex-col">
      {/* ===== TOP BAR ===== */}
      <div
        className={`flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
        }`}
        style={{ transitionDelay: "0.1s" }}
      >
        <div className="flex items-center gap-5">
          <Link href="/home" className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/50 hover:text-white transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/50 hover:text-white transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/contact" className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/50 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/cart" className="text-[10px] tracking-[0.15em] uppercase font-medium text-white/50 hover:text-white transition-colors">
            Cart
          </Link>
        </div>
      </div>

      {/* ===== CENTER SECTION — Logo + Brand name + Category cards ===== */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-10">
        {/* Logo */}
        <div
          className={`flex flex-col items-center mb-10 md:mb-14 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.25s" }}
        >
          <Image
            src="/logos/ODDAY Logomark.png"
            alt="ODDAY"
            width={48}
            height={48}
            priority
            className="mb-4 brightness-0 invert"
          />
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-black tracking-[-0.05em] leading-[0.85] uppercase text-white">
            ODDAY
          </h1>
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mt-3">
            Elevated Kidswear
          </p>
        </div>

        {/* ===== CATEGORY CARDS — Zara-style editorial grid ===== */}
        <div
          className={`w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.45s" }}
        >
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative block overflow-hidden"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative aspect-[5/6] bg-[#f0efed]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className={`object-contain transition-all duration-700 ${
                    hoveredIdx !== null && hoveredIdx !== i
                      ? "brightness-[0.7] saturate-50"
                      : "brightness-100 saturate-100"
                  } group-hover:scale-[1.04]`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                {/* Category text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em] text-white leading-[1.1] mb-1">
                    {cat.label}
                  </p>
                  <p className="text-[10px] tracking-[0.12em] uppercase text-white/50 font-medium">
                    {cat.sub}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore CTA */}
        <div
          className={`mt-10 md:mt-14 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <Link
            href="/home"
            className="inline-block text-[11px] tracking-[0.15em] uppercase font-medium text-white border-b border-white/60 pb-1.5 hover:text-[#A52019] hover:border-[#A52019] transition-colors"
          >
            Explore All Collections
          </Link>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div
        className={`flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: "0.7s" }}
      >
        <p className="text-[9px] tracking-[0.1em] uppercase text-white/20 font-medium">
          &copy; 2026 ODDAY
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="text-[9px] tracking-[0.1em] uppercase text-white/20 hover:text-white/50 transition-colors font-medium">
            Instagram
          </a>
          <a href="mailto:hello@odday.in" className="text-[9px] tracking-[0.1em] uppercase text-white/20 hover:text-white/50 transition-colors font-medium">
            hello@odday.in
          </a>
        </div>
      </div>
    </div>
  );
}
