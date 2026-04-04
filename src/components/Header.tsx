"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#1a1a1a] text-white text-center py-[7px] text-[10px] tracking-[0.2em] uppercase font-light overflow-hidden">
        <div className="animate-fade-in">Free shipping on orders above ₹1,499 &nbsp;·&nbsp; Easy 7-day returns</div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between h-[52px] md:h-[60px] px-5 md:px-10 max-w-[1600px] mx-auto">
          {/* Left */}
          <div className="flex items-center gap-8 w-[140px]">
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
                {menuOpen
                  ? <path d="M18 6L6 18M6 6l12 12" />
                  : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>
                }
              </svg>
            </button>
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/shop" className="text-[11px] tracking-[0.16em] uppercase link-underline">Shop</Link>
              <Link href="/shop?collection=new" className="text-[11px] tracking-[0.16em] uppercase link-underline">New</Link>
              <Link href="/about" className="text-[11px] tracking-[0.16em] uppercase link-underline">Story</Link>
            </nav>
          </div>

          {/* Logo — centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
            <span className={`font-bold tracking-[0.22em] uppercase transition-all duration-500 ${scrolled ? "text-[17px]" : "text-[19px] md:text-[21px]"}`}>
              ODDAY
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-5 w-[140px] justify-end">
            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" className="hover:opacity-50 transition-opacity duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <Link href="#" className="hidden md:block hover:opacity-50 transition-opacity duration-300" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
                <circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
              </svg>
            </Link>
            <Link href="/cart" className="relative hover:opacity-50 transition-opacity duration-300 group" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
                <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              <span className="absolute -top-1 -right-2.5 bg-[#A52019] text-white text-[8px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Search Drawer */}
        {searchOpen && (
          <div className="border-t border-[#f0f0f0] py-5 px-5 md:px-10 animate-slide-down">
            <div className="max-w-[500px] mx-auto relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border-b border-[#1a1a1a] bg-transparent pb-3 text-[13px] tracking-[0.03em] focus:outline-none placeholder:text-[#bbb]"
                autoFocus
              />
              <svg className="absolute right-0 top-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.2">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom border */}
        <div className="h-[0.5px] bg-[#eee]" />

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(52px+29px)] bg-white z-50 animate-fade-in overflow-auto">
            <nav className="flex flex-col px-6 py-8">
              {[
                { label: "Shop All", href: "/shop" },
                { label: "New Arrivals", href: "/shop?collection=new" },
                { label: "T-Shirts", href: "/shop?category=tshirts" },
                { label: "Shorts", href: "/shop?category=shorts" },
                { label: "Our Story", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-[15px] tracking-[0.06em] border-b border-[#f0f0f0] animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-8 pt-4 space-y-4">
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#777]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" /></svg>
                Account
              </Link>
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#777]">
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
