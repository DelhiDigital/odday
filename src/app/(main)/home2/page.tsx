"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = [
  {
    image: "/images/odday-hoodie-boy.jpg",
    sub: "Premium Hoodies & Co-ords",
    headline: "Built for Play.",
    cta: "Shop Hoodies",
    href: "/shop?category=hoodies",
    align: "left" as const,
  },
  {
    image: "/images/odday-plane.jpg",
    sub: "100% Bio-Washed Cotton",
    headline: "Plain. Simple.",
    cta: "Shop T-Shirts",
    href: "/shop?category=tshirts",
    align: "left" as const,
  },
  {
    image: "/images/odday-blue-set.jpg",
    sub: "Everyday Sets for Ages 4–13",
    headline: "Co-ords.",
    cta: "Shop Co-ords",
    href: "/shop?category=shorts",
    align: "right" as const,
  },
  {
    image: "/images/odday-friends.jpg",
    sub: "First Collection 2026",
    headline: "Mindset is Bigger\nthan Medals.",
    cta: "Shop the Drop",
    href: "/shop?collection=new",
    align: "left" as const,
  },
  {
    image: "/images/odday-basketball.jpg",
    sub: "The Philosophy",
    headline: "Effort Over\nTrophies.",
    cta: "Our Story",
    href: "/about",
    align: "left" as const,
  },
  {
    image: "/images/odday-car.jpg",
    sub: "220 GSM Premium Cotton",
    headline: "India's Finest.",
    cta: "Explore",
    href: "/shop",
    align: "right" as const,
  },
];

export default function Home2() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ===== STACKED FULL-SCREEN EDITORIAL SECTIONS ===== */}
      {sections.map((section, i) => (
        <section key={i} className="relative h-[100svh] overflow-hidden">
          <Image
            src={section.image}
            alt={section.headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/25" />

          {/* Content — positioned bottom-left or bottom-right */}
          <div className="absolute inset-0 flex items-end">
            <div
              className={`w-full px-7 md:px-14 pb-14 md:pb-20 max-w-[1500px] ${
                section.align === "right" ? "ml-auto text-right" : ""
              }`}
            >
              <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45 font-medium mb-3">
                {section.sub}
              </p>
              <h2 className="text-[42px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.92] text-white mb-6 whitespace-pre-line">
                {section.headline}
              </h2>
              <Link
                href={section.href}
                className="inline-block text-[11px] tracking-[0.14em] uppercase font-medium text-white border-b border-white/40 pb-1.5 hover:border-white transition-colors"
              >
                {section.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ===== EMAIL SIGNUP — March style ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[520px] mx-auto px-6 text-center">
          <h3 className="text-[22px] md:text-[28px] font-bold tracking-[-0.03em] mb-3">
            Join our mailing list
          </h3>
          <p className="text-[13px] text-[#888] leading-[1.6] mb-8">
            Our emails are like our tees. Rare.
          </p>
          <div className="flex border-b border-[#111]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-transparent py-3 text-[13px] tracking-[0.02em] focus:outline-none placeholder:text-[#bbb]"
            />
            <button className="text-[11px] tracking-[0.12em] uppercase font-medium text-[#111] py-3 pl-4 hover:text-[#A52019] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
