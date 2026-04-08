"use client";

import { useRef, useState, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({ children, className = "", strength = 0.3, onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      onClick={onClick}
      ref={ref as React.Ref<HTMLDivElement & HTMLAnchorElement>}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
      }}
    >
      {children}
    </Tag>
  );
}
