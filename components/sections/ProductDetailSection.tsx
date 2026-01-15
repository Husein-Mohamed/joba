"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import { Star, Heart, ShoppingCart, Minus, Plus, Coffee, Leaf, Award, Package, Truck } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductDetailSection({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState("whole-bean");
  const [isFavorite, setIsFavorite] = useState(false);
  
  function addToCart() {
    console.log(`Add ${qty} x ${product.name} (${selectedGrind}) to cart`);
    alert(`Added ${qty} × ${product.name} to cart (demo)`);
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#efebe9] via-white to-[#d7ccc8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#d7ccc8]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <Heart 
                    className={`w-6 h-6 transition-all ${
                      isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
                    }`} 
                  />
                </button>
                <div className="absolute top-4 left-4 bg-[#795548] text-[#efebe9] px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Premium
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#d7ccc8] rounded-xl p-4 text-center">
                  <Coffee className="w-8 h-8 text-[#5d4037] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#3e2723]">Fresh Roasted</p>
                </div>
                <div className="bg-[#efebe9] rounded-xl p-4 text-center">
                  <Leaf className="w-8 h-8 text-[#795548] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#3e2723]">Organic</p>
                </div>
                <div className="bg-[#d7ccc8] rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-[#5d4037] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#3e2723]">Award Winner</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#795548] text-[#795548]" />
                    ))}
                  </div>
                  <span className="text-[#6d4c41]">(4.9)</span>
                  <span className="text-[#a1887f]">|</span>
                  <span className="text-[#6d4c41]">142 reviews</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#5d4037] mb-2">
                    ${product.price.toFixed(2)}
                  </div>
                  <p className="text-[#6d4c41]">Per 12oz bag</p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Grind Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Grind Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedGrind("whole-bean")}
                      className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                        selectedGrind === "whole-bean"
                          ? 'border-[#795548] bg-[#d7ccc8] text-[#3e2723]'
                          : 'border-gray-200 hover:border-[#a1887f]'
                      }`}
                    >
                      Whole Bean
                    </button>
                    <button
                      onClick={() => setSelectedGrind("ground")}
                      className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                        selectedGrind === "ground"
                          ? 'border-[#795548] bg-[#d7ccc8] text-[#3e2723]'
                          : 'border-gray-200 hover:border-[#a1887f]'
                      }`}
                    >
                      Ground
                    </button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                      <button 
                        onClick={() => setQty(Math.max(1, qty - 1))} 
                        className="p-3 hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="px-6 py-3 font-semibold min-w-[60px] text-center">{qty}</div>
                      <button 
                        onClick={() => setQty(qty + 1)} 
                        className="p-3 hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-[#6d4c41]">
                      Total: <span className="text-2xl font-bold text-[#5d4037]">${(product.price * qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                  <Button 
                    onClick={addToCart}
                    className="flex-1 py-4 text-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline"
                    className="px-6"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="border-t border-[#d7ccc8] pt-6">
                  <h3 className="text-lg font-semibold text-[#3e2723] mb-4">Product Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#6d4c41]">
                      <Package className="w-5 h-5 text-[#795548]" />
                      <span>12oz resealable bag</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#6d4c41]">
                      <Coffee className="w-5 h-5 text-[#795548]" />
                      <span>Single-origin and freshly roasted</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#6d4c41]">
                      <Leaf className="w-5 h-5 text-[#5d4037]" />
                      <span>Organic & Fair Trade certified</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#6d4c41]">
                      <Truck className="w-5 h-5 text-[#795548]" />
                      <span>Free shipping on orders over $50</span>
                    </div>
                  </div>
                </div>

                {/* Tasting Notes */}
                <div className="border-t border-[#d7ccc8] pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-[#3e2723] mb-4">Tasting Notes</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-medium">
                      Chocolate
                    </span>
                    <span className="px-4 py-2 bg-[#a1887f] text-[#3e2723] rounded-full text-sm font-medium">
                      Citrus
                    </span>
                    <span className="px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-medium">
                      Nutty
                    </span>
                    <span className="px-4 py-2 bg-[#a1887f] text-[#3e2723] rounded-full text-sm font-medium">
                      Smooth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#d7ccc8]">
            <Coffee className="w-10 h-10 text-[#795548] mb-4" />
            <h3 className="text-lg font-semibold text-[#3e2723] mb-2">Brewing Guide</h3>
            <p className="text-[#6d4c41] text-sm">
              Perfect for pour-over, French press, or espresso. Grind just before brewing for best results.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#d7ccc8]">
            <Package className="w-10 h-10 text-[#5d4037] mb-4" />
            <h3 className="text-lg font-semibold text-[#3e2723] mb-2">Storage Tips</h3>
            <p className="text-[#6d4c41] text-sm">
              Store in a cool, dry place away from direct sunlight. Reseal bag after each use.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#d7ccc8]">
            <Truck className="w-10 h-10 text-[#795548] mb-4" />
            <h3 className="text-lg font-semibold text-[#3e2723] mb-2">Fast Shipping</h3>
            <p className="text-[#6d4c41] text-sm">
              Roasted to order and shipped within 24 hours. Free shipping on orders over $50.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
