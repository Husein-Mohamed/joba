"use client";
import { Coffee, TrendingUp, Users, Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    icon: Coffee,
    value: 50,
    suffix: '+',
    label: 'Coffee Varieties',
    description: 'From around the world',
    color: 'from-[#795548] to-[#6d4c41]'
  },
  {
    icon: TrendingUp,
    value: 2500,
    suffix: '+',
    label: 'Cups Served Daily',
    description: 'Fresh every day',
    color: 'from-[#8d6e63] to-[#795548]'
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Happy Customers',
    description: 'And growing',
    color: 'from-[#a1887f] to-[#8d6e63]'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Customer Rating',
    description: 'Verified reviews',
    color: 'from-[#6d4c41] to-[#5d4037]'
  }
];

export default function StatsSection(){
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            stats.forEach((stat, index) => {
              const duration = 2000;
              const start = performance.now();
              
              const animate = (currentTime: number) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuad = 1 - (1 - progress) * (1 - progress);
                
                setAnimatedValues(prev => {
                  const newValues = [...prev];
                  newValues[index] = stat.value * easeOutQuad;
                  return newValues;
                });
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              
              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-[#efebe9] relative overflow-hidden animate-fadeIn" 
      aria-label="Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            OUR IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3e2723]">Numbers That</span>
            <br />
            <span className="text-[#795548]">Tell Our Story</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayValue = stat.value === 4.9 
              ? animatedValues[index].toFixed(1) 
              : Math.floor(animatedValues[index]).toLocaleString();
            
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d7ccc8] h-full hover:-translate-y-1">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-[#efebe9]" />
                  </div>
                  
                  {/* Stat value */}
                  <div className="mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-[#3e2723]">
                      {displayValue}
                    </span>
                    <span className="text-xl font-bold text-[#795548]">{stat.suffix}</span>
                  </div>
                  
                  {/* Label and description */}
                  <h3 className="text-base font-semibold text-[#3e2723] mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-[#6d4c41]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
