import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PuzzleDeco from "@/components/PuzzleDeco";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";
import MagneticButton from "@/components/MagneticButton";
import DragCarousel from "@/components/DragCarousel";
import Counter from "@/components/Counter";

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
      {/* ===== HERO — Parallax with text reveal ===== */}
      <section className="relative h-[100svh] overflow-hidden">
        <ParallaxImage src="/images/odday-friends.jpg" alt="ODDAY — New Drop" speed={0.2} className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-10 md:bottom-16 left-5 md:left-10 text-white max-w-lg z-10">
          <ScrollReveal delay={0.2}>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-light mb-3 opacity-80">
              First Collection 2026
            </p>
          </ScrollReveal>
          <TextReveal
            text="Mindset is Bigger than Medals"
            tag="h1"
            className="text-[32px] md:text-[52px] font-light leading-[1.08] mb-6 text-white"
            style={{ fontFamily: "Georgia, serif" }}
            delay={0.4}
          />
          <ScrollReveal delay={0.8}>
            <MagneticButton href="/shop" className="inline-block">
              <span className="inline-block bg-white text-[11px] tracking-[0.1em] uppercase px-8 py-3.5 rounded-full font-semibold hover:bg-[#A52019] hover:text-white transition-all duration-300 shadow-lg" style={{ color: "#1a1a1a" }}>
                Shop Collection
              </span>
            </MagneticButton>
          </ScrollReveal>
        </div>
        {/* Scroll line */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
          <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/70 absolute animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL GRID — with tilt hover ===== */}
      <section className="px-5 md:px-10 py-10 md:py-14 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          <ScrollReveal direction="left" className="col-span-2 md:col-span-1 md:row-span-2">
            <Link href="/shop?collection=new" className="relative aspect-[4/5] overflow-hidden rounded-lg group block hover-tilt">
              <Image src="/images/odday-plane.jpg" alt="New Drop" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[13px] tracking-[0.08em] uppercase font-medium">New Drop</p>
                <p className="text-[10px] opacity-60 mt-1">First Collection 2026</p>
              </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link href="/shop?category=tshirts" className="relative aspect-[4/3] overflow-hidden rounded-lg group block hover-tilt">
              <Image src="/images/odday-friends.jpg" alt="T-Shirts" fill className="object-cover img-zoom" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[11px] tracking-[0.08em] uppercase font-medium">T-Shirts</p>
              </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Link href="/shop?category=shorts" className="relative aspect-[4/3] overflow-hidden rounded-lg group block hover-tilt">
              <Image src="/images/odday-jersey.jpg" alt="Streetwear" fill className="object-cover img-zoom" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[11px] tracking-[0.08em] uppercase font-medium">Streetwear</p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NEW DROP — draggable carousel ===== */}
      <section className="py-10 md:py-16">
        <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <TextReveal text="New Drop" tag="h2" className="text-[28px] md:text-[36px]" style={{ fontFamily: "Georgia, serif" }} />
            </div>
          </ScrollReveal>
        </div>

        {/* Drag Carousel — breaks out of container */}
        <DragCarousel className="gap-4 md:gap-5 px-5 md:px-10 pb-4">
          {newDropProducts.map((p) => (
            <div key={p.id} className="shrink-0 w-[70vw] md:w-[280px]">
              <ProductCard {...p} />
            </div>
          ))}
          {/* Extra spacer for scroll end */}
          <div className="shrink-0 w-5 md:w-10" />
        </DragCarousel>

        <div className="text-center mt-6 px-5">
          <MagneticButton href="/shop?collection=new">
            <span className="btn-outline rounded-full text-[10px] px-8">View All New Arrivals</span>
          </MagneticButton>
        </div>
      </section>

      {/* ===== WIDE EDITORIAL — parallax ===== */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <ParallaxImage src="/images/odday-basketball.jpg" alt="Campaign" speed={0.15} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex items-center px-5 md:px-10 max-w-[1400px] mx-auto">
          <div className="text-white max-w-md">
            <ScrollReveal delay={0.1}>
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-3">The Philosophy</p>
            </ScrollReveal>
            <TextReveal
              text="Childhood is a journey, not a competition."
              tag="h2"
              className="text-[24px] md:text-[38px] leading-[1.12] mb-6 text-white"
              style={{ fontFamily: "Georgia, serif" }}
              delay={0.2}
            />
            <ScrollReveal delay={0.6}>
              <MagneticButton href="/about">
                <span className="btn-outline border-white/40 text-white hover:bg-white hover:text-[#1a1a1a] rounded-full">Our Story</span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== BESTSELLERS — staggered grid ===== */}
      <section className="bg-[#f5f4f0]">
        <div className="px-5 md:px-10 py-12 md:py-16 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <TextReveal text="Bestsellers" tag="h2" className="text-[28px] md:text-[36px]" style={{ fontFamily: "Georgia, serif" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {bestSellers.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-8">
            <MagneticButton href="/shop?sort=best-sellers">
              <span className="btn-outline rounded-full text-[10px] px-8">View All Bestsellers</span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRAND STORY — with text reveal quote ===== */}
      <section className="px-5 md:px-10 py-14 md:py-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-14 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden hover-tilt">
              <Image src="/images/odday-car.jpg" alt="ODDAY Story" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </ScrollReveal>
          <div className="py-4 md:py-8">
            <ScrollReveal>
              <span className="section-label">Our Story</span>
            </ScrollReveal>
            <TextReveal
              text="At ODDAY, you'll find children's clothing created with creativity, love, and intention."
              tag="h2"
              className="text-[24px] md:text-[32px] mb-6 leading-[1.3]"
              style={{ fontFamily: "Georgia, serif" }}
              delay={0.15}
            />
            <ScrollReveal delay={0.4}>
              <p className="text-[13px] text-[#777] leading-[1.9] mb-8">
                We believe childhood is not a competition — it&apos;s a journey. Every piece is crafted using
                premium, long-lasting fabrics. Designed for kids aged 4–13 who build character, confidence,
                and everyday wins. Less clutter, more character.
              </p>
              <MagneticButton href="/about">
                <span className="btn-outline rounded-full text-[10px] px-8">About ODDAY</span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== STATS — animated counters ===== */}
      <section className="border-y border-[#e8e8e8] bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 220, suffix: " GSM", label: "Premium Cotton" },
              { end: 100, suffix: "%", label: "Bio-Washed Fabric" },
              { end: 7, suffix: " Day", label: "Easy Returns" },
              { end: 48, suffix: " Hrs", label: "Fast Shipping" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="hover-bounce">
                <Counter end={stat.end} suffix={stat.suffix} className="text-[32px] md:text-[42px] font-light block mb-1 text-shimmer" />
                <p className="text-[11px] text-[#999] tracking-[0.08em] uppercase">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPLIT EDITORIAL — parallax pair ===== */}
      <section className="grid grid-cols-2 gap-1 md:gap-2">
        <ScrollReveal direction="left" className="relative aspect-[3/4] overflow-hidden group">
          <Image src="/images/odday-hoodie-boy.jpg" alt="Hoodies" fill className="object-cover img-zoom" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <p className="text-[12px] md:text-[14px] tracking-[0.06em] uppercase font-medium">Hoodies</p>
            <p className="text-[9px] md:text-[10px] opacity-50 mt-0.5">Co-ord Sets</p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="relative aspect-[3/4] overflow-hidden group">
          <Image src="/images/odday-blue-set.jpg" alt="Shorts" fill className="object-cover img-zoom" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <p className="text-[12px] md:text-[14px] tracking-[0.06em] uppercase font-medium">Shorts</p>
            <p className="text-[9px] md:text-[10px] opacity-50 mt-0.5">Everyday Sets</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== PUZZLE DIVIDER ===== */}
      <section className="relative border-y border-[#e8e8e8] py-6 md:py-8 bg-[#f5f4f0] overflow-hidden">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          <PuzzleDeco size={24} rotate={-15} opacity={0.12} />
          <p className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-center" style={{ fontFamily: "Georgia, serif" }}>Elevated Kidswear — Premium Quality — Built for Play</p>
          <PuzzleDeco size={24} rotate={20} opacity={0.12} />
        </div>
        <PuzzleDeco size={50} rotate={-30} opacity={0.04} className="absolute -left-4 top-1/2 -translate-y-1/2" />
        <PuzzleDeco size={60} rotate={45} opacity={0.04} className="absolute -right-4 top-1/2 -translate-y-1/2" />
      </section>

      {/* ===== CONFIDENCE BANNER — full width parallax ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <ParallaxImage src="/images/odday-folded.jpg" alt="Confidence in every detail" speed={0.12} className="absolute inset-0" />
      </section>

      {/* ===== INSTAGRAM — draggable ===== */}
      <section className="py-12 md:py-16">
        <div className="px-5 md:px-10 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <TextReveal text="@odday.in" tag="h2" className="text-[24px] md:text-[30px]" style={{ fontFamily: "Georgia, serif" }} />
              <p className="text-[12px] text-[#999] mt-2">Follow the journey</p>
            </div>
          </ScrollReveal>
        </div>

        <DragCarousel className="gap-2 md:gap-3 px-5 md:px-10 pb-4">
          {["/images/odday-skate-girl.jpg", "/images/odday-three-kids.jpg", "/images/odday-skate-boy.jpg", "/images/odday-running.jpg", "/images/odday-car.jpg", "/images/odday-music.jpg"].map((src, i) => (
            <div key={i} className="shrink-0 w-[65vw] md:w-[300px]">
              <a href="#" className="relative aspect-square overflow-hidden rounded-lg group block hover-tilt">
                <Image src={src} alt="" fill className="object-cover img-zoom" sizes="300px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-400 flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
          <div className="shrink-0 w-5" />
        </DragCarousel>
      </section>

      {/* ===== PUZZLE FOOTER DIVIDER ===== */}
      <section className="relative border-y border-[#e8e8e8] py-6 md:py-8 bg-[#f5f4f0] overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {["Effort", "Confidence", "Character", "Mindset", "Growth", "Play"].map((word, i) => (
            <span key={word} className="flex items-center gap-4 md:gap-8">
              <span className="text-[11px] tracking-[0.15em] uppercase" style={{ fontFamily: "Georgia, serif" }}>{word}</span>
              {i < 5 && <PuzzleDeco size={14} rotate={i * 30} opacity={0.2} color="#A52019" />}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
