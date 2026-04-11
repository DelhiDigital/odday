"use client";

import { useState, useEffect, useRef } from "react";

const puzzlePieces = [
  { id: 0, x: 0, y: 0 },
  { id: 1, x: 1, y: 0 },
  { id: 2, x: 2, y: 0 },
  { id: 3, x: 0, y: 1 },
  { id: 4, x: 1, y: 1 },
  { id: 5, x: 2, y: 1 },
];

export default function PuzzleReveal() {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePieceClick = (id: number) => {
    if (revealed.includes(id) || complete) return;
    const next = [...revealed, id];
    setRevealed(next);
    if (next.length === puzzlePieces.length) {
      setTimeout(() => setComplete(true), 400);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("ODDAYFIRST");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} className="px-5 md:px-10 py-14 md:py-20 max-w-[1400px] mx-auto">
      <div className="bg-gradient-to-br from-[#fdf2f0] to-[#f5f4f0] rounded-xl p-6 md:p-12 text-center relative overflow-hidden">
        {/* Background puzzle pieces */}
        <svg className="absolute top-4 left-4 opacity-[0.04]" width="80" height="80" viewBox="0 0 50 50">
          <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z" fill="#A52019" />
        </svg>
        <svg className="absolute bottom-4 right-4 opacity-[0.04] rotate-180" width="60" height="60" viewBox="0 0 50 50">
          <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z" fill="#A52019" />
        </svg>

        {!complete ? (
          <>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A52019] font-semibold mb-2">
              Tap to Reveal
            </p>
            <h3 className="text-[20px] md:text-[26px] font-bold mb-2">Solve the Puzzle</h3>
            <p className="text-[12px] text-[#999] mb-8">Tap all pieces to unlock your exclusive discount code</p>

            {/* Puzzle Grid */}
            <div className="inline-grid grid-cols-3 gap-1.5 mx-auto mb-6">
              {puzzlePieces.map((piece) => {
                const isRevealed = revealed.includes(piece.id);
                return (
                  <button
                    key={piece.id}
                    onClick={() => handlePieceClick(piece.id)}
                    className={`w-[72px] h-[72px] md:w-[90px] md:h-[90px] rounded-md transition-all duration-500 relative overflow-hidden ${
                      isRevealed
                        ? "bg-[#A52019] scale-95"
                        : "bg-white border-2 border-[#e5e5e5] hover:border-[#A52019] hover:scale-105 cursor-pointer"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${piece.id * 0.05}s` : "0s",
                      animation: isVisible && !isRevealed ? `fadeUp 0.5s ease ${piece.id * 0.08}s both` : "none",
                    }}
                  >
                    {isRevealed ? (
                      <span className="text-white text-[18px] md:text-[22px] font-bold">
                        {"ODDAY!"[revealed.indexOf(piece.id)] || "O"}
                      </span>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 50 50" className="mx-auto opacity-20">
                        <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z" fill="#A52019" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-[#bbb]">{revealed.length} / {puzzlePieces.length} pieces revealed</p>
          </>
        ) : (
          <div className="animate-scale-in">
            <div className="text-[32px] mb-3">
              <svg className="mx-auto" width="48" height="48" viewBox="0 0 50 50">
                <path d="M10 0h30c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10v20c-5.5 0-10-4.5-10-10 0 5.5-4.5 10-10 10H10c0-5.5 4.5-10 10-10C14.5 30 10 25.5 10 20V0z" fill="#A52019" />
              </svg>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A52019] font-semibold mb-2">Puzzle Complete!</p>
            <h3 className="text-[22px] md:text-[28px] font-bold mb-2">You Unlocked 10% Off</h3>
            <p className="text-[12px] text-[#999] mb-6">Use this code on your first order</p>

            {/* Discount Code */}
            <div className="inline-flex items-center gap-3 bg-white border-2 border-dashed border-[#A52019] rounded-lg px-6 py-4 mb-4">
              <span className="text-[18px] md:text-[22px] font-bold tracking-[0.15em] text-[#A52019]">ODDAYFIRST</span>
              <button
                onClick={handleCopy}
                className="text-[10px] tracking-[0.1em] uppercase bg-[#A52019] text-white px-4 py-2 rounded font-semibold hover:bg-[#8a1a14] transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-[10px] text-[#bbb]">Valid on orders above ₹999</p>
          </div>
        )}
      </div>
    </section>
  );
}
