"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  gallery: string[];
  title: string;
};

export default function StayGallery({ gallery, title }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {gallery.map((imgSrc, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedIndex(index)}
            className={`relative overflow-hidden group rounded-sm cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2 h-[50vh] md:h-[80vh]' : 'h-[40vh]'}`}
          >
            <img 
              src={imgSrc} 
              alt={`${title} gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/20 backdrop-blur-sm text-white uppercase tracking-widest text-xs py-2 px-4 rounded-full">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setSelectedIndex(null)}
            />
            
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-12 z-50 text-white/70 hover:text-white transition-colors p-2"
            >
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={gallery[selectedIndex]}
              alt={`${title} zoomed image`}
              className="max-h-[90vh] max-w-[90vw] object-contain z-40 relative"
            />

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-12 z-50 text-white/70 hover:text-white transition-colors p-2"
            >
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 tracking-widest text-sm uppercase">
              {selectedIndex + 1} / {gallery.length}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
