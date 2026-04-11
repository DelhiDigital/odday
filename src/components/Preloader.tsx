"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"white" | "red" | "done">("white");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase 1: white bg, dark logo (0 - 1.4s)
    const t1 = setTimeout(() => setPhase("red"), 1400);
    // Phase 2: red bg, white logo (1.4 - 2.6s)
    const t2 = setTimeout(() => setPhase("done"), 2600);
    // Hide completely
    const t3 = setTimeout(() => setHidden(true), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-600 ${
        phase === "white"
          ? "bg-white"
          : phase === "red"
            ? "bg-[#A52019]"
            : "bg-[#A52019] opacity-0 pointer-events-none"
      }`}
    >
      {/* White phase — dark logomark + wordmark */}
      <div
        className={`absolute flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === "white"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }`}
      >
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={56}
          height={56}
          priority
        />
        <Image
          src="/logos/ODDAY Wordmark.png"
          alt="ODDAY"
          width={110}
          height={28}
          priority
        />
        {/* Loading line in red */}
        <div className="w-16 h-[2px] bg-[#e5e5e5] mt-2 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#A52019] rounded-full"
            style={{ animation: "lineGrow 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards", transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Red phase — white logomark + wordmark */}
      <div
        className={`absolute flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === "red"
            ? "opacity-100 scale-100"
            : phase === "done"
              ? "opacity-100 scale-105"
              : "opacity-0 scale-90"
        }`}
      >
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={56}
          height={56}
          className="brightness-0 invert"
          priority
        />
        <Image
          src="/logos/ODDAY Wordmark.png"
          alt="ODDAY"
          width={110}
          height={28}
          className="brightness-0 invert"
          priority
        />
      </div>
    </div>
  );
}
