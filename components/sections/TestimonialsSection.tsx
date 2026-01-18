import Image from "next/image";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sada",
    role: "Coffee Shop & Restaurant",
    quote: "Zeytun Restaurant has been our trusted supplier for over 3 years. Their premium beans elevate both our coffee menu and restaurant offerings. Our customers consistently praise the quality. Exceptional service and unmatched flavor profiles.",
    avatar: "/images/joba images/img8.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Zeytun Restaurant",
    role: "Coffee Shop",
    quote: "The consistency and quality of Zeytun Restaurant is outstanding. Our customers love the rich, bold flavors. It's become the signature of our coffee shop. Highly recommended for any coffee establishment.",
    avatar: "/images/joba images/img6.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Decala",
    role: "Hotel",
    quote: "Partnering with Zeytun Restaurant was one of the best decisions we made. Their beans are always fresh, the variety is impressive, and the support team is responsive. Our hotel guests appreciate the premium coffee experience in our lobby and restaurant.",
    avatar: "/images/joba images/img9.jpeg",
    rating: 5,
  },
  {
    id: 4,
    name: "Mado",
    role: "Coffee Shop & Restaurant",
    quote: "Zeytun Restaurant delivers excellence consistently. Their premium roasts have enhanced both our coffee service and restaurant beverage program significantly. Professional service, reliable delivery, and exceptional quality that our customers appreciate.",
    avatar: "/images/joba images/img14.jpeg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#efebe9] to-white relative overflow-hidden animate-fadeIn" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3e2723]">Trusted By</span>
            <br />
            <span className="text-[#795548]">Leading Establishments</span>
          </h2>
          <p className="text-xl text-[#6d4c41] max-w-2xl mx-auto">
            Premium coffee shops and restaurants that trust Zeytun Restaurant for their daily operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d7ccc8] hover:-translate-y-1"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#795548] text-[#795548]" />
                ))}
              </div>

              {/* Testimonial quote */}
              <p className="text-sm text-[#5d4037] mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#d7ccc8] bg-gradient-to-br from-[#795548] to-[#6d4c41] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-[#3e2723] text-sm">{t.name}</div>
                  <div className="text-xs text-[#6d4c41] font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg border border-[#d7ccc8]">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#795548] text-[#795548]" />
              ))}
            </div>
            <p className="text-2xl font-bold text-[#3e2723] mb-2">4.9/5 Average Rating</p>
            <p className="text-[#6d4c41] text-sm">Based on 2,500+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
