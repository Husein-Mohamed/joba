import Image from "next/image";

const galleryImages = [
  { src: "/images/joba images/img1.jpeg", alt: "Coffee product" },
  { src: "/images/joba images/img2.jpeg", alt: "Coffee bag" },
  { src: "/images/joba images/img3.jpeg", alt: "Coffee beans" },
  { src: "/images/joba images/img4.jpeg", alt: "Coffee preparation" },
  { src: "/images/joba images/img5.jpeg", alt: "Coffee roasting" },
  { src: "/images/joba images/img6.jpeg", alt: "Coffee cup" },
  { src: "/images/joba images/img7.jpeg", alt: "Coffee selection" },
  { src: "/images/joba images/img8.jpeg", alt: "Coffee experience" },
  { src: "/images/joba images/img9.jpeg", alt: "Coffee collection" },
  { src: "/images/joba images/img10.jpeg", alt: "Coffee service" },
  { src: "/images/joba images/img11.jpeg", alt: "Coffee blend" },
  { src: "/images/joba images/img12.jpeg", alt: "Coffee quality" },
  { src: "/images/joba images/img13.jpeg", alt: "Coffee craft" },
  { src: "/images/joba images/img14.jpeg", alt: "Coffee excellence" },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white animate-fadeIn" aria-label="Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#d7ccc8] text-[#3e2723] rounded-full text-sm font-semibold mb-4">
            GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3e2723]">Our Coffee</span>
            <br />
            <span className="text-[#795548]">In Pictures</span>
          </h2>
          <p className="text-xl text-[#6d4c41] max-w-2xl mx-auto">
            A visual journey through our passion for perfect coffee
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
