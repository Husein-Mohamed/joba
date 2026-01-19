import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="full-bleed footer-bg text-white" role="contentinfo">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image src="/images/joba images/WhatsApp Image 2025-12-28 at 12.24.42 PM.jpeg" alt="Joba logo" fill className="object-contain" />
              </div>
              <div>
                <div className="text-lg font-semibold">Joba</div>
                <div className="muted text-sm mt-1">Small-batch roasted coffee. Community first.</div>
              </div>
            </div>

            <p className="mt-4 text-xs muted">© {new Date().getFullYear()} Joba</p>
          </div>

          <div>
            <h4 className="font-semibold">Navigation</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-2 text-sm muted">123 Coffee Lane, YourCity</div>
            <div className="text-sm muted mt-1">Phone: +1 (555) 123-4567</div>
            <div className="text-sm muted mt-1">Email: hello@jobacoffee.example</div>
            <h5 className="font-semibold mt-3">Hours</h5>
            <div className="text-sm muted">Mon–Sun: 7:00 AM – 4:00 PM</div>
          </div>

          <div>
            <h4 className="font-semibold">Stay in touch</h4>
            <p className="muted text-sm mt-2">Subscribe for offers and new roasts.</p>
            <form action="#" className="mt-3 flex flex-col sm:flex-row gap-2">
              <input aria-label="Email" name="email" type="email" placeholder="you@example.com" className="rounded px-3 py-2 text-sm" />
              <button className="rounded bg-[#2b1f16] px-4 py-2 text-sm text-cream">Subscribe</button>
            </form>

            <div className="mt-4">
              <h5 className="font-semibold">Follow</h5>
              <div className="flex gap-3 mt-2 text-sm muted">
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs muted flex flex-col sm:flex-row sm:justify-between gap-3">
          <div>Privacy Policy • Terms of Service</div>
          <div>Built with care — Roastery & Shipping information available on request.</div>
        </div>
      </div>
    </footer>
  );
}

