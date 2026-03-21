import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Smooth river stones with essential oil", tall: true },
  { src: gallery2, alt: "Massage oil and fresh botanicals", tall: false },
  { src: gallery3, alt: "Candlelit spa setting", tall: false },
  { src: gallery4, alt: "Fresh eucalyptus in ceramic vase", tall: true },
  { src: gallery5, alt: "Hot stones on wooden tray", tall: false },
  { src: gallery6, alt: "Serene massage studio interior", tall: false },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32 section-padding bg-secondary">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
            The Space
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`break-inside-avoid overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${100 + i * 80}ms` : "0ms" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
