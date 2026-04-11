import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5]">
      {/* Newsletter */}
      <div className="bg-[#f7f7f7]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A52019] font-medium block mb-2">Stay Connected</span>
            <h3 className="text-[20px] md:text-[24px] font-light tracking-[0.02em] mb-2">Join the ODDAY World</h3>
            <p className="text-[12px] text-[#999] leading-[1.7]">Be the first to know about new collections, exclusive drops and early access.</p>
          </div>
          <div>
            <div className="flex max-w-[450px] md:ml-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b border-[#1a1a1a] bg-transparent pb-3 text-[12px] tracking-[0.03em] focus:outline-none placeholder:text-[#bbb]"
              />
              <button className="text-[10px] tracking-[0.15em] uppercase ml-6 pb-3 border-b border-transparent hover:border-[#1a1a1a] transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-[#bbb] mt-3 max-w-[450px] md:ml-auto">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logos/ODDAY Logomark.png" alt="ODDAY" width={28} height={28} />
              <Image src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={80} height={20} />
            </div>
            <p className="text-[11px] text-[#999] leading-[1.7] mb-4">
              Premium kids streetwear designed for ages 4–13. Elevated, minimal, built for play.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook"].map((social) => (
                <a key={social} href="#" className="text-[10px] text-[#999] hover:text-[#1a1a1a] transition-colors link-underline">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">Shop</h4>
            <ul className="space-y-3">
              {["All Products", "New Arrivals", "T-Shirts", "Shorts", "Hoodies"].map((item) => (
                <li key={item}><Link href="/shop" className="text-[12px] text-[#777] hover:text-[#1a1a1a] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">Help</h4>
            <ul className="space-y-3">
              {["FAQ", "Size Guide", "Shipping Policy", "Returns & Exchange", "Track Order"].map((item) => (
                <li key={item}><Link href="#" className="text-[12px] text-[#777] hover:text-[#1a1a1a] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">Company</h4>
            <ul className="space-y-3">
              {["Our Story", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link href={item === "Our Story" ? "/about" : item === "Contact Us" ? "/contact" : "#"} className="text-[12px] text-[#777] hover:text-[#1a1a1a] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@odday.in" className="text-[12px] text-[#777] hover:text-[#1a1a1a] transition-colors">hello@odday.in</a></li>
              <li><span className="text-[12px] text-[#777]">+91 98765 43210</span></li>
              <li><span className="text-[12px] text-[#777]">Mon–Sat, 10am–6pm</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#f0f0f0]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#bbb]">&copy; 2026 ODDAY. All rights reserved.</p>
          <div className="flex gap-4 text-[10px] text-[#bbb]">
            <Link href="#" className="hover:text-[#999] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#999] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#999] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
