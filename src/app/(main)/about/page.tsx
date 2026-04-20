import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image src="/images/odday-music.jpg" alt="About ODDAY" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex items-end px-5 md:px-10 pb-12 md:pb-16 max-w-[1600px] mx-auto">
          <div>
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/60 block mb-3">Our Story</span>
            <h1 className="text-[32px] md:text-[48px] text-white font-light tracking-[0.02em] leading-[1.1]">About ODDAY</h1>
          </div>
        </div>
      </section>

      <Marquee text="Elevated Kidswear — Premium Quality — Mindset over Medals — Built for Play" />

      {/* Intro */}
      <section className="max-w-[720px] mx-auto px-5 py-16 md:py-24 text-center">
        <ScrollReveal>
          <span className="section-label">Elevated Kidswear</span>
          <h2 className="section-title mb-8">
            Premium kids streetwear for ages 4–13.
          </h2>
          <p className="text-[13px] text-[#666] leading-[2] mb-5">
            ODDAY blends western silhouette aesthetics with elevated minimal design. We empower kids
            to style, layer, and play effortlessly. Every piece is crafted using high-quality, long-lasting
            fabrics that feel luxurious yet durable.
          </p>
          <p className="text-[13px] text-[#999] leading-[2]">
            The designs are timeless rather than trend-driven, allowing versatility across seasons.
            ODDAY believes in building a wardrobe that grows with a child&apos;s personality.
          </p>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="grid md:grid-cols-2">
        <ScrollReveal direction="left" className="relative aspect-square md:aspect-auto min-h-[400px] overflow-hidden">
          <Image src="/images/odday-three-kids.jpg" alt="Philosophy" fill className="object-cover" sizes="50vw" />
        </ScrollReveal>
        <ScrollReveal direction="right" className="bg-[#1a1a1a] text-white flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-sm">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#57BCBE] block mb-4">Brand Philosophy</span>
            <h2 className="text-[24px] md:text-[30px] font-light leading-[1.2] mb-6">
              Childhood is not a competition. It is a journey.
            </h2>
            <p className="text-[12px] text-white/50 leading-[1.9]">
              With ODDAY, we aim to reflect the evolving mindsets of Gen-Z kids by creating outfits
              that truly respect modern childhood. Our approach to style is rooted in comfort,
              confidence, and consciousness. At its core, ODDAY stands for the idea that kids
              deserve the same level of design, quality, and intention as adults.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal delay={0}>
            <span className="section-label">Mission</span>
            <h3 className="text-[18px] font-light tracking-[0.03em] mb-4">What We Do</h3>
            <p className="text-[13px] text-[#666] leading-[2]">
              To design premium streetwear inclined outfits through bold yet timeless designs,
              thoughtful fits, and unbound comfort — creating clothes kids love to live in and
              parents trust to choose.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <span className="section-label">Vision</span>
            <h3 className="text-[18px] font-light tracking-[0.03em] mb-4">Where We&apos;re Going</h3>
            <p className="text-[13px] text-[#666] leading-[2]">
              To become India&apos;s most trusted premium kids streetwear brand that reshapes how childhood
              style is perceived — focusing on mindset, comfort, and character over competition and comparison.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f7f7]">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              { title: "Effort Over Trophies", desc: "We celebrate the process, not just outcomes. Every child's effort matters." },
              { title: "Growth Over Comparison", desc: "Confidence is built daily, not measured against others." },
              { title: "Character Over Trends", desc: "Timeless design that lets personality shine through." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.12} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center">
                  <span className="text-[#9E1528] text-[16px] font-light">0{i + 1}</span>
                </div>
                <h3 className="text-[14px] tracking-[0.06em] mb-3">{v.title}</h3>
                <p className="text-[12px] text-[#999] leading-[1.8]">{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal className="text-center py-16 md:py-24 px-5">
        <span className="section-label">Ready?</span>
        <h2 className="section-title mb-8">Discover the First Collection</h2>
        <Link href="/shop" className="btn-primary">Shop Now</Link>
      </ScrollReveal>
    </>
  );
}
