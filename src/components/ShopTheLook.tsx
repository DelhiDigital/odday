"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Hotspot = {
  id: string;
  // Percent positions within the image (0–100)
  x: number;
  y: number;
  product: {
    slug: string;
    name: string;
    price: number;
    image: string;
  };
};

type ShopTheLookProps = {
  image?: string;
  hotspots?: Hotspot[];
};

const defaultHotspots: Hotspot[] = [
  {
    id: "hoodie",
    x: 52,
    y: 32,
    product: {
      slug: "confidence-hoodie",
      name: "Confidence Hoodie",
      price: 2199,
      image: "/images/product-5.jpg",
    },
  },
  {
    id: "shorts",
    x: 52,
    y: 72,
    product: {
      slug: "play-shorts-olive",
      name: "Play Skater Jeans",
      price: 1499,
      image: "/images/product-6.jpg",
    },
  },
];

export default function ShopTheLook({
  image = "/images/odday-hoodie-boy.jpg",
  hotspots = defaultHotspots,
}: ShopTheLookProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = hotspots.find((h) => h.id === activeId) ?? null;

  return (
    <section className="bg-[#f5f5f3]">
      <div className="px-5 md:px-10 py-12 md:py-20 max-w-[1400px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="section-label">Styled Together</p>
          <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-0.03em] leading-[1.05]">
            Shop the Look.
          </h2>
          <p className="text-[12px] md:text-[13px] text-[#888] mt-3 max-w-md mx-auto leading-[1.7]">
            Tap the dots to explore each piece of this look.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_340px] gap-6 md:gap-10 items-start">
          {/* Image with hotspots */}
          <div
            className="relative aspect-[4/5] bg-[#e5e5e5] overflow-hidden"
            onMouseLeave={() => setActiveId(null)}
          >
            <Image
              src={image}
              alt="Shop the look"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />

            {hotspots.map((h) => {
              const isActive = activeId === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveId(isActive ? null : h.id)}
                  onMouseEnter={() => setActiveId(h.id)}
                  aria-label={`View ${h.product.name}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  <span className="relative flex items-center justify-center">
                    {/* Pulse ring */}
                    <span
                      className={`absolute inline-flex h-10 w-10 rounded-full bg-white opacity-60 ${
                        isActive ? "" : "animate-ping"
                      }`}
                    />
                    {/* Inner dot */}
                    <span
                      className={`relative inline-flex h-5 w-5 rounded-full border-2 border-white bg-white/90 shadow-md transition-transform duration-200 ${
                        isActive ? "scale-110 bg-[#9E1528]" : ""
                      }`}
                    >
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#fff" : "#111"} strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Side panel — active product OR list */}
          <div className="md:sticky md:top-[96px]">
            {active ? (
              <div className="animate-fade-up">
                <p className="section-label">Now Viewing</p>
                <Link href={`/product/${active.product.slug}`} className="block group">
                  <div className="relative aspect-[3/4] bg-[#eee] overflow-hidden mb-4">
                    <Image
                      src={active.product.image}
                      alt={active.product.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                  </div>
                  <h3 className="text-[14px] font-medium text-[#111] group-hover:opacity-60 transition-opacity mb-1">
                    {active.product.name}
                  </h3>
                  <p className="text-[13px] text-[#111] font-medium">
                    ₹{active.product.price.toLocaleString()}
                  </p>
                </Link>
                <Link
                  href={`/product/${active.product.slug}`}
                  className="inline-block mt-5 text-[11px] tracking-[0.12em] uppercase font-medium text-[#111] border-b border-[#111] pb-1 hover:text-[#9E1528] hover:border-[#9E1528] transition-colors"
                >
                  Shop This Piece
                </Link>
              </div>
            ) : (
              <div>
                <p className="section-label">The Look</p>
                <p className="text-[14px] text-[#111] mb-6 leading-[1.6]">
                  Hover or tap any dot to explore each product in this styled look.
                </p>
                <ul className="space-y-4">
                  {hotspots.map((h, i) => (
                    <li key={h.id} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#111] text-white text-[10px] font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <button
                        onClick={() => setActiveId(h.id)}
                        className="text-[13px] text-[#111] hover:opacity-60 transition-opacity text-left"
                      >
                        {h.product.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
