"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Routes that have a dark hero at top — header should start transparent with white text.
// On all other routes, header starts in "scrolled" (white bg + dark text) state.
const OVERLAY_ROUTES = ["/", "/home2", "/about"];

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "New Drop", href: "/shop?collection=new" },
  { label: "T-Shirts", href: "/shop?category=tshirts" },
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
  const pathname = usePathname();
  const isOverlayRoute = OVERLAY_ROUTES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || featuredOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, featuredOpen]);

  // Transparent state only applies on overlay routes before scroll.
  const isTransparent = isOverlayRoute && !scrolled;
  const textColor = isTransparent ? "text-white" : "text-[#111]";
  const iconInvert = isTransparent ? "brightness-0 invert" : "";
  const borderColor = isTransparent ? "border-white/60" : "border-[#111]";
  const borderColorSoft = isTransparent ? "border-white/30" : "border-[#e5e5e5]";
  const badgeColor = isTransparent ? "bg-white text-[#111]" : "bg-[#111] text-white";

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#9E1528] text-white text-center py-2.5 text-[10px] tracking-[0.18em] uppercase font-medium">
        Free Shipping on Orders Above ₹1499
      </div>

      {/* ===== HEADER — End-to-end, larger, transparent → white ===== */}
      <header
        className={`fixed top-[37px] left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Desktop — full width (no max-w) */}
        <div className="hidden md:grid grid-cols-3 items-center h-[80px] px-10 lg:px-14">
          {/* Left — Nav */}
          <nav className="flex items-center gap-8">
            {navLinks.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12px] tracking-[0.12em] uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center — Wordmark only */}
          <Link href="/" className="flex items-center justify-center">
            <NextImage
              src="/logos/ODDAY Wordmark.png"
              alt="ODDAY"
              width={130}
              height={32}
              priority
              className={iconInvert}
            />
          </Link>

          {/* Right — Logomark icon + Nav + Icons */}
          <div className="flex items-center justify-end gap-7">
            <button
              onClick={() => setFeaturedOpen(true)}
              aria-label="Featured product"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${borderColor}`}
            >
              <NextImage
                src="/logos/ODDAY Logomark.png"
                alt="ODDAY"
                width={20}
                height={20}
                className={iconInvert}
              />
            </button>

            {navLinks.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12px] tracking-[0.12em] uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}
              >
                {item.label}
              </Link>
            ))}

            <div className={`flex items-center gap-5 ml-4 pl-4 border-l ${borderColorSoft}`}>
              <button aria-label="Search" className={`hover:opacity-60 transition-opacity ${textColor}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
              <Link href="#" aria-label="Account" className={`hover:opacity-60 transition-opacity ${textColor}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" /><path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
                </svg>
              </Link>
              <Link href="/cart" aria-label="Cart" className={`relative hover:opacity-60 transition-opacity ${textColor}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
                </svg>
                <span className={`absolute -top-1.5 -right-2 text-[8px] w-[15px] h-[15px] rounded-full flex items-center justify-center font-semibold ${badgeColor}`}>2</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-[64px] px-5">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className={textColor}>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
            )}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <NextImage
              src="/logos/ODDAY Wordmark.png"
              alt="ODDAY"
              width={96}
              height={24}
              priority
              className={iconInvert}
            />
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setFeaturedOpen(true)}
              aria-label="Featured"
              className={`w-9 h-9 rounded-full border flex items-center justify-center ${borderColor}`}
            >
              <NextImage
                src="/logos/ODDAY Logomark.png"
                alt="ODDAY"
                width={16}
                height={16}
                className={iconInvert}
              />
            </button>
            <Link href="/cart" className={`relative ${textColor}`} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              <span className={`absolute -top-1 -right-1.5 text-[7px] w-[14px] h-[14px] rounded-full flex items-center justify-center font-semibold ${badgeColor}`}>2</span>
            </Link>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[calc(64px+37px)] bg-white z-50 overflow-auto">
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

      {/* ===== FEATURED PRODUCT MODAL ===== */}
      {featuredOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setFeaturedOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-[560px] max-h-[90vh] overflow-auto animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFeaturedOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <p className="px-8 pt-8 text-[12px] font-bold tracking-[0.06em] uppercase">New Drop</p>

            <div className="relative aspect-[3/4] mx-8 my-6 bg-[#f5f5f3]">
              <NextImage
                src="/images/product-1.jpg"
                alt="Mindset Oversized Tee"
                fill
                className="object-cover"
                sizes="560px"
              />
            </div>

            <div className="px-8 pb-8 text-center">
              <h3 className="text-[24px] md:text-[28px] font-bold tracking-[-0.03em] mb-5">
                Mindset is Bigger than Medals.
              </h3>
              <Link
                href="/shop?collection=new"
                onClick={() => setFeaturedOpen(false)}
                className="inline-block bg-[#111] text-white text-[11px] tracking-[0.12em] uppercase font-medium px-10 py-3.5 hover:bg-[#9E1528] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
