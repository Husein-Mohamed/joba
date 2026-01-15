"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [counts, setCounts] = useState({ items: 0, orders: 0, people: 0 });
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const duration = 1200;
    const start = performance.now();
    const from = { items: 0, orders: 0, people: 0 };
    const to = { items: 50, orders: 20, people: 2000 };

    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setCounts({
        items: Math.floor(from.items + (to.items - from.items) * ease),
        orders: Math.floor(from.orders + (to.orders - from.orders) * ease),
        people: Math.floor(from.people + (to.people - from.people) * ease),
      });
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/joba images/bg-1.jpeg" 
          alt="Coffee background" 
          fill
          className="object-cover animate-zoom-in"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/95 via-[#5d4037]/90 to-[#4e342e]/85 animate-fade-in" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 animate-fadeIn">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
                Discover The Art Of
                <span className="block text-[#d7ccc8] mt-2 animate-slide-up-delay">Perfect Coffee</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#efebe9] leading-relaxed max-w-xl animate-fade-in-delay">
                Experience rich, bold flavors crafted to awaken your senses. We roast
                small batches, partner directly with farmers, and prepare every cup
                with care — from bean to brew.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-2">
              <Link href="/product" className="group">
                <Button className="w-full sm:w-auto bg-[#795548] hover:bg-[#6d4c41] text-white px-8 py-4 text-lg rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
                  <span className="flex items-center justify-center gap-2">
                    View Products
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Button>
              </Link>
              <Link href="/about" className="group">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transform transition-all duration-300 hover:scale-105 active:scale-95">
                  Explore More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20 animate-fade-in-delay-3">
              <div className="transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl sm:text-4xl font-bold text-[#d7ccc8]">{counts.items}+</div>
                <div className="text-[#a1887f] text-xs sm:text-sm mt-1">Coffee Varieties</div>
              </div>
              <div className="transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl sm:text-4xl font-bold text-[#d7ccc8]">{counts.orders}+</div>
                <div className="text-[#a1887f] text-xs sm:text-sm mt-1">Daily Orders</div>
              </div>
              <div className="transform transition-all duration-300 hover:scale-110">
                <div className="text-3xl sm:text-4xl font-bold text-[#d7ccc8]">{counts.people.toLocaleString()}+</div>
                <div className="text-[#a1887f] text-xs sm:text-sm mt-1">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slideInRight mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              <div className="aspect-[4/5] relative">
                <Image 
                  src="/images/joba images/img2.jpeg" 
                  alt="Premium coffee" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#795548] text-white p-4 sm:p-6 rounded-2xl shadow-xl z-10 hidden lg:block animate-bounce-slow transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">4.9/5</div>
                <div className="text-xs sm:text-sm opacity-90">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
