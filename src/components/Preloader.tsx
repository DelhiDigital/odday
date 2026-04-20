"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2400);
    const t2 = setTimeout(() => setHidden(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Comet sweep — a white streak with trailing tail shooting across */}
      <div className="absolute top-1/2 -translate-y-1/2 preloader-comet">
        <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="tailGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Thin tapered tail */}
          <path d="M0 20 L210 18 L210 22 Z" fill="url(#tailGradient)" />
          {/* Sparkle/star head */}
          <path
            d="M210 20 L216 14 L220 8 L222 14 L230 18 L222 22 L220 32 L216 22 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ODDAY logo + wordmark — fades in after comet lands */}
      <div className="relative z-10 flex flex-col items-center gap-3 preloader-logo">
        <Image
          src="/logos/ODDAY Logomark.png"
          alt="ODDAY"
          width={44}
          height={44}
          className="brightness-0 invert"
          priority
        />
        <Image
          src="/logos/ODDAY Wordmark.png"
          alt="ODDAY"
          width={96}
          height={24}
          className="brightness-0 invert"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes cometSweep {
          0% {
            transform: translateX(-60vw);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            transform: translateX(60vw);
            opacity: 1;
          }
          80%,
          100% {
            transform: translateX(60vw);
            opacity: 0;
          }
        }
        @keyframes logoIn {
          0%, 55% {
            opacity: 0;
            transform: scale(0.96);
          }
          70% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .preloader-comet {
          animation: cometSweep 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity;
        }
        .preloader-logo {
          animation: logoIn 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
