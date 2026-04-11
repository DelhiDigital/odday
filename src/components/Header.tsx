"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "New Drop", href: "/shop?collection=new" },
  { label: "T-Shirts", href: "/shop?category=tshirts" },
  { label: "Shorts", href: "/shop?category=shorts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileCategories = [
  { label: "New Drop", sub: "First Collection 2026", image: "/images/odday-plane.jpg", href: "/shop?collection=new" },
  { label: "Girl", sub: "Ages 4–13", image: "/images/odday-skate-girl.jpg", href: "/shop?category=girl" },
  { label: "Boy", sub: "Ages 4–13", image: "/images/odday-jersey.jpg", href: "/shop?category=boy" },
  { label: "Bestsellers", sub: "Most Loved", image: "/images/odday-hoodie-boy.jpg", href: "/shop?sort=best-sellers" },
  { label: "Accessories", sub: "Caps & More", image: "/images/odday-running.jpg", href: "/shop?category=accessories" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#A52019] text-white text-center py-2.5 text-[10px] tracking-[0.18em] uppercase font-medium">
        Free Shipping on Orders Above ₹1499
      </div>

      {/* ===== HEADER ===== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center h-[60px] px-8 lg:px-12 max-w-[1600px] mx-auto">
          {/* Left — Nav */}
          <nav className="flex items-center gap-7">
            {navLinks.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.1em] uppercase font-medium hover:opacity-50 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center — Logo */}
          <Link href="/" className="flex items-center justify-center gap-2.5">
            <NextImage src="/logos/ODDAY Logomark.png" alt="ODDAY" width={30} height={30} priority />
            <NextImage src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={90} height={22} priority />
          </Link>

          {/* Right — Nav + Icons */}
          <div className="flex items-center justify-end gap-7">
            {navLinks.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.1em] uppercase font-medium hover:opacity-50 transition-opacity"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-5 ml-4 pl-4 border-l border-[#e5e5e5]">
              <button aria-label="Search" className="hover:opacity-50 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
              <Link href="#" aria-label="Account" className="hover:opacity-50 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
                </svg>
              </Link>
              <Link href="/cart" aria-label="Cart" className="relative hover:opacity-50 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
                </svg>
                <span className="absolute -top-1.5 -right-2 bg-[#111] text-white text-[7px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-semibold">2</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-[52px] px-4">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
            )}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <NextImage src="/logos/ODDAY Logomark.png" alt="ODDAY" width={24} height={24} priority />
            <NextImage src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={70} height={18} priority />
          </Link>

          <div className="flex items-center gap-4">
            <button aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <Link href="/cart" className="relative" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
                <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              <span className="absolute -top-1 -right-1.5 bg-[#111] text-white text-[7px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-semibold">2</span>
            </Link>
          </div>
        </div>

        <div className="h-[0.5px] bg-[#e5e5e5]" />

        {/* ===== MOBILE MENU — Full-screen editorial ===== */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(52px+37px+0.5px)] bg-white z-50 overflow-auto">
            {/* Categories with images */}
            <div className="px-5 py-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#888] mb-5 font-medium">Shop</p>
              {mobileCategories.map((cat, i) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 py-3.5 border-b border-[#f0f0f0] last:border-0 animate-fade-up"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="relative w-[72px] h-[72px] overflow-hidden bg-[#f5f5f3] shrink-0">
                    <NextImage src={cat.image} alt={cat.label} fill className="object-cover" sizes="72px" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold tracking-[0.02em]">{cat.label}</p>
                    <p className="text-[11px] text-[#999] mt-0.5">{cat.sub}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Links */}
            <div className="px-5 py-6 border-t border-[#f0f0f0]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#888] mb-4 font-medium">More</p>
              {[
                { label: "About ODDAY", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Size Guide", href: "#" },
                { label: "Shipping & Returns", href: "#" },
              ].map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[13px] border-b border-[#f5f5f5] last:border-0 animate-fade-up"
                  style={{ animationDelay: `${(i + 5) * 0.04}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom */}
            <div className="px-5 py-6 border-t border-[#f0f0f0]">
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#888] mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" /></svg>
                Sign In
              </Link>
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#888]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z" /></svg>
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
