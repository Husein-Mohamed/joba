import { Coffee, Leaf, Target, Award, Users } from 'lucide-react';
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#efebe9] animate-fadeIn"
      aria-label="About Zeytun Restaurant Roastery"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#3e2723]">More Than Just</span>
            <br />
            <span className="text-[#795548]">A Coffee Roastery</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Images Grid */}
          <div className="relative space-y-4 animate-slideInLeft">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <Image 
                  src="/images/joba images/img3.jpeg" 
                  alt="Coffee beans"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <Image 
                  src="/images/joba images/img4.jpeg" 
                  alt="Coffee preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square col-span-2">
                <Image 
                  src="/images/joba images/img5.jpeg" 
                  alt="Coffee roasting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-slideInRight">
            <div>
              <p className="text-lg text-[#5d4037] mb-6 leading-relaxed">
                At Zeytun Restaurant, we&apos;re passionate about bringing exceptional coffee 
                from farm to cup. Founded in 2015, we&apos;ve built relationships with 
                sustainable farms worldwide to source the finest single-origin beans.
              </p>

              <p className="text-lg text-[#5d4037] mb-8 leading-relaxed">
                Our master roasters carefully craft each batch to highlight the unique 
                characteristics of every bean — from bright citrus notes to deep chocolate 
                undertones and sweet stone-fruit finishes.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8] text-center">
                <div className="text-3xl font-bold text-[#3e2723] mb-1">100%</div>
                <div className="text-sm text-[#6d4c41]">Traceable</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8] text-center">
                <div className="text-3xl font-bold text-[#3e2723] mb-1">30+</div>
                <div className="text-sm text-[#6d4c41]">Farms</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8] text-center">
                <div className="text-3xl font-bold text-[#3e2723] mb-1">15+</div>
                <div className="text-sm text-[#6d4c41]">Awards</div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#3e2723]">Our Core Values</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8]">
                  <div className="p-3 bg-[#d7ccc8] rounded-lg w-fit mb-4">
                    <Target className="w-6 h-6 text-[#5d4037]" />
                  </div>
                  <h4 className="font-semibold text-lg text-[#3e2723] mb-2">Traceability</h4>
                  <p className="text-[#6d4c41] text-sm">
                    Every batch traced from farm to cup with full transparency.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8]">
                  <div className="p-3 bg-[#d7ccc8] rounded-lg w-fit mb-4">
                    <Leaf className="w-6 h-6 text-[#795548]" />
                  </div>
                  <h4 className="font-semibold text-lg text-[#3e2723] mb-2">Sustainability</h4>
                  <p className="text-[#6d4c41] text-sm">
                    Regenerative agriculture and fair wages throughout our supply chain.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d7ccc8]">
                  <div className="p-3 bg-[#d7ccc8] rounded-lg w-fit mb-4">
                    <Award className="w-6 h-6 text-[#5d4037]" />
                  </div>
                  <h4 className="font-semibold text-lg text-[#3e2723] mb-2">Quality</h4>
                  <p className="text-[#6d4c41] text-sm">
                    Small-batch roasting for optimal flavor profile and consistent excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="bg-[#795548] hover:bg-[#6d4c41] text-white px-8 py-4 text-lg rounded-xl"
                size="lg"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Visit Our Roastery
              </Button>
              <Button 
                variant="outline" 
                className="border-[#795548] text-[#795548] hover:bg-[#d7ccc8] px-8 py-4 text-lg rounded-xl"
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}