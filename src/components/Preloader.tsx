"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"white" | "red" | "done">("white");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("red"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2600);
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
      {/* White phase — dark logo */}
      <div
        className={`absolute flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === "white" ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Image src="/logos/ODDAY Logomark.png" alt="ODDAY" width={56} height={56} priority />
        <Image src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={110} height={28} priority />
      </div>

      {/* Red phase — white logo */}
      <div
        className={`absolute flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === "red"
            ? "opacity-100 scale-100"
            : phase === "done"
              ? "opacity-100 scale-105"
              : "opacity-0 scale-90"
        }`}
      >
        <Image src="/logos/ODDAY Logomark.png" alt="ODDAY" width={56} height={56} className="brightness-0 invert" priority />
        <Image src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={110} height={28} className="brightness-0 invert" priority />
      </div>
    </div>
  );
}
