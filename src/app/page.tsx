import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

const newArrivals = [
  { id: "mindset-tee-white", name: "Mindset Oversized Tee", price: 1299, originalPrice: 1599, image: "/images/product-1.jpg", tag: "New", colors: ["#fff", "#1a1a1a", "#711109"] },
  { id: "everyday-shorts-black", name: "Everyday Shorts", price: 999, image: "/images/product-2.jpg", colors: ["#1a1a1a", "#6b7c3e", "#d4b896"] },
  { id: "grow-tee-maroon", name: "Grow Tee", price: 1299, originalPrice: 1499, image: "/images/product-3.jpg", colors: ["#711109", "#fff", "#57BCBE"] },
  { id: "layer-crew-teal", name: "Layer Crew", price: 1799, image: "/images/product-4.jpg", colors: ["#57BCBE", "#1a1a1a"] },
];

const bestSellers = [
  { id: "confidence-hoodie", name: "Confidence Hoodie", price: 2199, originalPrice: 2599, image: "/images/product-5.jpg", tag: "Best Seller", colors: ["#f0ede8", "#1a1a1a"] },
  { id: "play-shorts-olive", name: "Play Shorts", price: 999, image: "/images/product-6.jpg", colors: ["#6b7c3e", "#1a1a1a", "#d4b896"] },
  { id: "character-tee-sand", name: "Character Tee", price: 1299, image: "/images/product-7.jpg", colors: ["#d4b896", "#fff"] },
  { id: "effort-joggers-gray", name: "Effort Joggers", price: 1599, originalPrice: 1899, image: "/images/product-8.jpg", colors: ["#999", "#1a1a1a"] },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/images/hero-1.jpg"
          alt="ODDAY First Collection 2026"
          fill
          className="object-cover scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-10 pb-14 md:pb-20 max-w-[1600px] mx-auto">
          <div className="max-w-lg">
            <p className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-white/80 mb-3 animate-fade-in">
              First Collection — 2026
            </p>
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] text-white font-light tracking-[0.01em] leading-[1.08] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Mindset is Bigger<br />than Medals
            </h1>
            <p className="text-[12px] md:text-[13px] text-white/70 font-light leading-[1.7] mb-8 max-w-sm animate-fade-up" style={{ animationDelay: "0.35s" }}>
              Premium streetwear for kids who build character, confidence and everyday wins.
            </p>
            <div className="flex gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Link href="/shop" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/about" className="btn-outline border-white/40 text-white hover:bg-white hover:text-[#1a1a1a]">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-[1px] h-8 bg-white/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee text="Elevated Kidswear — Premium Quality — Ages 4 to 13 — Mindset over Medals — Built for Play" />

      {/* ===== CATEGORY GRID ===== */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-[1600px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Shop by Category</span>
            <h2 className="section-title">Explore the Collection</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {[
            { label: "T-Shirts", sub: "12 Styles", image: "/images/cat-tshirts.jpg" },
            { label: "Shorts", sub: "8 Styles", image: "/images/cat-shorts.jpg" },
            { label: "Hoodies", sub: "6 Styles", image: "/images/product-5.jpg" },
            { label: "Co-ords", sub: "4 Styles", image: "/images/product-8.jpg" },
          ].map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.1}>
              <Link href={`/shop?category=${cat.label.toLowerCase()}`} className="group relative aspect-[3/4] overflow-hidden block">
                <Image src={cat.image} alt={cat.label} fill className="object-cover img-zoom" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent group-hover:from-black/50 transition-all duration-500" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <h3 className="text-[13px] md:text-[15px] tracking-[0.1em] uppercase font-medium mb-0.5">{cat.label}</h3>
                  <p className="text-[10px] text-white/60 tracking-[0.05em]">{cat.sub}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:translate-x-0 translate-x-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="px-5 md:px-10 pb-14 md:pb-20 max-w-[1600px] mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <span className="section-label">Just Dropped</span>
              <h2 className="section-title">New Arrivals</h2>
            </div>
            <Link href="/shop?collection=new" className="text-[10px] tracking-[0.15em] uppercase link-underline pb-0.5 hidden md:inline-block">
              View All
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-8 md:gap-y-12">
          {newArrivals.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <ProductCard {...p} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/shop?collection=new" className="btn-outline text-[10px] px-8 py-3">View All New Arrivals</Link>
        </div>
      </section>

      {/* ===== EDITORIAL BANNER ===== */}
      <ScrollReveal>
        <section className="relative aspect-[16/9] md:aspect-[21/8] overflow-hidden">
          <Image src="/images/collection-1.jpg" alt="The Collection" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center px-5 md:px-10 max-w-[1600px] mx-auto">
            <div className="max-w-md text-white">
              <span className="text-[9px] tracking-[0.35em] uppercase text-white/60 mb-3 block">The Philosophy</span>
              <h2 className="text-[24px] md:text-[36px] font-light tracking-[0.01em] leading-[1.15] mb-5">
                Childhood is a journey,<br />not a competition.
              </h2>
              <Link href="/about" className="btn-outline border-white/40 text-white hover:bg-white hover:text-[#1a1a1a]">
                Discover More
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== BEST SELLERS ===== */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-[1600px] mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <span className="section-label">Most Loved</span>
              <h2 className="section-title">Best Sellers</h2>
            </div>
            <Link href="/shop?sort=best-sellers" className="text-[10px] tracking-[0.15em] uppercase link-underline pb-0.5 hidden md:inline-block">
              View All
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-8 md:gap-y-12">
          {bestSellers.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <ProductCard {...p} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/shop?sort=best-sellers" className="btn-outline text-[10px] px-8 py-3">View All Best Sellers</Link>
        </div>
      </section>

      {/* ===== SPLIT EDITORIAL ===== */}
      <section className="grid md:grid-cols-2">
        <ScrollReveal direction="left" className="relative aspect-square md:aspect-auto min-h-[400px] overflow-hidden">
          <Image src="/images/collection-2.jpg" alt="Premium Kidswear" fill className="object-cover" sizes="50vw" />
        </ScrollReveal>
        <ScrollReveal direction="right" className="bg-[#f7f7f7] flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-sm">
            <span className="section-label">Elevated Kidswear</span>
            <h2 className="text-[24px] md:text-[30px] font-light tracking-[0.01em] leading-[1.2] mb-5">
              Premium fabrics.<br />Timeless design.<br />Built for play.
            </h2>
            <p className="text-[12px] text-[#777] leading-[1.9] mb-8">
              Every piece is crafted with high-quality, long-lasting fabrics that feel
              luxurious yet durable. Designed to grow with your child&apos;s personality —
              celebrating growth, effort, and everyday wins.
            </p>
            <Link href="/shop" className="btn-primary">Shop Collection</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== BRAND PILLARS ===== */}
      <section className="border-t border-b border-[#e5e5e5]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1"><path d="M12 2L14.09 8.26L20.18 8.27L15.23 12.14L17.09 18.42L12 14.77L6.91 18.42L8.77 12.14L3.82 8.27L9.91 8.26L12 2Z"/></svg>, title: "Premium Quality", sub: "220 GSM combed cotton, bio-washed" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "Timeless Design", sub: "Minimal, season-proof pieces" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1"><path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/></svg>, title: "Easy Returns", sub: "7-day hassle-free policy" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>, title: "Fast Shipping", sub: "Ships within 48 hours" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} className="text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-[11px] tracking-[0.12em] uppercase font-medium mb-1">{item.title}</p>
                <p className="text-[11px] text-[#999] leading-[1.5]">{item.sub}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="px-5 md:px-10 py-14 md:py-20 max-w-[1600px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-10">
            <span className="section-label">@odday.in</span>
            <h2 className="section-title">Follow the Journey</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
          {["/images/insta-1.jpg", "/images/insta-2.jpg", "/images/insta-3.jpg", "/images/insta-4.jpg"].map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <a href="#" className="relative aspect-square overflow-hidden group block">
                <Image src={src} alt="" fill className="object-cover img-zoom" sizes="25vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== SECOND MARQUEE ===== */}
      <Marquee text="Effort — Confidence — Character — Mindset — Growth — Play — Own It" speed={25} />
    </>
  );
}
