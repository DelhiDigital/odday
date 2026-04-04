import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="max-w-[700px] mx-auto px-5 py-16 md:py-24">
      <ScrollReveal className="text-center mb-14">
        <span className="section-label">Get in Touch</span>
        <h1 className="section-title mb-4">Contact Us</h1>
        <p className="text-[12px] text-[#999] max-w-sm mx-auto leading-[1.7]">
          Have a question about an order, sizing, or just want to say hi? We&apos;d love to hear from you.
        </p>
      </ScrollReveal>

      {/* Contact Info */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-3 gap-4 mb-14 text-center border border-[#e5e5e5] rounded-sm overflow-hidden">
          {[
            { label: "Email", value: "hello@odday.in" },
            { label: "Phone", value: "+91 98765 43210" },
            { label: "Hours", value: "Mon–Sat, 10–6 IST" },
          ].map((item, i) => (
            <div key={item.label} className={`py-6 ${i < 2 ? "border-r border-[#e5e5e5]" : ""}`}>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#A52019] mb-2 font-medium">{item.label}</p>
              <p className="text-[11px]">{item.value}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Form */}
      <ScrollReveal delay={0.2}>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] tracking-[0.15em] uppercase text-[#999] mb-2.5">Name</label>
              <input
                type="text"
                className="w-full border-b border-[#e5e5e5] pb-3 text-[12px] focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent placeholder:text-[#ccc]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.15em] uppercase text-[#999] mb-2.5">Email</label>
              <input
                type="email"
                className="w-full border-b border-[#e5e5e5] pb-3 text-[12px] focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent placeholder:text-[#ccc]"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#999] mb-2.5">Subject</label>
            <select className="w-full border-b border-[#e5e5e5] pb-3 text-[12px] focus:outline-none focus:border-[#1a1a1a] bg-transparent appearance-none text-[#777]">
              <option>Order Inquiry</option>
              <option>Sizing Help</option>
              <option>Returns & Exchanges</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.15em] uppercase text-[#999] mb-2.5">Message</label>
            <textarea
              rows={5}
              className="w-full border-b border-[#e5e5e5] pb-3 text-[12px] focus:outline-none focus:border-[#1a1a1a] resize-none bg-transparent placeholder:text-[#ccc]"
              placeholder="How can we help?"
            />
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
        </form>
      </ScrollReveal>
    </div>
  );
}
