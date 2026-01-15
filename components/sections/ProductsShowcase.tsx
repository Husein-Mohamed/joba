import Image from "next/image";
import { Coffee, MapPin } from 'lucide-react';
import products from '@/app/product/products.data';

export default function ProductsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#efebe9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo for light background */}
          <div className="flex justify-center mb-6">
            <div className="relative h-16 w-48 md:h-20 md:w-56">
              <Image 
                src="/images/joba images/logos/joba coffee branding-01.jpg" 
                alt="Joba Coffee Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            OUR PRODUCTS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#3e2723]">Premium Coffee</span>
            <br />
            <span className="text-[#795548]">Collection</span>
          </h1>
          <p className="text-xl text-[#6d4c41] max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of expertly roasted coffee. Each product is crafted with care, 
            showcasing unique flavors and origins from around the world.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#d7ccc8] rounded-full">
            <Coffee className="w-5 h-5 text-[#5d4037]" />
            <span className="text-sm font-medium text-[#3e2723]">Showcase Only - Contact us for inquiries</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#d7ccc8] group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#3e2723] mb-2 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-[#795548]" />
                    {product.name}
                  </h3>
                  
                  {/* Product Info Tags */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-[#d7ccc8] text-[#5d4037] rounded-full text-xs font-medium">
                      {product.roast} Roast
                    </span>
                    <span className="px-3 py-1 bg-[#a1887f] text-[#3e2723] rounded-full text-xs font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {product.origin}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6d4c41] leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                {/* Contact CTA */}
                <div className="pt-4 border-t border-[#d7ccc8]">
                  <a 
                    href="/contact" 
                    className="block w-full text-center px-4 py-2 bg-[#795548] hover:bg-[#6d4c41] text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Inquire About This Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-[#d7ccc8] max-w-2xl">
            <h3 className="text-xl font-bold text-[#3e2723] mb-3">Interested in Our Products?</h3>
            <p className="text-[#6d4c41] mb-6">
              This is a showcase of our product range. For inquiries, wholesale orders, or to learn more about our coffee, 
              please contact us directly.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-[#795548] hover:bg-[#6d4c41] text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
