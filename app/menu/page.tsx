"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Coffee, Flame, Snowflake, Award, Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

const categories = ["All", "Hot Drinks", "Cold Brew", "Specialty", "Food"];

const menuItems = [
  {
    id: "americano",
    title: "Americano",
    price: 3.5,
    desc: "Clean, classic espresso topped with hot water. Bold and smooth.",
    img: "/images/joba images/img5.jpeg",
    category: "Hot Drinks",
    badge: "Popular",
    rating: 4.8,
    temp: "hot"
  },
  {
    id: "flat-white",
    title: "Flat White",
    price: 4.0,
    desc: "Textured microfoam with bright, balanced espresso. Creamy perfection.",
    img: "/images/joba images/img6.jpeg",
    category: "Hot Drinks",
    badge: "Best Seller",
    rating: 4.9,
    temp: "hot"
  },
  {
    id: "mocha",
    title: "Mocha",
    price: 4.5,
    desc: "Bitter-sweet chocolate combined with rich espresso and steamed milk.",
    img: "/images/joba images/img7.jpeg",
    category: "Specialty",
    badge: "Sweet",
    rating: 4.7,
    temp: "hot"
  },
  {
    id: "house-blend",
    title: "House Blend",
    price: 4.0,
    desc: "Our signature roast — caramel and toasted nut notes. Medium body.",
    img: "/images/joba images/img1.jpeg",
    category: "Hot Drinks",
    badge: "Signature",
    rating: 4.9,
    temp: "hot"
  },
  {
    id: "cold-brew",
    title: "Cold Brew",
    price: 4.5,
    desc: "Smooth, sweet, and refreshing. Steeped for 16 hours.",
    img: "/images/joba images/img3.jpeg",
    category: "Cold Brew",
    badge: "Refreshing",
    rating: 4.8,
    temp: "cold"
  },
  {
    id: "cappuccino",
    title: "Cappuccino",
    price: 4.0,
    desc: "Equal parts espresso, steamed milk, and foam. Classic comfort.",
    img: "/images/joba images/img2.jpeg",
    category: "Hot Drinks",
    badge: "Classic",
    rating: 4.9,
    temp: "hot"
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#efebe9] via-white to-[#d7ccc8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-[#efebe9] py-20 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Coffee className="w-5 h-5 text-[#d7ccc8]" />
              <span className="text-sm font-semibold">Fresh Daily</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-[#d7ccc8] max-w-2xl mx-auto">
              Handcrafted espresso and brewed coffee — made with passion, served with care
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#795548] to-[#6d4c41] text-[#efebe9] shadow-lg scale-105'
                    : 'bg-white text-[#5d4037] hover:bg-[#d7ccc8] border border-[#a1887f]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <article 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d7ccc8]/50 group hover:-translate-y-2 animate-scaleIn hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Temperature indicator */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  {item.temp === "hot" ? (
                    <Flame className="w-4 h-4 text-red-500" />
                  ) : (
                    <Snowflake className="w-4 h-4 text-blue-500" />
                  )}
                  <span className="text-sm font-semibold">{item.temp === "hot" ? "Hot" : "Cold"}</span>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#795548] text-[#efebe9] px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {item.badge}
                </div>

                {/* Favorite Button */}
                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${
                      favorites.includes(item.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#795548] text-[#795548]" />
                        <span className="text-sm font-semibold text-[#5d4037]">{item.rating}</span>
                      </div>
                      <span className="text-xs text-[#8d6e63]">(120+ reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#5d4037]">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-[#8d6e63]">per cup</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* Category tag */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#d7ccc8] text-[#3e2723] rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="px-4">
                    <Coffee className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-amber-500 to-emerald-500 w-0 group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Coffee className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No items found in this category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-[#5d4037] to-[#6d4c41] rounded-2xl p-12 text-center text-[#efebe9]">
          <Coffee className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Can't Decide?</h2>
          <p className="text-xl text-[#d7ccc8] mb-8 max-w-2xl mx-auto">
            Let our baristas help you find your perfect brew. Visit us in-store or give us a call!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#efebe9] text-[#3e2723] hover:bg-[#d7ccc8]">
              Find Our Location
            </Button>
            <Button variant="outline" className="border-[#efebe9] text-[#efebe9] hover:bg-white/10">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
