import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Shop: [
    { name: 'All Coffee', href: '/product' },
    { name: 'Dark Roasts', href: '/product' },
    { name: 'Medium Roasts', href: '/product' },
    { name: 'Coffee Blends', href: '/product' },
  ],
  About: [
    { name: 'Our Story', href: '/about' },
    { name: 'Roasting Process', href: '/about' },
    { name: 'Sustainability', href: '/about' },
  ],
  Help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Brewing Guides', href: '/about' },
    { name: 'FAQ', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3e2723] via-[#4e342e] to-[#3e2723] text-[#efebe9] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/images/joba images/patterns-02-.png")',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#795548] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8d6e63] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <div className="relative h-24 w-auto min-w-[320px]">
                <Image 
                  src="/images/joba images/logos/joba coffee branding-02.png" 
                  alt="Joba Coffee Logo" 
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                  sizes="320px"
                />
              </div>
            </Link>
            <p className="text-[#d7ccc8] text-sm leading-relaxed">
              Crafting exceptional coffee roasts since 2015. 
              Small batches, sustainable sourcing, perfect every time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-[#5d4037]/50 hover:bg-[#795548] rounded-full transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-[#d4a574]">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#d7ccc8] hover:text-[#efebe9] text-sm transition-colors hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#8d6e63]/30">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-[#795548] to-[#6d4c41] rounded-lg shadow-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[#a1887f]">Visit Us</h4>
              <p className="text-sm text-[#d7ccc8]">Zoobe Street, Mogadishu</p>
              <p className="text-sm text-[#d7ccc8]">Banadir, Somalia</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-[#795548] to-[#6d4c41] rounded-lg shadow-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[#a1887f]">Call Us</h4>
              <p className="text-sm text-[#d7ccc8]">+252 (614) 462979</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-[#795548] to-[#6d4c41] rounded-lg shadow-lg">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[#a1887f]">Hours</h4>
              <p className="text-sm text-[#d7ccc8]">Mon-Sun: 7am-9pm</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#8d6e63]/30">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#a1887f]">Stay Brewed In</h3>
              <p className="text-[#d7ccc8] text-sm">
                Subscribe to our newsletter for exclusive offers and brewing tips.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-[#3e2723]/50 border border-[#8d6e63] rounded-lg text-[#efebe9] placeholder-[#a1887f]/50 focus:outline-none focus:ring-2 focus:ring-[#795548]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#795548] to-[#6d4c41] hover:from-[#6d4c41] hover:to-[#5d4037] text-[#efebe9] font-medium rounded-lg transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#8d6e63]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#d7ccc8] text-sm">
              © {new Date().getFullYear()} Joba Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#d7ccc8] hover:text-[#efebe9] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#d7ccc8] hover:text-[#efebe9] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#d7ccc8] hover:text-[#efebe9] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}