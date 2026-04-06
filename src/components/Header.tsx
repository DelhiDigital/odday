"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Trust Bar — Sommer style */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 trust-bar">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <span>⚡ 2-3 Day Delivery</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline">🚚 Free Shipping over ₹1,499</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline">↩️ 7-Day Easy Returns</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#FCFCFC]/98 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-[#FCFCFC]"
        }`}
      >
        <div className="flex items-center justify-between h-[56px] md:h-[64px] px-5 md:px-10 max-w-[1400px] mx-auto">
          {/* Left Nav */}
          <div className="flex items-center gap-7 w-[180px]">
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.3">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
              </svg>
            </button>
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/shop" className="text-[12px] tracking-[0.04em] font-medium hover:text-[#A52019] transition-colors">Shop</Link>
              <Link href="/shop?collection=new" className="text-[12px] tracking-[0.04em] font-medium hover:text-[#A52019] transition-colors">New Drop</Link>
              <Link href="/about" className="text-[12px] tracking-[0.04em] font-medium hover:text-[#A52019] transition-colors">About</Link>
            </nav>
          </div>

          {/* Logo — Serif centered, Sommer style */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-[22px] md:text-[26px] tracking-[0.06em]" style={{ fontFamily: "Georgia, serif" }}>
              ODDAY
            </span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-5 w-[180px] justify-end">
            <button aria-label="Search" className="hover:text-[#A52019] transition-colors">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <Link href="#" className="hidden md:block hover:text-[#A52019] transition-colors" aria-label="Account">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
              </svg>
            </Link>
            <Link href="/cart" className="relative hover:text-[#A52019] transition-colors" aria-label="Cart">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              <span className="absolute -top-1.5 -right-2.5 bg-[#A52019] text-white text-[8px] w-[16px] h-[16px] rounded-full flex items-center justify-center font-semibold">
                2
              </span>
            </Link>
          </div>
        </div>

        <div className="h-[0.5px] bg-[#e8e8e8]" />

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(56px+33px)] bg-[#FCFCFC] z-50 animate-fade-in overflow-auto">
            <nav className="flex flex-col px-6 py-6">
              {[
                { label: "Shop All", href: "/shop" },
                { label: "New Drop", href: "/shop?collection=new" },
                { label: "T-Shirts", href: "/shop?category=tshirts" },
                { label: "Shorts", href: "/shop?category=shorts" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-[15px] border-b border-[#f0f0f0] animate-fade-up"
                  style={{ fontFamily: "Georgia, serif", animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
