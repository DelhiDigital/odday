import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSlideshow from "@/components/HeroSlideshow";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import DragCarousel from "@/components/DragCarousel";

const newDropProducts = [
  { id: "mindset-tee-white", name: "Mindset Oversized Tee", price: 1299, originalPrice: 1599, image: "/images/product-1.jpg", tag: "New" },
  { id: "everyday-shorts-black", name: "Everyday Shorts", price: 999, image: "/images/product-2.jpg", tag: "New" },
  { id: "grow-tee-maroon", name: "Spring Layer Jacket", price: 1799, image: "/images/product-3.jpg", tag: "New" },
  { id: "layer-crew-teal", name: "ODDAY Classic Cap", price: 799, image: "/images/product-4.jpg", tag: "New" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO SLIDESHOW ===== */}
      <HeroSlideshow />

      {/* ===== SPLIT CATEGORIES — two portrait images side by side ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[#e5e5e5]">
        <Link href="/shop?category=hoodies" className="relative aspect-[4/5] overflow-hidden group block editorial-card bg-[#f0efed]">
          <Image src="/images/odday-hoodie-boy.jpg" alt="Hoodies" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute bottom-10 md:bottom-14 left-8 md:left-12 text-white">
            <p className="text-[12px] tracking-[0.28em] uppercase text-white/65 font-semibold mb-3">Premium 220 GSM Cotton</p>
            <h3 className="text-[36px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.035em] leading-[0.92] mb-5">
              Built for<br />Play.
            </h3>
            <span className="text-[13px] tracking-[0.14em] uppercase font-bold border-b-2 border-white/60 pb-1.5 inline-block">Shop Hoodies</span>
          </div>
        </Link>
        <Link href="/shop?category=shorts" className="relative aspect-[4/5] overflow-hidden group block editorial-card bg-[#f0efed]">
          <Image src="/images/odday-blue-set.jpg" alt="Co-ords" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute bottom-10 md:bottom-14 left-8 md:left-12 text-white">
            <p className="text-[12px] tracking-[0.28em] uppercase text-white/65 font-semibold mb-3">Everyday Sets</p>
            <h3 className="text-[36px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.035em] leading-[0.92] mb-5">
              Co-ords &<br />Shorts.
            </h3>
            <span className="text-[13px] tracking-[0.14em] uppercase font-bold border-b-2 border-white/60 pb-1.5 inline-block">Shop Co-ords</span>
          </div>
        </Link>
      </section>

      {/* ===== NEW ARRIVALS — End-to-end grid ===== */}
      <section className="bg-white">
        <div className="px-6 md:px-10 lg:px-14 py-16 md:py-24">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <span className="section-label">Just Landed</span>
                <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.035em] leading-[1]">New Arrivals</h2>
              </div>
              <Link href="/shop?collection=new" className="text-[13px] tracking-[0.12em] uppercase font-bold link-underline pb-1 hidden md:inline-block">
                View All
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

          <ScrollReveal className="text-center mt-12 md:hidden">
            <Link href="/shop?collection=new" className="btn-outline text-[12px] px-12 py-4 font-bold">View All</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PHILOSOPHY — Full-bleed editorial ===== */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden group">
        <Image
          src="/images/odday-basketball.jpg"
          alt="The Philosophy"
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 lg:px-14 pb-14 md:pb-20">
            <ScrollReveal>
              <p className="text-[12px] tracking-[0.3em] uppercase text-white/65 font-semibold mb-4">The Philosophy</p>
              <h2 className="text-[44px] md:text-[80px] lg:text-[108px] xl:text-[128px] font-black tracking-[-0.045em] leading-[0.9] text-white mb-8">
                Childhood is<br />a Journey.
              </h2>
              <Link href="/about" className="inline-block text-[13px] tracking-[0.14em] uppercase font-bold text-white border-b-2 border-white/60 pb-1.5 hover:border-white transition-colors">
                Our Story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PREMIUM BASICS — End-to-end ===== */}
      <section className="bg-white">
        <div className="px-6 md:px-10 lg:px-14 py-16 md:py-24">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <span className="section-label">The Details</span>
              <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.035em] leading-[1]">Premium Basics.</h2>
              <p className="text-[15px] md:text-[16px] text-[#555] mt-5 max-w-2xl mx-auto leading-[1.7] font-medium">
                Every piece is crafted using long-staple cotton, bio-washed for softness, and built to last through every adventure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { image: "/images/odday-knit.jpg", title: "220 GSM Cotton", desc: "Premium long-staple cotton. Soft, breathable, durable." },
              { image: "/images/odday-folded.jpg", title: "Bio-Washed", desc: "Pre-shrunk & enzyme-washed. Cloud-soft from day one." },
              { image: "/images/odday-coords.jpg", title: "Thoughtful Fits", desc: "Every stitch, cut, and detail is intentional." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <Link href="/shop" className="editorial-card group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f3] mb-5">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[24px] md:text-[30px] font-black tracking-[-0.025em]">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#555] leading-[1.65] font-medium">{item.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR — End-to-end ===== */}
      <section className="border-y border-[#e5e5e5] bg-[#f5f5f3]">
        <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 220, suffix: " GSM", label: "Premium Cotton" },
              { end: 100, suffix: "%", label: "Bio-Washed" },
              { end: 7, suffix: " Day", label: "Easy Returns" },
              { end: 48, suffix: " Hrs", label: "Fast Shipping" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <Counter end={stat.end} suffix={stat.suffix} className="text-[44px] md:text-[64px] font-black block mb-2 tracking-[-0.04em] text-[#111]" />
                <p className="text-[12px] text-[#555] tracking-[0.14em] uppercase font-bold">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY — full-bleed image ===== */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden group">
        <Image
          src="/images/odday-car.jpg"
          alt="Our Story"
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[12px] tracking-[0.3em] uppercase text-white/65 font-semibold block mb-5">Our Story</span>
              <h2 className="text-[40px] md:text-[72px] lg:text-[96px] font-black tracking-[-0.045em] leading-[0.9] text-white mb-6">
                Less Clutter.<br />More Character.
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.7] mb-10 max-w-lg mx-auto font-medium">
                Designed for kids aged 4–13 who build confidence and everyday wins.
              </p>
              <Link href="/about" className="inline-block text-[13px] tracking-[0.14em] uppercase font-bold text-white border-b-2 border-white/60 pb-1.5 hover:border-white transition-colors">
                About ODDAY
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM — End-to-end ===== */}
      <section className="bg-white">
        <div className="px-6 md:px-10 lg:px-14 py-14 md:py-20">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="section-label">Follow Us</span>
                <h2 className="text-[32px] md:text-[48px] font-black tracking-[-0.035em]">@odday.in</h2>
              </div>
              <a href="#" className="text-[13px] tracking-[0.12em] uppercase font-bold link-underline pb-1 hidden md:inline-block">
                Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>

        <DragCarousel className="gap-2 md:gap-3 px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
          {["/images/odday-skate-girl.jpg", "/images/odday-three-kids.jpg", "/images/odday-skate-boy.jpg", "/images/odday-running.jpg", "/images/odday-car.jpg", "/images/odday-music.jpg"].map((src, i) => (
            <div key={i} className="shrink-0 w-[65vw] md:w-[360px]">
              <a href="#" className="editorial-card relative aspect-square overflow-hidden group block bg-[#f5f5f3]">
                <Image src={src} alt="" fill className="object-cover" sizes="360px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-400 flex items-center justify-center">
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

      {/* ===== MARQUEE ===== */}
      <Marquee text="Elevated Kidswear — Premium Quality — Built for Play" speed={35} />
    </>
  );
}
