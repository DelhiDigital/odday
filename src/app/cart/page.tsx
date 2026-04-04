"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";

const initialCart = [
  { id: "mindset-tee-white", name: "Mindset Oversized Tee", variant: "White / 6-7Y", price: 1299, qty: 1, image: "/images/product-1.jpg" },
  { id: "everyday-shorts-black", name: "Everyday Shorts", variant: "Black / 6-7Y", price: 999, qty: 2, image: "/images/product-2.jpg" },
];

const suggestions = [
  { id: "grow-tee-maroon", name: "Grow Tee", price: 1299, image: "/images/product-3.jpg", colors: ["#711109", "#fff"] },
  { id: "layer-crew-teal", name: "Layer Crew", price: 1799, image: "/images/product-4.jpg", colors: ["#57BCBE", "#1a1a1a"] },
  { id: "play-shorts-olive", name: "Play Shorts", price: 999, image: "/images/product-6.jpg", colors: ["#6b7c3e", "#1a1a1a"] },
  { id: "character-tee-sand", name: "Character Tee", price: 1299, image: "/images/product-7.jpg", colors: ["#d4b896", "#fff"] },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 1499 ? 0 : 99;
  const total = subtotal + shipping;
  const freeShippingRemaining = Math.max(0, 1499 - subtotal);

  if (cart.length === 0) {
    return (
      <div className="text-center py-28 px-5">
        <div className="mb-6">
          <svg className="mx-auto" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="0.8">
            <path d="M4 7h16l-1.5 10H5.5L4 7z" /><path d="M9 7V5a3 3 0 016 0v2" />
          </svg>
        </div>
        <h1 className="text-[18px] tracking-[0.06em] font-light mb-2">Your bag is empty</h1>
        <p className="text-[12px] text-[#999] mb-8">Discover our collection and find your favorites.</p>
        <Link href="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-8 md:py-14">
      <h1 className="text-[16px] md:text-[20px] tracking-[0.08em] uppercase font-light mb-2">
        Shopping Bag
      </h1>
      <p className="text-[11px] text-[#999] mb-8">{cart.reduce((s, i) => s + i.qty, 0)} items</p>

      {/* Free Shipping Progress */}
      {freeShippingRemaining > 0 && (
        <div className="mb-8 p-4 bg-[#fdf8f5] border border-[#f0e0d0] rounded-sm">
          <p className="text-[11px] text-[#A52019] mb-2">Add ₹{freeShippingRemaining.toLocaleString()} more for free shipping</p>
          <div className="w-full h-1 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#A52019] rounded-full transition-all duration-700"
              style={{ width: `${Math.min(100, (subtotal / 1499) * 100)}%` }}
            />
          </div>
        </div>
      )}
      {freeShippingRemaining === 0 && (
        <div className="mb-8 p-3 bg-[#f0f8f1] border border-[#d0e8d0] rounded-sm">
          <p className="text-[11px] text-[#2d7d3a] flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
            You qualify for free shipping!
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-[1fr_340px] gap-8 md:gap-14">
        {/* Items */}
        <div>
          {cart.map((item, i) => (
            <div key={item.id} className="flex gap-4 py-5 border-b border-[#e5e5e5] animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <Link href={`/product/${item.id}`} className="relative w-[90px] h-[120px] bg-[#f5f5f5] shrink-0 overflow-hidden group">
                <Image src={item.image} alt={item.name} fill className="object-cover img-zoom" sizes="90px" />
              </Link>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/product/${item.id}`} className="text-[12px] hover:text-[#A52019] transition-colors">{item.name}</Link>
                      <p className="text-[11px] text-[#999] mt-0.5">{item.variant}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[#bbb] hover:text-[#A52019] transition-colors p-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-[#e5e5e5] rounded-sm">
                    <button onClick={() => updateQty(item.id, -1)} className="w-9 h-9 flex items-center justify-center text-[13px] hover:bg-[#f5f5f5] transition-colors">−</button>
                    <span className="w-9 h-9 flex items-center justify-center text-[11px] font-medium border-x border-[#e5e5e5]">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-9 h-9 flex items-center justify-center text-[13px] hover:bg-[#f5f5f5] transition-colors">+</button>
                  </div>
                  <span className="text-[13px] font-medium">₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="md:sticky md:top-[80px] md:self-start">
          <div className="bg-[#f7f7f7] p-6 md:p-8 rounded-sm">
            <h2 className="text-[11px] tracking-[0.18em] uppercase mb-6 font-medium">Order Summary</h2>
            <div className="space-y-3 text-[12px] border-b border-[#e5e5e5] pb-5 mb-5">
              <div className="flex justify-between"><span className="text-[#777]">Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-[#777]">Shipping</span><span>{shipping === 0 ? <span className="text-[#2d7d3a]">Free</span> : `₹${shipping}`}</span></div>
            </div>
            <div className="flex justify-between text-[14px] font-medium mb-6">
              <span>Total</span><span>₹{total.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-[#999] mb-5">Inclusive of all taxes</p>
            <button className="btn-primary w-full py-4">Proceed to Checkout</button>
            <Link href="/shop" className="block text-center text-[10px] tracking-[0.1em] uppercase text-[#999] hover:text-[#1a1a1a] transition-colors mt-4 link-underline mx-auto w-fit">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <section className="border-t border-[#e5e5e5] mt-16 pt-14">
        <ScrollReveal>
          <span className="section-label">You May Also Like</span>
          <h2 className="section-title mb-8">Complete Your Order</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-4 gap-y-8">
          {suggestions.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <ProductCard {...p} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
