import { Image, Maximize2 } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
import Reveal from "./Reveal";

export default function Gallery() {
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
                className="group relative glass-card rounded-xl overflow-hidden shadow-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
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
    </section>
  );
}
