import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5]">
      {/* Newsletter — end-to-end */}
      <div className="bg-[#111] text-white">
        <div className="px-6 md:px-10 lg:px-14 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[12px] tracking-[0.3em] uppercase text-white/55 font-bold block mb-4">Stay Connected</span>
            <h3 className="text-[36px] md:text-[52px] font-black tracking-[-0.035em] leading-[1] mb-4">Join the ODDAY World</h3>
            <p className="text-[15px] text-white/55 leading-[1.7] font-medium">Be first for new collections, exclusive drops, and early access.</p>
          </div>
          <div>
            <div className="flex max-w-[520px] md:ml-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b-2 border-white/30 bg-transparent pb-3 text-[14px] tracking-[0.02em] focus:outline-none placeholder:text-white/30 text-white focus:border-white transition-colors font-medium"
              />
              <button className="text-[13px] tracking-[0.16em] uppercase ml-6 pb-3 border-b-2 border-transparent hover:border-white transition-colors font-bold text-white/80 hover:text-white">
                Subscribe
              </button>
            </div>
            <p className="text-[12px] text-white/25 mt-4 max-w-[520px] md:ml-auto font-medium">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </div>

      {/* Links — end-to-end */}
      <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logos/ODDAY Logomark.png" alt="ODDAY" width={32} height={32} />
              <Image src="/logos/ODDAY Wordmark.png" alt="ODDAY" width={96} height={24} />
            </div>
            <p className="text-[14px] text-[#666] leading-[1.7] mb-6 font-medium">
              Premium kids streetwear designed for ages 4–13. Elevated, minimal, built for play.
            </p>
            <div className="flex gap-5">
              {["Instagram", "Facebook"].map((social) => (
                <a key={social} href="#" className="text-[12px] tracking-[0.12em] uppercase text-[#555] hover:text-[#111] transition-colors font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.2em] uppercase mb-5 font-black">Shop</h4>
            <ul className="space-y-3">
              {["All Products", "New Arrivals", "T-Shirts", "Shorts", "Hoodies"].map((item) => (
                <li key={item}><Link href="/shop" className="text-[14px] text-[#555] hover:text-[#111] transition-colors font-medium">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.2em] uppercase mb-5 font-black">Help</h4>
            <ul className="space-y-3">
              {["FAQ", "Size Guide", "Shipping Policy", "Returns & Exchange", "Track Order"].map((item) => (
                <li key={item}><Link href="#" className="text-[14px] text-[#555] hover:text-[#111] transition-colors font-medium">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.2em] uppercase mb-5 font-black">Company</h4>
            <ul className="space-y-3">
              {["Our Story", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link href={item === "Our Story" ? "/about" : item === "Contact Us" ? "/contact" : "#"} className="text-[14px] text-[#555] hover:text-[#111] transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.2em] uppercase mb-5 font-black">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@odday.in" className="text-[14px] text-[#555] hover:text-[#111] transition-colors font-medium">hello@odday.in</a></li>
              <li><span className="text-[14px] text-[#555] font-medium">+91 98765 43210</span></li>
              <li><span className="text-[14px] text-[#555] font-medium">Mon–Sat, 10am–6pm</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom — end-to-end */}
      <div className="border-t border-[#f0f0f0]">
        <div className="px-6 md:px-10 lg:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#aaa] font-medium">&copy; 2026 ODDAY. All rights reserved.</p>
          <div className="flex gap-6 text-[12px] text-[#aaa] font-medium">
            <Link href="#" className="hover:text-[#555] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#555] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#555] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
