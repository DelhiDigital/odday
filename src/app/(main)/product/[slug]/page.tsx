"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const sizes = [
  { label: "2-3Y", available: true },
  { label: "4-5Y", available: true },
  { label: "6-7Y", available: true },
  { label: "8-9Y", available: true },
  { label: "10-11Y", available: false },
  { label: "12-13Y", available: true },
];

const colorVariants = [
  { name: "White", thumb: "/images/odday-hoodie-boy.jpg", images: ["/images/odday-hoodie-boy.jpg", "/images/odday-coords.jpg", "/images/odday-blue-set.jpg", "/images/odday-three-kids.jpg", "/images/odday-folded.jpg"] },
  { name: "Maroon", thumb: "/images/product-8.jpg", images: ["/images/product-8.jpg", "/images/product-8-hover.jpg", "/images/odday-skate-boy.jpg", "/images/odday-jersey.jpg"] },
  { name: "Black", thumb: "/images/product-6.jpg", images: ["/images/product-6.jpg", "/images/product-6-hover.jpg", "/images/odday-car.jpg", "/images/odday-music.jpg"] },
];

const othersAlsoBought = [
  { id: "grow-tee-maroon", name: "Spring Layer Jacket", price: 1799, image: "/images/product-3.jpg" },
  { id: "layer-crew-teal", name: "ODDAY Classic Cap", price: 799, image: "/images/product-4.jpg" },
  { id: "character-tee-sand", name: "Character Long Tee", price: 1299, image: "/images/product-7.jpg", hoverImage: "/images/product-7-hover.jpg" },
  { id: "effort-joggers-gray", name: "Effort Sweatshirt", price: 1599, originalPrice: 1899, image: "/images/product-8.jpg", hoverImage: "/images/product-8-hover.jpg" },
  { id: "bobbie-pants", name: "Bobbie Pants", price: 1399, image: "/images/product-9.jpg", hoverImage: "/images/product-9-hover.jpg" },
  { id: "kind-people-crew", name: "Mindset Crew", price: 1799, image: "/images/product-10.jpg", hoverImage: "/images/product-10-hover.jpg" },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentImages = colorVariants[selectedColor].images;

  const toggleAccordion = (key: string) => setOpenAccordion(openAccordion === key ? null : key);

  const handleAdd = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleColorChange = (idx: number) => {
    setSelectedColor(idx);
    setActiveImg(0);
  };

  const scrollCarousel = (dir: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-0 md:px-10">
        {/* Breadcrumb */}
        <div className="hidden md:flex py-3 px-5 md:px-0 text-[11px] text-[#999] gap-1.5 items-center">
          <Link href="/" className="hover:text-[#1a1a1a]">Home</Link>
          <span className="text-[#ddd]">/</span>
          <Link href="/shop" className="hover:text-[#1a1a1a]">Kids</Link>
          <span className="text-[#ddd]">/</span>
          <Link href="/shop?category=tshirts" className="hover:text-[#1a1a1a]">T-shirts & Tops</Link>
          <span className="text-[#ddd]">/</span>
          <span className="text-[#1a1a1a]">Mindset Oversized Tee</span>
        </div>

        <div className="md:grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] md:gap-8 lg:gap-12">

          {/* ===== LEFT: IMAGES — Main + Thumbnails ===== */}
          <div>
            {/* Mobile: swipeable main image */}
            <div className="md:hidden relative">
              <div className="aspect-[3/4] relative bg-[#f5f4f0] overflow-hidden">
                <Image src={currentImages[activeImg]} alt="Product" fill className="object-cover" priority sizes="100vw" />
              </div>
              <button
                onClick={() => setActiveImg(Math.max(0, activeImg - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                onClick={() => setActiveImg(Math.min(currentImages.length - 1, activeImg + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
              </button>
              {/* Thumbnail strip mobile */}
              <div className="flex gap-1.5 px-4 py-3 overflow-x-auto">
                {currentImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-[56px] h-[72px] shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
                      activeImg === i ? "border-[#1a1a1a]" : "border-transparent"
                    }`}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: 1 main image + 2-col grid below (5 total) */}
            <div className="hidden md:block">
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-[#f5f4f0] overflow-hidden cursor-zoom-in group mb-1.5">
                <Image
                  src={currentImages[0]}
                  alt="Product"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="55vw"
                  priority
                />
              </div>
              {/* 2-column grid below */}
              <div className="grid grid-cols-2 gap-1.5">
                {currentImages.slice(1, 5).map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] bg-[#f5f4f0] overflow-hidden cursor-zoom-in group">
                    <Image src={src} alt={`View ${i + 2}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="27vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT: PRODUCT INFO (Sticky) ===== */}
          <div className="px-5 md:px-0 pt-5 md:pt-0">
            <div className="md:sticky md:top-[70px]">

              {/* Name & Price */}
              <h1 className="text-[18px] md:text-[20px] mb-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                Mindset Oversized Tee
              </h1>
              <div className="flex items-baseline gap-2.5 mb-1">
                <span className="text-[15px] font-semibold">₹1,299</span>
                <span className="text-[13px] text-[#999] line-through">₹1,599</span>
                <span className="text-[11px] text-[#9E1528] font-medium">-19%</span>
              </div>
              <p className="text-[11px] text-[#999] mb-5">MRP incl. of all taxes</p>

              {/* Color Swatches — H&M image thumbnail style */}
              <div className="mb-5">
                <p className="text-[12px] mb-3 uppercase tracking-[0.04em]">
                  <span className="text-[#999]">Colour:</span> <span className="font-medium">{colorVariants[selectedColor].name}</span>
                </p>
                <div className="flex gap-2">
                  {colorVariants.map((variant, i) => (
                    <button
                      key={variant.name}
                      onClick={() => handleColorChange(i)}
                      className={`relative w-[60px] h-[76px] overflow-hidden rounded-sm border-2 transition-all duration-200 ${
                        selectedColor === i
                          ? "border-[#1a1a1a]"
                          : "border-[#e5e5e5] hover:border-[#999]"
                      }`}
                    >
                      <Image src={variant.thumb} alt={variant.name} fill className="object-cover" sizes="60px" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[12px]">
                    <span className="text-[#999]">Size:</span>
                    {selectedSize && <span className="font-medium ml-1">{selectedSize}</span>}
                  </p>
                  <button className="text-[11px] text-[#1a1a1a] underline underline-offset-2 hover:text-[#9E1528]">
                    Size guide
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {sizes.map((s) => (
                    <button
                      key={s.label}
                      disabled={!s.available}
                      onClick={() => { setSelectedSize(s.label); setSizeError(false); }}
                      className={`border text-[12px] py-3 transition-all rounded-sm relative ${
                        !s.available
                          ? "border-[#eee] text-[#ccc] cursor-not-allowed"
                          : selectedSize === s.label
                            ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                            : "border-[#ddd] hover:border-[#1a1a1a]"
                      }`}
                    >
                      {s.label}
                      {!s.available && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-[70%] h-[1px] bg-[#ddd] rotate-[-20deg] absolute" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="text-[11px] text-[#9E1528] mt-2 animate-fade-in">Please select a size</p>
                )}
              </div>

              {/* Add to Bag */}
              <button
                onClick={handleAdd}
                className={`w-full text-[13px] tracking-[0.04em] py-4 rounded-sm font-medium transition-all duration-500 mb-3 ${
                  added ? "bg-[#2d7d3a] text-white" : "bg-[#1a1a1a] text-white hover:bg-[#333]"
                }`}
              >
                {added ? "✓  Added to bag" : "Add"}
              </button>

              {/* Wishlist */}
              <button className="w-full border border-[#ddd] text-[13px] py-3.5 rounded-sm hover:border-[#1a1a1a] transition-colors flex items-center justify-center gap-2 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z"/>
                </svg>
                Save for later
              </button>

              {/* Accordions */}
              <div className="border-t border-[#eee]">
                {[
                  {
                    key: "delivery",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2" y="7" width="15" height="13" rx="1"/><path d="M17 11h3l2 3v4h-5"/><circle cx="7.5" cy="20" r="1.5" fill="currentColor"/><circle cx="19.5" cy="20" r="1.5" fill="currentColor"/></svg>,
                    label: "Delivery and Payment",
                    content: (
                      <div className="text-[12px] text-[#666] leading-[1.8] space-y-2">
                        <p><strong>Standard Delivery:</strong> 5-7 business days — Free over ₹1,499</p>
                        <p><strong>Express Delivery:</strong> 2-3 business days — ₹149</p>
                        <p>We accept UPI, Credit/Debit cards, Net Banking, and Wallets.</p>
                      </div>
                    ),
                  },
                  {
                    key: "returns",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12h18M3 12l4-4M3 12l4 4"/></svg>,
                    label: "7-day return",
                    content: (
                      <div className="text-[12px] text-[#666] leading-[1.8] space-y-2">
                        <p>We offer a 7-day hassle-free return policy. Items must be unworn with tags attached.</p>
                        <p>Refund processed within 5-7 business days of receiving the item.</p>
                      </div>
                    ),
                  },
                ].map((item) => (
                  <div key={item.key} className="border-b border-[#eee]">
                    <button onClick={() => toggleAccordion(item.key)} className="w-full flex items-center gap-3 py-4 text-[13px] group">
                      <span className="text-[#999]">{item.icon}</span>
                      <span className="flex-1 text-left group-hover:text-[#9E1528] transition-colors">{item.label}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"
                        className={`transition-transform duration-300 ${openAccordion === item.key ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    {openAccordion === item.key && <div className="pb-4 animate-fade-in">{item.content}</div>}
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="border-b border-[#eee]">
                <button onClick={() => toggleAccordion("description")} className="w-full flex items-center justify-between py-4 text-[13px] font-medium">
                  <span>Description & fit</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"
                    className={`transition-transform duration-300 ${openAccordion === "description" ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {openAccordion === "description" && (
                  <div className="pb-5 text-[12px] text-[#666] leading-[1.8] space-y-3 animate-fade-in">
                    <p>Oversized tee in soft, premium combed cotton with a round neckline and dropped shoulders. Minimal &quot;MINDSET&quot; typography on chest. Ribbed crew neck. ODDAY woven label at hem.</p>
                    <div className="space-y-1">
                      <p><strong>Fit:</strong> Oversized / Relaxed</p>
                      <p><strong>Composition:</strong> 100% Cotton, 220 GSM</p>
                      <p><strong>Care:</strong> Machine wash cold at 30°. Do not bleach. Tumble dry low.</p>
                      <p><strong>Article no:</strong> ODD-TS-001-WHT</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Materials */}
              <div className="border-b border-[#eee]">
                <button onClick={() => toggleAccordion("material")} className="w-full flex items-center justify-between py-4 text-[13px] font-medium">
                  <span>Materials</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"
                    className={`transition-transform duration-300 ${openAccordion === "material" ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {openAccordion === "material" && (
                  <div className="pb-5 text-[12px] text-[#666] leading-[1.8] animate-fade-in">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-full bg-[#eee] rounded-full h-2 overflow-hidden">
                        <div className="bg-[#9E1528] h-full rounded-full" style={{ width: "100%" }} />
                      </div>
                      <span className="shrink-0 text-[11px]">Cotton 100%</span>
                    </div>
                    <p>Premium combed cotton. Bio-washed for extra softness. Pre-shrunk to maintain shape.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM BASICS — Fabric & Quality ===== */}
      <section className="bg-white">
        <div className="px-5 md:px-10 py-12 md:py-20 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="section-label">Crafted with Care</p>
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.05]">Premium Basics.</h2>
              <p className="text-[13px] text-[#888] mt-3 max-w-lg mx-auto leading-[1.7]">
                Every piece is crafted using long-staple cotton, bio-washed for softness, and built to last through every adventure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { image: "/images/odday-knit.jpg", title: "220 GSM Cotton", desc: "Premium long-staple cotton. Soft, breathable, durable." },
              { image: "/images/odday-folded.jpg", title: "Bio-Washed", desc: "Pre-shrunk & enzyme-washed. Cloud-soft from day one." },
              { image: "/images/odday-coords.jpg", title: "Thoughtful Fits", desc: "Every stitch, cut, and detail is intentional." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f3] mb-4 editorial-card">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-[18px] md:text-[22px] font-bold tracking-[-0.02em]">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#888] leading-[1.6]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OTHERS ALSO BOUGHT ===== */}
      <section className="mt-12 md:mt-20 border-t border-[#eee]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-[18px] md:text-[22px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Others also bought</h2>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollCarousel(-1)} className="w-9 h-9 border border-[#ddd] rounded-full flex items-center justify-center hover:border-[#1a1a1a] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={() => scrollCarousel(1)} className="w-9 h-9 border border-[#ddd] rounded-full flex items-center justify-center hover:border-[#1a1a1a] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          <div ref={carouselRef} className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth pb-4 -mx-5 px-5 md:mx-0 md:px-0" style={{ scrollbarWidth: "none" }}>
            {othersAlsoBought.map((p) => (
              <div key={p.id} className="shrink-0 w-[160px] md:w-[220px]">
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENTLY VIEWED ===== */}
      <section className="border-t border-[#eee]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <ScrollReveal>
            <h2 className="text-[18px] md:text-[22px] mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Recently viewed</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {othersAlsoBought.slice(0, 4).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
