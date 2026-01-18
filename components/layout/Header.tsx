"use client";
import { Menu, X, Phone, Clock } from 'lucide-react';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/product' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-[#3e2723] via-[#5d4037] to-[#4e342e] shadow-xl' 
        : 'bg-gradient-to-r from-[#3e2723]/98 via-[#5d4037]/98 to-[#4e342e]/98 backdrop-blur-lg'
    } border-b border-[#8d6e63]/50 animate-slideDown`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 transition-all duration-300">
          {/* Logo with Name - Responsive sizing for mobile */}
          <Link href="/" className="flex items-center group animate-fadeIn hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="relative h-12 w-auto min-w-[180px] sm:h-16 sm:min-w-[220px] md:h-20 md:min-w-[260px] lg:h-24 lg:min-w-[320px] transition-all duration-300">
              <Image 
                src="/images/joba images/logos/joba coffee branding-06.png" 
                alt="Zeytun Restaurant Logo" 
                fill
                className="object-contain object-left filter brightness-0 invert drop-shadow-lg"
                priority
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 320px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-[#efebe9] hover:text-[#d7ccc8] transition-all duration-300 relative group animate-fadeIn hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a1887f] group-hover:w-full transition-all duration-300 ease-out" />
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            {/* Contact Info - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-6 animate-fadeIn">
              <a href="tel:+252614462979" className="flex items-center space-x-2 text-[#efebe9] hover:text-[#d7ccc8] transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+252 (614) 462979</span>
              </a>
              <div className="flex items-center space-x-2 text-[#d7ccc8]">
                <Clock className="w-4 h-4" />
                <span className="text-sm">7am - 9pm</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="p-2.5 text-[#efebe9] hover:text-[#d7ccc8] lg:hidden transition-all duration-300 hover:scale-110 active:scale-95 rounded-lg hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 animate-spin-in" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3e2723]/98 backdrop-blur-lg border-t border-[#8d6e63]/50 animate-slideDown overflow-hidden">
            <div className="px-2 pt-4 pb-4 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3.5 text-base font-semibold text-[#efebe9] hover:text-white hover:bg-[#5d4037]/70 rounded-xl transition-all duration-300 animate-fadeIn transform hover:translate-x-2 hover:scale-[1.02] active:scale-95"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#a1887f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Contact info in mobile menu */}
              <div className="px-4 pt-4 mt-4 border-t border-[#8d6e63]/50 space-y-3 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                <a href="tel:+252614462979" className="flex items-center space-x-3 text-[#d7ccc8] hover:text-[#efebe9] transition-all duration-300 hover:bg-[#5d4037]/30 p-2 rounded-lg">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-medium">+252 (614) 462979</span>
                </a>
                <div className="flex items-center space-x-3 text-[#d7ccc8] p-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Mon-Sun: 7am - 9pm</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}