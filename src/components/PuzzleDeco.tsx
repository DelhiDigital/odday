"use client";

interface PuzzleDecoProps {
  color?: string;
  size?: number;
  className?: string;
  rotate?: number;
  opacity?: number;
}

export default function PuzzleDeco({ color = "#9E1528", size = 40, className = "", rotate = 0, opacity = 0.08 }: PuzzleDecoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={`pointer-events-none ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z"
        fill={color}
      />
    </svg>
  );
}
