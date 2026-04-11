"use client";

export default function Marquee({ text, speed = 30 }: { text: string; speed?: number }) {
  const items = Array(6).fill(text);

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-[#e5e5e5] py-4 md:py-5 bg-white">
      <div
        className="inline-flex animate-[marquee_var(--duration)_linear_infinite]"
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {items.map((t, i) => (
          <span key={i} className="text-[11px] md:text-[13px] tracking-[0.18em] uppercase mx-8 md:mx-14 font-medium">
            {t}
            <span className="mx-8 md:mx-14 text-[#A52019]">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
