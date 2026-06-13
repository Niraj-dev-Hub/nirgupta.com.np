import { useState, useEffect } from "react";
import { Image, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;

    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx]);

  return (
    <section id="gallery" className="w-full py-20 bg-gray-950 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My Creative <span className="text-cyan-400">Space</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase">
            Captured Aspirations & Core Academic Journeys
          </p>
        </div>

        {/* Gallery responsive grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <Reveal key={img.url} delay={idx * 100}>
              <div
                id={`gallery-item-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className="group relative glass-card rounded-xl overflow-hidden shadow-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[3/2] w-full bg-gray-900 flex items-center justify-center">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Image Hover Light Coating */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Micro zoom pill indicator */}
                  <div className="absolute top-3 right-3 bg-gray-950/70 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                {/* Constant Subtle Caption Block */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-gray-900/40">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {img.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {img.description}
                    </p>
                  </div>

                  {/* Gallery Index Stamp */}
                  <span className="font-mono text-[10px] text-gray-500 mt-4 tracking-wider uppercase block text-right">
                    IMG_REF_0{idx + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal Overlay */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 hover:text-cyan-400 rounded-full border border-white/10 text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer z-[60]"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) =>
                prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
              );
            }}
            className="absolute left-4 sm:left-8 p-3 bg-white/5 hover:bg-white/10 hover:text-cyan-400 rounded-full border border-white/10 text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer z-[60]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) =>
                prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
              );
            }}
            className="absolute right-4 sm:right-8 p-3 bg-white/5 hover:bg-white/10 hover:text-cyan-400 rounded-full border border-white/10 text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer z-[60]"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image and Caption Container */}
          <div
            className="flex flex-col items-center max-w-4xl w-full px-6 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-gray-900">
              <img
                src={GALLERY_IMAGES[activeIdx].url}
                alt={GALLERY_IMAGES[activeIdx].title}
                className="max-h-[70vh] max-w-full object-contain animate-zoom-in"
              />
            </div>

            <div className="text-center mt-6 max-w-2xl">
              <h3 className="font-heading text-lg sm:text-2xl font-bold text-white mb-2">
                {GALLERY_IMAGES[activeIdx].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                {GALLERY_IMAGES[activeIdx].description}
              </p>
              <span className="inline-block mt-4 px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono text-xs rounded-full">
                {activeIdx + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
