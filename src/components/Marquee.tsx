"use client";

export default function Marquee({ text, speed = 30 }: { text: string; speed?: number }) {
  const items = Array(6).fill(text);

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[#e5e5e5] py-5 md:py-6 bg-white">
      <div
        className="inline-flex animate-[marquee_var(--duration)_linear_infinite]"
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {items.map((t, i) => (
          <span key={i} className="text-[14px] md:text-[16px] tracking-[0.2em] uppercase mx-10 md:mx-16 font-bold">
            {t}
            <span className="mx-10 md:mx-16 text-[#9E1528]">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
