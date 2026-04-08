"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  style?: React.CSSProperties;
}

export default function TextReveal({ text, className = "", tag: Tag = "h2", delay = 0, style }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={className} style={style}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <span
              className="inline-block"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(110%)",
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.04}s, opacity 0.5s ease ${delay + i * 0.04}s`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
