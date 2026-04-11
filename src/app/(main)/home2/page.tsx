"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home2() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ===== SECTION 1: Single full-width hero ===== */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/images/odday-hoodie-boy.jpg"
          alt="Built for Play"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-7 md:px-14 pb-14 md:pb-20">
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45 font-medium mb-3">
              Premium Hoodies & Co-ords
            </p>
            <h2 className="text-[42px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.92] text-white mb-6">
              Built for Play.
            </h2>
            <Link
              href="/shop?category=hoodies"
              className="inline-block text-[11px] tracking-[0.14em] uppercase font-medium text-white border-b border-white/40 pb-1.5 hover:border-white transition-colors"
            >
              Shop Hoodies
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Two columns ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link href="/shop?category=tshirts" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-plane.jpg" alt="T-Shirts" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">100% Bio-Washed Cotton</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              Plain.<br />Simple.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Shop T-Shirts</span>
          </div>
        </Link>
        <Link href="/shop?category=shorts" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-blue-set.jpg" alt="Co-ords" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">Everyday Sets</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              Co-ords &<br />Shorts.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Shop Co-ords</span>
          </div>
        </Link>
      </section>

      {/* ===== SECTION 3: Single full-width ===== */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/images/odday-friends.jpg"
          alt="New Drop"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-7 md:px-14 pb-14 md:pb-20">
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45 font-medium mb-3">
              First Collection 2026
            </p>
            <h2 className="text-[42px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.92] text-white mb-6">
              Mindset is Bigger<br />than Medals.
            </h2>
            <Link
              href="/shop?collection=new"
              className="inline-block text-[11px] tracking-[0.14em] uppercase font-medium text-white border-b border-white/40 pb-1.5 hover:border-white transition-colors"
            >
              Shop the Drop
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Two columns ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link href="/shop" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-knit.jpg" alt="Premium Cotton" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">220 GSM Premium Cotton</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              India&apos;s<br />Finest.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Explore</span>
          </div>
        </Link>
        <Link href="/shop?category=accessories" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-folded.jpg" alt="Basics" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">Bio-Washed Fabric</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              Confidence in<br />Every Detail.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Shop Basics</span>
          </div>
        </Link>
      </section>

      {/* ===== SECTION 5: Single full-width ===== */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/images/odday-basketball.jpg"
          alt="The Philosophy"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-7 md:px-14 pb-14 md:pb-20">
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/45 font-medium mb-3">
              The Philosophy
            </p>
            <h2 className="text-[42px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.92] text-white mb-6">
              Effort Over<br />Trophies.
            </h2>
            <Link
              href="/about"
              className="inline-block text-[11px] tracking-[0.14em] uppercase font-medium text-white border-b border-white/40 pb-1.5 hover:border-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Two columns ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link href="/shop" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-car.jpg" alt="Streetwear" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">Less Clutter</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              More<br />Character.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Shop All</span>
          </div>
        </Link>
        <Link href="/shop?collection=new" className="relative h-[70svh] md:h-[100svh] overflow-hidden group block">
          <Image src="/images/odday-music.jpg" alt="New Season" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 md:bottom-14 left-7 md:left-10 text-white">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/45 font-medium mb-2">New Season</p>
            <h3 className="text-[32px] md:text-[48px] font-bold tracking-[-0.03em] leading-[0.92] mb-3">
              Summer<br />&apos;26.
            </h3>
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium border-b border-white/40 pb-1 inline-block">Discover</span>
          </div>
        </Link>
      </section>

      {/* ===== EMAIL SIGNUP ===== */}
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
