import { Truck, Coffee, Clock, Headphones } from 'lucide-react';
import Image from "next/image";

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Fresh coffee delivered to your door within 24 hours of roasting",
    color: "bg-[#d7ccc8] text-[#5d4037]",
    image: "/images/joba images/img10.jpeg"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Custom Blends",
    description: "Create your perfect blend with our expert roasters",
    color: "bg-[#a1887f] text-[#3e2723]",
    image: "/images/joba images/img11.jpeg"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Freshness Guarantee",
    description: "Always fresh, never stale. Our promise to you",
    color: "bg-[#d7ccc8] text-[#5d4037]",
    image: "/images/joba images/img12.jpeg"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Expert Support",
    description: "Brewing advice and guidance from our coffee experts",
    color: "bg-[#a1887f] text-[#3e2723]",
    image: "/images/joba images/img13.jpeg"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#efebe9] to-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#3e2723]">Exceptional Service</span>
            <br />
            <span className="text-[#795548]">Beyond Great Coffee</span>
          </h2>
          <p className="text-xl text-[#6d4c41] max-w-3xl mx-auto">
            We go above and beyond to ensure your coffee experience is perfect from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#3e2723] mb-2">{service.title}</h3>
                <p className="text-sm text-[#6d4c41]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}