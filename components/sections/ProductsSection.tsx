import Image from "next/image";
import Button from "../ui/Button";
import { Coffee, Award, Heart } from 'lucide-react';
import Link from "next/link";

const products = [
  {
    id: "house-blend",
    title: "House Blend",
    price: 14.0,
    description: "Our signature blend with notes of caramel and toasted nuts.",
    image: "/images/joba images/img1.jpeg",
    badge: "Best Seller",
    badgeColor: "bg-[#795548]"
  },
  {
    id: "dark-roast",
    title: "Dark Roast Reserve",
    price: 17.0,
    description: "Bold and intense with deep chocolate and smoky notes.",
    image: "/images/joba images/img2.jpeg",
    badge: "Popular",
    badgeColor: "bg-[#6d4c41]"
  },
  {
    id: "rwanda",
    title: "Rwandan Sunrise",
    price: 18.5,
    description: "Bright and floral with notes of jasmine and citrus.",
    image: "/images/joba images/img3.jpeg",
    badge: "Premium",
    badgeColor: "bg-[#8d6e63]"
  },
  {
    id: "decaf",
    title: "Decaf Delight",
    price: 15.5,
    description: "All the flavor, none of the caffeine. Swiss water processed.",
    image: "/images/joba images/img4.jpeg",
    badge: "Classic",
    badgeColor: "bg-[#795548]"
  },
  {
    id: "colombia",
    title: "Colombian Classic",
    price: 16.0,
    description: "Balanced and chocolatey with a smooth finish.",
    image: "/images/joba images/img5.jpeg",
    badge: "Popular",
    badgeColor: "bg-[#6d4c41]"
  },
  {
    id: "espresso",
    title: "Espresso Blend",
    price: 16.5,
    description: "Perfect for espresso with rich crema and bold flavor.",
    image: "/images/joba images/img6.jpeg",
    badge: "Premium",
    badgeColor: "bg-[#8d6e63]"
  },
  {
    id: "single-origin",
    title: "Single Origin",
    price: 19.0,
    description: "Exclusive single-origin beans with unique terroir.",
    image: "/images/joba images/img7.jpeg",
    badge: "Limited",
    badgeColor: "bg-[#795548]"
  },
  {
    id: "morning-blend",
    title: "Morning Blend",
    price: 15.0,
    description: "Smooth and energizing, perfect start to your day.",
    image: "/images/joba images/img8.jpeg",
    badge: "Popular",
    badgeColor: "bg-[#6d4c41]"
  },
  {
    id: "evening-blend",
    title: "Evening Blend",
    price: 15.0,
    description: "Mellow and comforting, ideal for relaxing moments.",
    image: "/images/joba images/img9.jpeg",
    badge: "Classic",
    badgeColor: "bg-[#8d6e63]"
  },
];

export default function ProductsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#efebe9] to-white relative overflow-hidden animate-fadeIn" aria-label="Best selling items">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-delay">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-xs sm:text-sm font-semibold mb-4 animate-slide-up">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-slide-up-delay">
            <span className="text-[#3e2723]">Premium Coffee</span>
            <br />
            <span className="text-[#795548]">Collection</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#6d4c41] max-w-2xl mx-auto px-4 animate-fade-in-delay">
            Expertly roasted beans from around the world, crafted with care
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d7ccc8] group hover:-translate-y-2 transform animate-fade-in-delay-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image container */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${product.badgeColor} text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {product.badge}
                </div>
                {/* Favorite button */}
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 active:scale-95">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                </button>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#3e2723] group-hover:text-[#795548] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <div className="text-lg sm:text-xl font-bold text-[#5d4037]">
                    ${product.price.toFixed(2)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6d4c41] mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* View Details Link */}
                <Link 
                  href="/product"
                  className="block w-full text-center px-4 py-2.5 bg-[#795548] hover:bg-[#6d4c41] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 sm:mt-12 text-center animate-fade-in-delay-3">
          <Link 
            href="/product"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#795548] hover:bg-[#6d4c41] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Coffee className="w-5 h-5" />
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
