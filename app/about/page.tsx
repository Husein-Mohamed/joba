import Image from "next/image";
import { Coffee, Heart, Users, Award, Leaf, Target, MapPin, Clock } from 'lucide-react';
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#efebe9] via-white to-[#d7ccc8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-[#efebe9] py-20 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo for dark background */}
            <div className="flex justify-center mb-8">
              <div className="relative h-16 w-48 md:h-20 md:w-56">
                <Image 
                  src="/images/joba images/logos/joba coffee branding.png" 
                  alt="Joba Coffee Logo" 
                  fill
                  className="object-contain filter brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-[#d7ccc8]" />
              <span className="text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Joba Coffee
            </h1>
            <p className="text-xl text-[#d7ccc8] max-w-3xl mx-auto">
              Where passion for coffee meets dedication to community and sustainability
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 border border-[#d7ccc8]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image 
                src="/images/joba images/img1.jpeg" 
                alt="Coffee roasting at Joba"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block bg-[#d7ccc8] text-[#3e2723] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Crafting Community Through Coffee
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Joba Coffee we believe a great cup can brighten a day and build
                community. We partner with farmers who share our commitment to quality
                and pay fair prices for carefully processed lots.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our roastery focuses on small-batch techniques that highlight each origin's 
                unique character — from the first crack to your first sip.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
              THE JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#3e2723]">How It</span>{" "}
              <span className="text-[#795548]">All Began</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d7ccc8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#795548] to-[#6d4c41] text-[#efebe9] p-3 rounded-xl">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2015</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">The Beginning</h4>
              <p className="text-gray-600 leading-relaxed">
                Joba Coffee started as a neighborhood cafe where friends gathered for good
                conversation and exceptional coffee. What began as a passion project
                quickly became a beloved community hub.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d7ccc8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#8d6e63] to-[#795548] text-[#efebe9] p-3 rounded-xl">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2018</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Own Roastery</h4>
              <p className="text-gray-600 leading-relaxed">
                We expanded to roast our own beans, developing direct relationships
                with sustainable farms worldwide. This allowed us to ensure quality
                and fair trade practices from seed to cup.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d7ccc8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#a1887f] to-[#8d6e63] text-[#efebe9] p-3 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2020</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Growing Community</h4>
              <p className="text-gray-600 leading-relaxed">
                Our family grew to three locations, each maintaining the intimate
                atmosphere and personal touch that defined our first cafe. We never
                forgot our roots.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d7ccc8]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#6d4c41] to-[#5d4037] text-[#efebe9] p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Today</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning</h4>
              <p className="text-gray-600 leading-relaxed">
                Recognized nationally for our sustainability practices and coffee
                quality, we continue to put people and planet first while delivering
                an exceptional coffee experience.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              WHAT DRIVES US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-emerald-900">Our Core</span>{" "}
              <span className="text-amber-700">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Every coffee we serve has a story. We provide complete traceability
                from farm to cup, with clear tasting notes and origin details for
                every roast.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner exclusively with farms practicing regenerative agriculture,
                ensuring fair wages and supporting farmer livelihoods while protecting
                the land.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Small-batch roasting ensures each bean reaches its optimal flavor
                profile. We never compromise on quality, carefully curating and
                roasting with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Us CTA */}
        <div className="bg-gradient-to-r from-[#5d4037] to-[#6d4c41] rounded-3xl p-12 text-white text-center shadow-2xl">
          <Coffee className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Visit Our Roastery</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Experience our passion firsthand. Tour our roastery, meet our team,
            and taste the difference that care and craft make.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <MapPin className="w-5 h-5" />
              <span>Zoobe Street, Mogadishu, Banadir, Somalia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <Clock className="w-5 h-5" />
              <span>Mon-Sun: 7am-9pm</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-emerald-700 hover:bg-amber-50">
              Schedule a Tour
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
