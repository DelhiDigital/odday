"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const allProducts = [
  { id: "mindset-tee-white", name: "Mindset Oversized Tee", price: 1299, originalPrice: 1599, image: "/images/product-1.jpg", tag: "New", category: "tshirts", colors: ["#fff", "#1a1a1a", "#711109"] },
  { id: "everyday-shorts-black", name: "Everyday Shorts", price: 999, image: "/images/product-2.jpg", category: "shorts", colors: ["#1a1a1a", "#6b7c3e"] },
  { id: "grow-tee-maroon", name: "Grow Tee", price: 1299, originalPrice: 1499, image: "/images/product-3.jpg", category: "tshirts", colors: ["#711109", "#fff"] },
  { id: "layer-crew-teal", name: "Layer Crew", price: 1799, image: "/images/product-4.jpg", category: "tshirts", colors: ["#57BCBE", "#1a1a1a"] },
  { id: "confidence-hoodie", name: "Confidence Hoodie", price: 2199, originalPrice: 2599, image: "/images/product-5.jpg", tag: "New", category: "hoodies", colors: ["#f0ede8", "#1a1a1a"] },
  { id: "play-shorts-olive", name: "Play Shorts", price: 999, image: "/images/product-6.jpg", category: "shorts", colors: ["#6b7c3e", "#1a1a1a", "#d4b896"] },
  { id: "character-tee-sand", name: "Character Tee", price: 1299, image: "/images/product-7.jpg", category: "tshirts", colors: ["#d4b896", "#fff"] },
  { id: "effort-joggers-gray", name: "Effort Joggers", price: 1599, originalPrice: 1899, image: "/images/product-8.jpg", category: "joggers", colors: ["#999", "#1a1a1a"] },
  { id: "build-tee-black", name: "Build Tee", price: 1299, image: "/images/product-1.jpg", category: "tshirts", colors: ["#1a1a1a", "#fff"] },
  { id: "own-it-shorts-navy", name: "Own It Shorts", price: 1099, image: "/images/product-2.jpg", category: "shorts", colors: ["#2a3a5c", "#1a1a1a"] },
  { id: "mindset-crew-red", name: "Mindset Crew", price: 1799, originalPrice: 2099, image: "/images/product-3.jpg", tag: "New", category: "tshirts", colors: ["#A52019", "#1a1a1a"] },
  { id: "everyday-joggers-black", name: "Everyday Joggers", price: 1599, image: "/images/product-4.jpg", category: "joggers", colors: ["#1a1a1a", "#999"] },
];

const categories = ["All", "T-Shirts", "Shorts", "Hoodies", "Joggers"];

export default function ShopPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filtered = allProducts.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory.toLowerCase().replace("-", "");
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <>
      {/* Collection Hero */}
      <div className="relative h-[200px] md:h-[280px] bg-[#f7f7f7] overflow-hidden">
        <Image src="/images/collection-1.jpg" alt="Shop" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <span className="section-label">Collection</span>
            <h1 className="text-[24px] md:text-[36px] font-light tracking-[0.04em]">
              {activeCategory === "All" ? "Shop All" : activeCategory}
            </h1>
            <p className="text-[11px] text-[#999] mt-2">{sorted.length} products</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        {/* Filter Bar */}
        <div className="flex items-center justify-between py-4 border-b border-[#e5e5e5] sticky top-[52px] md:top-[60px] bg-white z-30">
          {/* Category Pills — Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.12em] uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#777] hover:bg-[#f5f5f5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2"><path d="M3 6h18M7 12h10M10 18h4" /></svg>
            Filter & Sort
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#999] tracking-[0.05em] uppercase hidden md:inline">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[10px] tracking-[0.08em] uppercase bg-transparent border border-[#e5e5e5] rounded-full px-4 py-2 focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low–High</option>
              <option value="price-desc">Price: High–Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10 pt-8 pb-20">
          {/* Sidebar Filters */}
          <aside className={`${filtersOpen ? "fixed inset-0 z-50 bg-white p-6 overflow-auto" : "hidden"} md:block md:relative md:w-48 shrink-0`}>
            <div className="flex justify-between items-center mb-8 md:hidden">
              <span className="text-[13px] tracking-[0.1em] uppercase font-medium">Filters</span>
              <button onClick={() => setFiltersOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="md:hidden mb-8">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-4">Category</h3>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setFiltersOpen(false); }}
                  className={`block text-[12px] w-full text-left py-2 ${activeCategory === cat ? "font-medium" : "text-[#777]"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-4">Size</h3>
              <div className="flex flex-wrap gap-1.5">
                {["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"].map((s) => (
                  <button key={s} className="border border-[#e5e5e5] text-[10px] tracking-[0.05em] px-3 py-2.5 rounded-sm hover:border-[#1a1a1a] transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-4">Colour</h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { hex: "#ffffff", border: true }, { hex: "#1a1a1a" }, { hex: "#711109" },
                  { hex: "#57BCBE" }, { hex: "#d4b896" }, { hex: "#6b7c3e" },
                ].map((c, i) => (
                  <button
                    key={i}
                    className={`w-7 h-7 rounded-full hover:scale-110 transition-transform shadow-sm ${c.border ? "border border-[#ddd]" : ""}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#999] mb-4">Price</h3>
              {["Under ₹1,000", "₹1,000 – ₹1,500", "₹1,500 – ₹2,000", "Above ₹2,000"].map((p) => (
                <button key={p} className="block text-[12px] text-[#777] hover:text-[#1a1a1a] transition-colors w-full text-left py-1.5">{p}</button>
              ))}
            </div>

            <button onClick={() => setFiltersOpen(false)} className="md:hidden btn-primary w-full mt-8">
              Show {sorted.length} Results
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-8 md:gap-y-12">
              {sorted.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.04}>
                  <ProductCard {...p} />
                </ScrollReveal>
              ))}
            </div>
            {sorted.length === 0 && (
              <div className="text-center py-24">
                <p className="text-[14px] mb-2">No products found</p>
                <p className="text-[12px] text-[#999]">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
