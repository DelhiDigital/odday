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

export default function ProductCard({ id, name, price, originalPrice, image, hoverImage, tag }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="product-card-img relative aspect-[3/4] bg-[#f5f5f3] mb-3">
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
            className={`object-cover transition-opacity duration-600 ${hovered ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}

        {/* Tag */}
        {tag && (
          <span className="absolute top-3 left-3 text-[9px] tracking-[0.12em] uppercase font-semibold bg-white px-3 py-1.5 z-10">
            {tag}
          </span>
        )}

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          <button
            className="w-full bg-[#111] text-white text-[10px] tracking-[0.12em] uppercase py-3.5 font-medium hover:bg-[#333] transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Quick Add +
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-[12px] tracking-[0.02em] font-medium group-hover:opacity-60 transition-opacity">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-medium">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-[11px] text-[#bbb] line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
