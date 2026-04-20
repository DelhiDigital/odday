"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1800);
    const t2 = setTimeout(() => setHidden(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4 preloader-blink">
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={96}
          height={96}
          priority
        />
        <Image
          src="/logos/ODDAY Wordmark.png"
          alt="ODDAY"
          width={200}
          height={50}
          priority
        />
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .preloader-blink {
          animation: blink 0.7s ease-in-out infinite;
          will-change: opacity;
        }
      `}</style>
    </div>
  );
}
