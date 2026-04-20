"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  bg: string;
  images: string[];
};

const allProducts: Product[] = [
  { id: "mindset-tee-white", name: "Walking Leaf T-Shirt", price: 5400, category: "tshirts", bg: "#9bb5a0", images: ["/images/product-1.jpg", "/images/product-1.jpg", "/images/product-1.jpg", "/images/product-1.jpg"] },
  { id: "everyday-shorts-black", name: "Dark Crest T-Shirt", price: 6800, category: "tshirts", bg: "#0a0a0a", images: ["/images/product-2.jpg", "/images/product-2.jpg", "/images/product-2.jpg"] },
  { id: "grow-tee-maroon", name: "Glacial Blue Ladybird T-Shirt", price: 5400, category: "tshirts", bg: "#a3bdd4", images: ["/images/product-3.jpg", "/images/product-3.jpg", "/images/product-3.jpg"] },
  { id: "layer-crew-teal", name: "Black Ladybird T-Shirt", price: 5200, category: "tshirts", bg: "#0a0a0a", images: ["/images/product-4.jpg", "/images/product-4.jpg", "/images/product-4.jpg"] },
  { id: "confidence-hoodie", name: "Confidence Hoodie", price: 2199, originalPrice: 2599, category: "hoodies", bg: "#ddd8cf", images: ["/images/product-5.jpg", "/images/product-5-hover.jpg"] },
  { id: "play-shorts-olive", name: "Play Skater Jeans", price: 1499, category: "shorts", bg: "#6b7c3e", images: ["/images/product-6.jpg", "/images/product-6-hover.jpg"] },
  { id: "character-tee-sand", name: "Character Long Tee", price: 1299, category: "tshirts", bg: "#d4b896", images: ["/images/product-7.jpg", "/images/product-7-hover.jpg"] },
  { id: "effort-joggers-gray", name: "Effort Sweatshirt", price: 1599, originalPrice: 1899, category: "joggers", bg: "#4a4a4a", images: ["/images/product-8.jpg", "/images/product-8-hover.jpg"] },
  { id: "build-tee-black", name: "Bobbie Pants", price: 1399, category: "pants", bg: "#1a1a1a", images: ["/images/product-9.jpg", "/images/product-9-hover.jpg"] },
  { id: "own-it-shorts-navy", name: "Mindset Crew", price: 1799, category: "tshirts", bg: "#2a3a5c", images: ["/images/product-10.jpg", "/images/product-10-hover.jpg"] },
  { id: "mindset-crew-red", name: "Equestrian Tee", price: 1799, originalPrice: 2099, category: "tshirts", bg: "#9E1528", images: ["/images/product-3.jpg", "/images/product-3.jpg"] },
  { id: "everyday-joggers-black", name: "Everyday Joggers", price: 1599, category: "joggers", bg: "#1a1a1a", images: ["/images/product-4.jpg", "/images/product-4.jpg"] },
];

