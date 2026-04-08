"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
}

export default function ParallaxImage({ src, alt, speed = 0.15, className = "", priority = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * speed * 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={{ transform: `translateY(${offset}px)`, willChange: "transform" }} className="relative w-full h-[115%] -mt-[7.5%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority={priority} />
      </div>
    </div>
  );
}
