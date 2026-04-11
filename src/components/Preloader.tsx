"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"white" | "red" | "done">("white");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase 1: white bg, dark logo (0 - 1.2s)
    const t1 = setTimeout(() => setPhase("red"), 1200);
    // Phase 2: red bg, white logo (1.2 - 2.4s)
    const t2 = setTimeout(() => setPhase("done"), 2400);
    // Hide completely
    const t3 = setTimeout(() => setHidden(true), 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
        phase === "white"
          ? "bg-white"
          : phase === "red"
            ? "bg-[#A52019]"
            : "bg-[#A52019] opacity-0 pointer-events-none"
      }`}
    >
      {/* White phase — dark logomark */}
      <div
        className={`absolute transition-all duration-500 ${
          phase === "white"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90"
        }`}
      >
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={80}
          height={80}
          className="animate-[pulse_1s_ease-in-out_infinite]"
          priority
        />
      </div>

      {/* Red phase — white wordmark */}
      <div
        className={`absolute flex flex-col items-center gap-4 transition-all duration-500 ${
          phase === "red"
            ? "opacity-100 scale-100"
            : phase === "done"
              ? "opacity-100 scale-110"
              : "opacity-0 scale-75"
        }`}
      >
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={60}
          height={60}
          className="brightness-0 invert"
          priority
        />
        <Image
          src="/logos/ODDAY Wordmark.png"
          alt="ODDAY"
          width={120}
          height={30}
          className="brightness-0 invert"
          priority
        />
      </div>

      {/* Puzzle pieces floating around — decorative */}
      {phase !== "done" && (
        <>
          <svg className="absolute top-[15%] left-[10%] opacity-10 animate-[float_3s_ease-in-out_infinite]" width="40" height="40" viewBox="0 0 50 50">
            <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z"
              fill={phase === "white" ? "#A52019" : "#fff"} />
          </svg>
          <svg className="absolute bottom-[20%] right-[12%] opacity-10 animate-[float_2.5s_ease-in-out_infinite_0.5s]" width="35" height="35" viewBox="0 0 50 50">
            <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z"
              fill={phase === "white" ? "#A52019" : "#fff"} />
          </svg>
          <svg className="absolute top-[60%] left-[70%] opacity-8 animate-[float_3.5s_ease-in-out_infinite_1s]" width="25" height="25" viewBox="0 0 50 50">
            <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z"
              fill={phase === "white" ? "#A52019" : "#fff"} />
          </svg>
        </>
      )}
    </div>
  );
}