const filterPills = [
  { label: "View all", value: "all" },
  { label: "T-shirts", value: "tshirts" },
  { label: "Polo", value: "polo" },
  { label: "Shirts", value: "shirts" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Caps", value: "caps" },
  { label: "Jackets", value: "jackets" },
  { label: "Puffer jacket", value: "puffer" },
  { label: "Jersey", value: "jersey" },
  { label: "Pants", value: "pants" },
  { label: "Denims", value: "denims" },
  { label: "Crop top", value: "crop" },
  { label: "Shorts", value: "shorts" },
];

function ProductCard({ product, onPrev, onNext }: { product: Product; onPrev?: () => void; onNext?: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  const prev = () => setImgIdx((i) => (i - 1 + product.images.length) % product.images.length);
  const next = () => setImgIdx((i) => (i + 1) % product.images.length);

  return (
    <div className="group relative">
      {/* Product image card */}
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden"
        style={{ backgroundColor: product.bg }}
      >
        <Image
          src={product.images[imgIdx]}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Bookmark icon — top right */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setBookmarked(!bookmarked); }}
          aria-label="Bookmark"
          className="absolute top-4 right-4 z-10 p-1 hover:scale-110 transition-transform"
        >
          <svg width="18" height="22" viewBox="0 0 18 22" fill={bookmarked ? "#fff" : "none"} stroke="#fff" strokeWidth="1.5">
            <path d="M3 2h12v18l-6-4-6 4V2z" />
          </svg>
        </button>

        {/* Carousel arrows — visible on hover, only when multiple images */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/35"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white/35"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </>
        )}

        {/* Image dots indicator */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {product.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === imgIdx ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </Link>

      {/* Info below */}
      <div className="flex items-start justify-between gap-3 pt-3 pb-6 px-1">
        <Link href={`/product/${product.id}`} className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-[#111] truncate">{product.name}</p>
          <p className="text-[11px] text-[#555] mt-1 uppercase tracking-[0.04em]">
            RS. {product.price.toLocaleString()}
            {product.originalPrice && (
              <span className="ml-2 line-through text-[#aaa]">RS. {product.originalPrice.toLocaleString()}</span>
            )}
          </p>
        </Link>
        <button
          aria-label="Quick add"
          className="shrink-0 w-7 h-7 flex items-center justify-center hover:bg-[#e5e5e5] rounded-full transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#efefef] min-h-screen">
      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between px-5 md:px-8 pt-8 md:pt-10 pb-5">
        <h1 className="text-[14px] md:text-[15px] font-medium tracking-[0.01em] text-[#111]">Latest Drop</h1>
        <div className="flex items-center gap-3 md:gap-4">
          <button aria-label="Search" className="w-10 h-10 flex items-center justify-center hover:bg-[#e5e5e5] rounded-full transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            onClick={() => setFiltersOpen(true)}
            className="bg-white text-[12px] tracking-[0.01em] font-medium px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-[#f5f5f5] transition-colors"
          >
            Advance Filters
          </button>
        </div>
      </div>

      {/* ===== CATEGORY PILLS ===== */}
      <div className="relative">
        <div
          ref={pillsRef}
          className="flex items-center gap-2 px-5 md:px-8 pb-6 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {filterPills.map((pill) => (
            <button
              key={pill.value}
              onClick={() => setActiveCategory(pill.value)}
              className={`shrink-0 text-[13px] font-medium tracking-[0.01em] px-5 py-2.5 rounded-full transition-colors ${
                activeCategory === pill.value
                  ? "bg-[#111] text-white"
                  : "bg-white text-[#111] hover:bg-[#f5f5f5]"
              }`}
            >
              {pill.label}
            </button>
          ))}
          <span className="shrink-0 w-2 h-2 rounded-full bg-[#aaa] ml-2" aria-hidden />
        </div>
      </div>

      {/* ===== PRODUCT GRID — end-to-end 4 columns ===== */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#efefef] px-0">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 px-5">
          <p className="text-[14px] mb-2">No products found</p>
          <p className="text-[12px] text-[#777]">Try a different category</p>
        </div>
      )}

      {/* ===== ADVANCE FILTERS DRAWER ===== */}
      {filtersOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setFiltersOpen(false)}
        >
          <aside
            className="absolute top-0 right-0 bottom-0 w-full md:w-[420px] bg-white overflow-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
              <h2 className="text-[14px] font-semibold tracking-[0.02em] uppercase">Advance Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#888] mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"].map((s) => (
                    <button
                      key={s}
                      className="border border-[#e5e5e5] text-[12px] tracking-[0.02em] px-4 py-2.5 rounded-full hover:border-[#111] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#888] mb-4">Colour</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#ffffff", border: true }, { hex: "#1a1a1a" }, { hex: "#9E1528" },
                    { hex: "#57BCBE" }, { hex: "#d4b896" }, { hex: "#6b7c3e" }, { hex: "#2a3a5c" },
                  ].map((c, i) => (
                    <button
                      key={i}
                      className={`w-9 h-9 rounded-full hover:scale-110 transition-transform ${c.border ? "border border-[#ddd]" : ""}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#888] mb-4">Price</h3>
                <div className="space-y-1">
                  {["Under ₹1,000", "₹1,000 – ₹1,500", "₹1,500 – ₹2,000", "Above ₹2,000"].map((p) => (
                    <button
                      key={p}
                      className="block text-[13px] text-[#555] hover:text-[#111] transition-colors w-full text-left py-2"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-[#e5e5e5] p-6">
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-[#111] text-white text-[12px] tracking-[0.12em] uppercase font-medium py-4 hover:bg-[#333] transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
