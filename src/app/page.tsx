import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

const newDropProducts = [
  { id: "mindset-tee-white", name: "Mindset Oversized Tee", price: 1299, originalPrice: 1599, image: "/images/product-1.jpg", tag: "New" },
  { id: "everyday-shorts-black", name: "Everyday Shorts", price: 999, image: "/images/product-2.jpg", tag: "New" },
  { id: "grow-tee-maroon", name: "Spring Layer Jacket", price: 1799, image: "/images/product-3.jpg", tag: "New" },
  { id: "layer-crew-teal", name: "ODDAY Classic Cap", price: 799, image: "/images/product-4.jpg", tag: "New" },
];

const bestSellers = [
  { id: "confidence-hoodie", name: "Confidence Hoodie", price: 2199, originalPrice: 2599, image: "/images/product-5.jpg", hoverImage: "/images/product-5-hover.jpg", tag: "Best Seller" },
  { id: "play-shorts-olive", name: "Play Skater Jeans", price: 1499, image: "/images/product-6.jpg", hoverImage: "/images/product-6-hover.jpg" },
  { id: "character-tee-sand", name: "Character Long Tee", price: 1299, image: "/images/product-7.jpg", hoverImage: "/images/product-7-hover.jpg" },
  { id: "effort-joggers-gray", name: "Effort Sweatshirt", price: 1599, originalPrice: 1899, image: "/images/product-8.jpg", hoverImage: "/images/product-8-hover.jpg" },
  { id: "bobbie-pants", name: "Bobbie Pants", price: 1399, image: "/images/product-9.jpg", hoverImage: "/images/product-9-hover.jpg" },
  { id: "kind-people-crew", name: "Mindset Crew", price: 1799, image: "/images/product-10.jpg", hoverImage: "/images/product-10-hover.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO — Full width, your editorial image ===== */}
      <section className="relative">
        <div className="relative aspect-[4/5] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/odday-friends.jpg"
            alt="ODDAY — New Drop"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 md:bottom-12 left-5 md:left-10 text-white">
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-light mb-2 opacity-80">First Collection 2026</p>
            <h1 className="text-[28px] md:text-[48px] font-light leading-[1.1] mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Mindset is Bigger<br />than Medals
            </h1>
            <Link href="/shop" className="inline-block bg-white text-[#1a1a1a] text-[11px] tracking-[0.1em] uppercase px-8 py-3.5 rounded-full font-semibold hover:bg-[#A52019] hover:text-white transition-all duration-300 shadow-md">
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL GRID — 3 images, Sommer/H&M style ===== */}
      <section className="px-5 md:px-10 py-8 md:py-12 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {/* Large left */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image src="/images/odday-plane.jpg" alt="Editorial" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[12px] md:text-[13px] tracking-[0.08em] uppercase font-medium">New Drop</p>
                <p className="text-[10px] opacity-70 mt-0.5">First Collection 2026</p>
              </div>
            </div>
            {/* Top right */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <Image src="/images/odday-friends.jpg" alt="Editorial" fill className="object-cover img-zoom" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[11px] tracking-[0.08em] uppercase font-medium">T-Shirts</p>
              </div>
            </div>
            {/* Bottom right */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <Image src="/images/odday-jersey.jpg" alt="Editorial" fill className="object-cover img-zoom" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[11px] tracking-[0.08em] uppercase font-medium">Streetwear</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== NEW DROP ===== */}
      <section className="px-5 md:px-10 py-10 md:py-16 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[28px] md:text-[36px]" style={{ fontFamily: "Georgia, serif" }}>New Drop</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {newDropProducts.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <ProductCard {...p} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-8">
          <Link href="/shop?collection=new" className="btn-outline rounded-full text-[10px] px-8">View All New Arrivals</Link>
        </ScrollReveal>
      </section>

      {/* ===== WIDE EDITORIAL BANNER ===== */}
      <ScrollReveal>
        <section className="relative aspect-[16/7] md:aspect-[21/7] overflow-hidden">
          <Image src="/images/odday-basketball.jpg" alt="Campaign" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center px-5 md:px-10 max-w-[1400px] mx-auto">
            <div className="text-white max-w-md">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2">The Philosophy</p>
              <h2 className="text-[24px] md:text-[36px] leading-[1.15] mb-5" style={{ fontFamily: "Georgia, serif" }}>
                Childhood is a journey, not a competition.
              </h2>
              <Link href="/about" className="btn-outline border-white/40 text-white hover:bg-white hover:text-[#1a1a1a] rounded-full">
                Our Story
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ===== BESTSELLERS ===== */}
      <section className="bg-[#f5f4f0]">
        <div className="px-5 md:px-10 py-12 md:py-16 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-[28px] md:text-[36px]" style={{ fontFamily: "Georgia, serif" }}>Bestsellers</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {bestSellers.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-8">
            <Link href="/shop?sort=best-sellers" className="btn-outline rounded-full text-[10px] px-8">View All Bestsellers</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRAND STORY — Image + Quote ===== */}
      <section className="px-5 md:px-10 py-12 md:py-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-14 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src="/images/odday-car.jpg" alt="ODDAY Story" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="py-4 md:py-8">
              <span className="section-label">Our Story</span>
              <h2 className="text-[26px] md:text-[34px] mb-6 leading-[1.25]" style={{ fontFamily: "Georgia, serif" }}>
                &ldquo;At ODDAY, you&rsquo;ll find children&rsquo;s clothing created with creativity, love, and intention.&rdquo;
              </h2>
              <p className="text-[13px] text-[#777] leading-[1.9] mb-4">
                We believe childhood is not a competition — it&rsquo;s a journey. Every piece is crafted using
                premium, long-lasting fabrics that feel luxurious yet durable. Designed for kids aged 4–13
                who build character, confidence, and everyday wins.
              </p>
              <p className="text-[13px] text-[#999] leading-[1.9] mb-8">
                ODDAY celebrates growth, effort, and the power of a good outfit. Less clutter, more character.
              </p>
              <Link href="/about" className="btn-outline rounded-full text-[10px] px-8">About ODDAY</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== SPLIT EDITORIAL — Two images side by side ===== */}
      <section className="grid grid-cols-2 gap-1 md:gap-2">
        <ScrollReveal direction="left" className="relative aspect-[3/4] overflow-hidden">
          <Image src="/images/odday-hoodie-boy.jpg" alt="Hoodie" fill className="object-cover img-zoom" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <p className="text-[11px] md:text-[13px] tracking-[0.08em] uppercase font-medium">Hoodies</p>
            <p className="text-[9px] md:text-[10px] opacity-60 mt-0.5">Co-ord Sets</p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="relative aspect-[3/4] overflow-hidden">
          <Image src="/images/odday-blue-set.jpg" alt="Blue Set" fill className="object-cover img-zoom" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <p className="text-[11px] md:text-[13px] tracking-[0.08em] uppercase font-medium">Shorts</p>
            <p className="text-[9px] md:text-[10px] opacity-60 mt-0.5">Everyday Sets</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee text="Elevated Kidswear — Premium Quality — Ages 4 to 13 — Mindset over Medals — Built for Play" />

      {/* ===== VALUES ===== */}
      <section className="px-5 md:px-10 py-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1.2"><path d="M12 2L14.09 8.26L20.18 8.27L15.23 12.14L17.09 18.42L12 14.77L6.91 18.42L8.77 12.14L3.82 8.27L9.91 8.26L12 2Z"/></svg>, title: "Premium Quality", sub: "220 GSM combed cotton, bio-washed" },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "Timeless Design", sub: "Minimal pieces that last seasons" },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1.2"><path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/></svg>, title: "Easy Returns", sub: "7-day hassle-free return policy" },
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A52019" strokeWidth="1.2"><rect x="2" y="7" width="15" height="13" rx="1"/><path d="M17 11h3l2 3v4h-5"/><circle cx="7.5" cy="20" r="1.5" fill="#A52019"/><circle cx="19.5" cy="20" r="1.5" fill="#A52019"/></svg>, title: "Fast Shipping", sub: "Ships within 48 hours across India" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className="text-center py-6 px-4 rounded-lg bg-[#f5f4f0]">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-[12px] tracking-[0.06em] font-medium mb-1">{item.title}</p>
              <p className="text-[11px] text-[#999] leading-[1.5]">{item.sub}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CONFIDENCE BANNER — Full width editorial ===== */}
      <ScrollReveal>
        <section className="px-5 md:px-10 pb-10 md:pb-16 max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/7] rounded-lg overflow-hidden">
            <Image src="/images/odday-folded.jpg" alt="Confidence in every detail" fill className="object-cover" sizes="100vw" />
          </div>
        </section>
      </ScrollReveal>

      {/* ===== INSTAGRAM ===== */}
      <section className="px-5 md:px-10 py-10 md:py-14 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-[24px] md:text-[30px]" style={{ fontFamily: "Georgia, serif" }}>@odday.in</h2>
            <p className="text-[12px] text-[#999] mt-1">Follow the journey</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {["/images/odday-skate-girl.jpg", "/images/odday-three-kids.jpg", "/images/odday-skate-boy.jpg", "/images/odday-running.jpg"].map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <a href="#" className="relative aspect-square overflow-hidden rounded-lg group block">
                <Image src={src} alt="" fill className="object-cover img-zoom" sizes="25vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 flex items-center justify-center rounded-lg">
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
