import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";
import MagneticButton from "@/components/MagneticButton";
import DragCarousel from "@/components/DragCarousel";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

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
      {/* ===== HERO — Full viewport, editorial with large brand text ===== */}
      <section className="relative h-[100svh] overflow-hidden bg-[#111]">
        <ParallaxImage src="/images/odday-friends.jpg" alt="ODDAY — First Collection" speed={0.15} className="absolute inset-0 opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Large ODDAY text — SKIMS/ZARA style */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-5">
            <ScrollReveal delay={0.3}>
              <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/70 font-medium mb-6">
                First Collection 2026
              </p>
            </ScrollReveal>
            <TextReveal
              text="ODDAY"
              tag="h1"
              className="display-text text-[18vw] md:text-[14vw] lg:text-[12vw] text-white"
              delay={0.5}
            />
            <ScrollReveal delay={0.9}>
              <p className="text-[12px] md:text-[14px] tracking-[0.08em] text-white/60 font-light mt-4 mb-8 max-w-md mx-auto">
                Elevated Kidswear. Premium Quality. Built for Play.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1.1}>
              <MagneticButton href="/shop" className="inline-block">
                <span className="btn-outline-white">
                  Shop Collection
                </span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-fade-in" style={{ animationDelay: "1.8s" }}>
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
          <div className="w-[1px] h-10 bg-white/15 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/50 absolute animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE DIVIDER ===== */}
      <Marquee text="Mindset is Bigger than Medals" speed={35} />

      {/* ===== EDITORIAL COLLECTION GRID — Zara-inspired ===== */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-[1500px] mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <span className="section-label">Collections</span>
              <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05]">New In</h2>
            </div>
            <Link href="/shop" className="text-[11px] tracking-[0.1em] uppercase font-medium link-underline pb-0.5 hidden md:inline-block">
              View All
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured image */}
          <ScrollReveal className="col-span-2 md:col-span-1 md:row-span-2">
            <Link href="/shop?collection=new" className="editorial-card relative block aspect-[3/4] md:aspect-auto md:h-full bg-[#f5f5f3] overflow-hidden group">
              <Image src="/images/odday-plane.jpg" alt="New Collection" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[20px] md:text-[28px] font-bold tracking-[-0.02em] mb-1">New Drop</p>
                <p className="text-[11px] tracking-[0.08em] uppercase opacity-60">Explore Collection</p>
              </div>
            </Link>
          </ScrollReveal>

          {/* Top right */}
          <ScrollReveal delay={0.1}>
            <Link href="/shop?category=tshirts" className="editorial-card relative block aspect-[4/3] bg-[#f5f5f3] overflow-hidden group">
              <Image src="/images/odday-basketball.jpg" alt="T-Shirts" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[14px] md:text-[16px] font-semibold tracking-[-0.01em]">T-Shirts</p>
              </div>
            </Link>
          </ScrollReveal>

          {/* Bottom right */}
          <ScrollReveal delay={0.2}>
            <Link href="/shop?category=shorts" className="editorial-card relative block aspect-[4/3] bg-[#f5f5f3] overflow-hidden group">
              <Image src="/images/odday-jersey.jpg" alt="Streetwear" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[14px] md:text-[16px] font-semibold tracking-[-0.01em]">Streetwear</p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NEW ARRIVALS — Clean grid ===== */}
      <section className="bg-white">
        <div className="px-4 md:px-8 py-12 md:py-20 max-w-[1500px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <span className="section-label">Just Landed</span>
                <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05]">New Arrivals</h2>
              </div>
              <Link href="/shop?collection=new" className="text-[11px] tracking-[0.1em] uppercase font-medium link-underline pb-0.5 hidden md:inline-block">
                Shop All
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newDropProducts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10 md:hidden">
            <Link href="/shop?collection=new" className="btn-outline text-[10px] px-10">
              View All
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EDITORIAL BANNER — Full bleed with text ===== */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <ParallaxImage src="/images/odday-basketball.jpg" alt="The Philosophy" speed={0.12} className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5 z-10">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-medium block mb-5">The Philosophy</span>
            </ScrollReveal>
            <TextReveal
              text="Childhood is a journey, not a competition."
              tag="h2"
              className="text-[28px] md:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-8"
              delay={0.2}
            />
            <ScrollReveal delay={0.7}>
              <MagneticButton href="/about">
                <span className="btn-outline-white">Our Story</span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== BESTSELLERS ===== */}
      <section className="bg-[#f5f5f3]">
        <div className="px-4 md:px-8 py-12 md:py-20 max-w-[1500px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <span className="section-label">Most Loved</span>
                <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05]">Bestsellers</h2>
              </div>
              <Link href="/shop?sort=best-sellers" className="text-[11px] tracking-[0.1em] uppercase font-medium link-underline pb-0.5 hidden md:inline-block">
                Shop All
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bestSellers.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10 md:hidden">
            <Link href="/shop?sort=best-sellers" className="btn-outline text-[10px] px-10">
              View All
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FABRIC & QUALITY — Premium details section ===== */}
      <section className="bg-white">
        <div className="px-4 md:px-8 py-12 md:py-20 max-w-[1500px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="section-label">Crafted with Care</span>
              <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05]">Premium Basics.</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { image: "/images/odday-knit.jpg", title: "Premium Cotton", desc: "220 GSM long-staple cotton. Soft, breathable, built to last." },
              { image: "/images/odday-folded.jpg", title: "Bio-Washed Fabric", desc: "Pre-shrunk & enzyme-washed for cloud-soft comfort from day one." },
              { image: "/images/odday-coords.jpg", title: "Thoughtful Design", desc: "Every stitch, cut, and detail is intentional. No shortcuts." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="editorial-card group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f3] mb-5">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] mb-1">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#666] leading-[1.7]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-[#e5e5e5] bg-white">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 220, suffix: " GSM", label: "Premium Cotton" },
              { end: 100, suffix: "%", label: "Bio-Washed" },
              { end: 7, suffix: " Day", label: "Easy Returns" },
              { end: 48, suffix: " Hrs", label: "Fast Shipping" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <Counter end={stat.end} suffix={stat.suffix} className="text-[36px] md:text-[48px] font-light block mb-1 tracking-[-0.03em]" />
                <p className="text-[10px] text-[#999] tracking-[0.12em] uppercase font-medium">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPLIT EDITORIAL — Category panels ===== */}
      <section className="grid grid-cols-2">
        <ScrollReveal className="relative aspect-[3/4] overflow-hidden group editorial-card">
          <Link href="/shop?category=hoodies" className="block h-full">
            <Image src="/images/odday-hoodie-boy.jpg" alt="Hoodies" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
              <p className="text-[18px] md:text-[28px] font-bold tracking-[-0.02em]">Hoodies</p>
              <p className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase opacity-50 mt-1">Shop Now</p>
            </div>
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="relative aspect-[3/4] overflow-hidden group editorial-card">
          <Link href="/shop?category=shorts" className="block h-full">
            <Image src="/images/odday-blue-set.jpg" alt="Co-ords" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
              <p className="text-[18px] md:text-[28px] font-bold tracking-[-0.02em]">Co-ords</p>
              <p className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase opacity-50 mt-1">Shop Now</p>
            </div>
          </Link>
        </ScrollReveal>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="bg-white">
        <div className="px-4 md:px-8 py-14 md:py-24 max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f3] editorial-card">
                <Image src="/images/odday-car.jpg" alt="ODDAY Story" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
            <div className="py-4 md:py-8">
              <ScrollReveal>
                <span className="section-label">Our Story</span>
              </ScrollReveal>
              <TextReveal
                text="Children's clothing created with creativity, love, and intention."
                tag="h2"
                className="text-[24px] md:text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6"
                delay={0.15}
              />
              <ScrollReveal delay={0.4}>
                <p className="text-[13px] text-[#666] leading-[1.9] mb-8 max-w-md">
                  We believe childhood is not a competition — it&apos;s a journey. Every piece is crafted using
                  premium, long-lasting fabrics. Designed for kids aged 4–13 who build character, confidence,
                  and everyday wins. Less clutter, more character.
                </p>
                <MagneticButton href="/about">
                  <span className="btn-outline text-[10px] px-10">About ODDAY</span>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM — Clean gallery ===== */}
      <section className="border-t border-[#e5e5e5]">
        <div className="px-4 md:px-8 py-12 md:py-16 max-w-[1500px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="section-label">Follow Us</span>
                <h2 className="text-[24px] md:text-[32px] font-bold tracking-[-0.03em]">@odday.in</h2>
              </div>
              <a href="#" className="text-[11px] tracking-[0.1em] uppercase font-medium link-underline pb-0.5 hidden md:inline-block">
                Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>

        <DragCarousel className="gap-2 md:gap-3 px-4 md:px-8 pb-12 md:pb-16">
          {["/images/odday-skate-girl.jpg", "/images/odday-three-kids.jpg", "/images/odday-skate-boy.jpg", "/images/odday-running.jpg", "/images/odday-car.jpg", "/images/odday-music.jpg"].map((src, i) => (
            <div key={i} className="shrink-0 w-[65vw] md:w-[320px]">
              <a href="#" className="editorial-card relative aspect-square overflow-hidden group block bg-[#f5f5f3]">
                <Image src={src} alt="" fill className="object-cover" sizes="320px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-400 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
          <div className="shrink-0 w-5" />
        </DragCarousel>
      </section>
    </>
  );
}
