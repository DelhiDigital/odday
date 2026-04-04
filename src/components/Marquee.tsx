"use client";

export default function Marquee({ text, speed = 30 }: { text: string; speed?: number }) {
  const items = Array(6).fill(text);

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[#e5e5e5] py-3 md:py-4">
      <div
        className="inline-flex animate-[marquee_var(--duration)_linear_infinite]"
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {items.map((t, i) => (
          <span key={i} className="text-[11px] md:text-[13px] tracking-[0.25em] uppercase font-light mx-8 md:mx-14">
            {t}
            <span className="mx-8 md:mx-14 text-[#ccc]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
