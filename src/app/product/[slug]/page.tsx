"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

const sizes = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"];
const images = ["/images/product-1.jpg", "/images/product-2.jpg", "/images/product-3.jpg", "/images/product-4.jpg"];

const related = [
  { id: "grow-tee-maroon", name: "Grow Tee", price: 1299, originalPrice: 1499, image: "/images/product-3.jpg", colors: ["#711109", "#fff"] },
  { id: "layer-crew-teal", name: "Layer Crew", price: 1799, image: "/images/product-4.jpg", colors: ["#57BCBE", "#1a1a1a"] },
  { id: "character-tee-sand", name: "Character Tee", price: 1299, image: "/images/product-7.jpg", colors: ["#d4b896", "#fff"] },
  { id: "effort-joggers-gray", name: "Effort Joggers", price: 1599, originalPrice: 1899, image: "/images/product-8.jpg", colors: ["#999", "#1a1a1a"] },
];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>("details");
  const [added, setAdded] = useState(false);

  const toggle = (s: string) => setOpenSection(openSection === s ? null : s);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <div className="py-3 text-[10px] text-[#bbb] tracking-[0.05em] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1a1a1a] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">Mindset Oversized Tee</span>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-[1fr_440px] gap-6 md:gap-14 pb-16 md:pb-24">
          {/* Images */}
          <div>
            {/* Mobile: swipeable single */}
            <div className="md:hidden relative aspect-[3/4] bg-[#f5f5f5] mb-3 overflow-hidden">
              <Image src={images[activeImg]} alt="Product" fill className="object-cover" priority sizes="100vw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImg === i ? "bg-[#1a1a1a] w-5" : "bg-[#ccc]"}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 2x2 grid */}
            <div className="hidden md:grid grid-cols-2 gap-1.5">
              {images.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] bg-[#f5f5f5] overflow-hidden cursor-zoom-in group">
                  <Image src={src} alt={`View ${i + 1}`} fill className="object-cover img-zoom" sizes="35vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-[80px] md:self-start">
            <div className="md:py-6">
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#A52019] font-medium">New Arrival</span>
              <h1 className="text-[20px] md:text-[24px] tracking-[0.03em] font-light mt-2 mb-1">Mindset Oversized Tee</h1>
              <p className="text-[12px] text-[#999] mb-5">White</p>

              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[16px] font-medium">₹1,299</span>
                <span className="text-[12px] text-[#bbb] line-through">₹1,599</span>
                <span className="text-[10px] tracking-[0.05em] text-[#A52019] font-medium bg-[#fdf2f2] px-2 py-0.5 rounded">-19%</span>
              </div>
              <p className="text-[10px] text-[#bbb] mb-6">Inclusive of all taxes</p>

              {/* Color Swatches */}
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] block mb-3">Color — White</span>
                <div className="flex gap-2">
                  {[{ hex: "#fff", active: true }, { hex: "#1a1a1a" }, { hex: "#711109" }].map((c, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full transition-all ${c.active ? "ring-2 ring-offset-2 ring-[#1a1a1a]" : "border border-[#ddd] hover:scale-110"}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#999]">Size {selectedSize && `— ${selectedSize}`}</span>
                  <button className="text-[10px] text-[#A52019] underline underline-offset-2">Size Guide</button>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`border text-[11px] tracking-[0.05em] py-3 rounded-sm transition-all duration-300 ${
                        selectedSize === s
                          ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                          : "border-[#e5e5e5] hover:border-[#999]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-2.5 mb-8">
                <button
                  onClick={handleAddToCart}
                  className={`w-full text-[11px] tracking-[0.18em] uppercase py-4 font-medium transition-all duration-500 ${
                    added
                      ? "bg-[#2d7d3a] text-white"
                      : "bg-[#1a1a1a] text-white hover:bg-[#A52019]"
                  }`}
                >
                  {added ? "✓  Added to Bag" : "Add to Bag"}
                </button>
                <button className="w-full border border-[#e5e5e5] text-[11px] tracking-[0.18em] uppercase py-4 hover:border-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z" />
                  </svg>
                  Save to Wishlist
                </button>
              </div>

              {/* Accordion */}
              <div className="border-t border-[#e5e5e5]">
                {[
                  {
                    key: "details", label: "Product Details",
                    content: <ul className="space-y-2 text-[12px] text-[#666] leading-[1.7]">
                      <li>Oversized relaxed fit for effortless layering</li><li>Drop shoulder design</li>
                      <li>Ribbed crew neck</li><li>Minimal &quot;MINDSET&quot; typography on chest</li>
                      <li>ODDAY woven label on hem</li>
                    </ul>,
                  },
                  {
                    key: "fabric", label: "Fabric & Care",
                    content: <div className="text-[12px] text-[#666] leading-[1.7] space-y-3">
                      <div><p className="text-[#1a1a1a] mb-1">Composition</p><p>100% Premium Combed Cotton, 220 GSM. Bio-washed. Pre-shrunk.</p></div>
                      <div><p className="text-[#1a1a1a] mb-1">Care</p><p>Machine wash cold. Do not bleach. Tumble dry low.</p></div>
                    </div>,
                  },
                  {
                    key: "shipping", label: "Shipping & Returns",
                    content: <div className="text-[12px] text-[#666] leading-[1.7] space-y-2">
                      <p>Ships within 2–3 business days. Delivery in 5–7 days.</p>
                      <p>Free shipping on orders above ₹1,499.</p>
                      <p>7-day hassle-free return & exchange.</p>
                    </div>,
                  },
                ].map((section) => (
                  <div key={section.key} className="border-b border-[#e5e5e5]">
                    <button onClick={() => toggle(section.key)} className="w-full flex items-center justify-between py-4 text-[11px] tracking-[0.1em] uppercase group">
                      <span className="group-hover:text-[#A52019] transition-colors">{section.label}</span>
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.2"
                        className={`transition-transform duration-400 ${openSection === section.key ? "rotate-180" : ""}`}
                      ><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    <div className={`grid transition-all duration-400 ${openSection === section.key ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">{section.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="border-t border-[#e5e5e5] py-14 md:py-20">
          <ScrollReveal>
            <div className="mb-8 md:mb-12">
              <span className="section-label">Complete Your Look</span>
              <h2 className="section-title">You May Also Like</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-8 md:gap-y-12">
            {related.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      <Marquee text="Effort — Confidence — Character — Mindset — Growth — Play" speed={25} />
    </>
  );
}
