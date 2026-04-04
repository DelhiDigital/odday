"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  tag?: string;
  colors?: string[];
}

export default function ProductCard({ id, name, price, originalPrice, image, hoverImage, tag, colors }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="product-card-img relative aspect-[3/4] bg-[#f5f5f5] mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover img-zoom"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={name}
            fill
            className={`object-cover transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}

        {/* Tag */}
        {tag && (
          <span className="absolute top-3 left-3 text-[9px] tracking-[0.12em] uppercase font-medium bg-white px-2.5 py-1.5 shadow-sm z-10">
            {tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 hover:bg-white z-10 shadow-sm"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
            <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z" />
          </svg>
        </button>

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 z-10">
          <button
            className="w-full bg-white/95 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase py-3 font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-sm"
            onClick={(e) => e.preventDefault()}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="text-[11px] md:text-[12px] tracking-[0.02em] leading-tight group-hover:text-[#A52019] transition-colors duration-300">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-medium">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-[10px] text-[#bbb] line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
        {/* Color swatches */}
        {colors && colors.length > 0 && (
          <div className="flex gap-1.5 pt-0.5">
            {colors.map((c, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border border-[#e5e5e5]"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
