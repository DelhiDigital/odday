"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect } from "react";

const mobileCategories = [
  { label: "Girl", sub: "4 - 13 Years", image: "/images/odday-skate-girl.jpg", href: "/shop?category=girl" },
  { label: "Boy", sub: "4 - 13 Years", image: "/images/odday-jersey.jpg", href: "/shop?category=boy" },
  { label: "New Drop", sub: "Latest Collection", image: "/images/odday-plane.jpg", href: "/shop?collection=new" },
  { label: "Bestsellers", sub: "Most Loved", image: "/images/odday-hoodie-boy.jpg", href: "/shop?sort=best-sellers" },
  { label: "Accessories", sub: "Caps & More", image: "/images/odday-running.jpg", href: "/shop?category=accessories" },
];

const desktopNav = [
  { label: "New", href: "/shop?collection=new" },
  { label: "Kids", href: "/shop", bold: true },
  { label: "T-Shirts", href: "/shop?category=tshirts" },
  { label: "Shorts", href: "/shop?category=shorts" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Kids");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#f5f4f0] text-center py-2 text-[11px] tracking-[0.03em] border-b border-[#e8e8e8] flex items-center justify-between px-5">
        <span className="flex-1 text-center">MINDSET IS BIGGER THAN MEDALS | SHOP THE NEW DROP</span>
        <button className="text-[16px] leading-none text-[#999] hover:text-[#1a1a1a]">+</button>
      </div>

      {/* ===== DESKTOP HEADER — H&M Style: Logo left, nav inline, icons right ===== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "bg-white"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center h-[52px] px-6 lg:px-10 max-w-[1600px] mx-auto">
          {/* Logo — real logomark + wordmark */}
          <Link href="/" className="mr-10 shrink-0 flex items-center gap-2">
            <NextImage src="/logos/ODDAY Logomark.png" alt="ODDAY" width={28} height={28} priority />
            <NextImage src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={80} height={20} priority className="hidden lg:block" />
          </Link>

          {/* Nav — inline like H&M */}
          <nav className="flex items-center gap-6">
            {desktopNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13px] tracking-[0.02em] hover:text-[#A52019] transition-colors relative pb-1 ${
                  item.bold ? "font-bold" : "font-normal"
                }`}
              >
                {item.label}
                {item.bold && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Icons — right like H&M */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="hover:text-[#A52019] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <Link href="#" aria-label="Account" className="hover:text-[#A52019] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="8" r="4"/><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Wishlist" className="hover:text-[#A52019] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z"/>
              </svg>
            </Link>
            <Link href="/cart" aria-label="Cart" className="relative hover:text-[#A52019] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M4 7h16l-1.5 10H5.5L4 7z"/><path d="M9 7V5a3 3 0 016 0v2"/>
              </svg>
              <span className="absolute -top-1.5 -right-2 bg-[#A52019] text-white text-[8px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-semibold">2</span>
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-[48px] px-4">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.3"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            )}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <NextImage src="/logos/ODDAY Logomark.png" alt="ODDAY" width={24} height={24} priority />
            <NextImage src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={68} height={17} priority />
          </Link>

          <div className="flex items-center gap-4">
            <button aria-label="Search">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.3">
                <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <Link href="/cart" className="relative" aria-label="Cart">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.3">
                <path d="M4 7h16l-1.5 10H5.5L4 7z"/><path d="M9 7V5a3 3 0 016 0v2"/>
              </svg>
              <span className="absolute -top-1 -right-1.5 bg-[#A52019] text-white text-[7px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-semibold">2</span>
            </Link>
          </div>
        </div>

        <div className="h-[0.5px] bg-[#e8e8e8]" />

        {/* ===== MOBILE MENU — H&M Style with category tabs + image list ===== */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(48px+33px+0.5px)] bg-white z-50 overflow-auto animate-fade-in">
            {/* Category Tabs — horizontal scroll like H&M */}
            <div className="flex gap-5 px-5 pt-5 pb-3 border-b border-[#eee] overflow-x-auto">
              {["Kids", "New Drop", "About"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 text-[14px] pb-1 transition-colors relative ${
                    activeTab === tab ? "font-bold" : "text-[#999]"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]" />
                  )}
                </button>
              ))}
            </div>

            {/* Category Image List — H&M style with thumbnails */}
            {activeTab === "Kids" && (
              <div className="px-5 py-4">
                {mobileCategories.map((cat, i) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4 py-3 border-b border-[#f5f5f5] last:border-0 animate-fade-up"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="relative w-[80px] h-[80px] rounded-md overflow-hidden bg-[#f5f4f0] shrink-0">
                      <NextImage src={cat.image} alt={cat.label} fill className="object-cover" sizes="80px" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold tracking-[0.02em] uppercase">{cat.label}</p>
                      <p className="text-[11px] text-[#999] mt-0.5">{cat.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === "New Drop" && (
              <div className="px-5 py-6">
                <Link href="/shop?collection=new" onClick={() => setMenuOpen(false)} className="block mb-4">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3">
                    <NextImage src="/images/hero-2.jpg" alt="New Drop" fill className="object-cover" sizes="100vw" />
                  </div>
                  <p className="text-[14px] font-semibold">First Collection 2026</p>
                  <p className="text-[12px] text-[#999]">Mindset is Bigger than Medals</p>
                </Link>
                <Link href="/shop?collection=new" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center">
                  Shop New Drop
                </Link>
              </div>
            )}

            {activeTab === "About" && (
              <div className="px-5 py-6 space-y-4">
                {[
                  { label: "Our Story", href: "/about" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Size Guide", href: "#" },
                  { label: "Shipping & Returns", href: "#" },
                  { label: "FAQ", href: "#" },
                ].map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[14px] border-b border-[#f5f5f5] animate-fade-up"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Bottom links */}
            <div className="px-5 py-6 border-t border-[#eee] mt-4">
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#777] mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="4"/><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6"/></svg>
                Sign in
              </Link>
              <Link href="#" className="flex items-center gap-3 text-[12px] text-[#777]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z"/></svg>
                Favourites
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
