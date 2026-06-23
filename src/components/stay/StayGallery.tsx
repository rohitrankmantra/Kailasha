"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  gallery: string[];
  title: string;
};

export default function StayGallery({ gallery, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % gallery.length);
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, gallery.length]);

  // Reset auto slide when user clicks
  const handleThumbnailClick = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentIndex(index);
    // Scroll clicked thumbnail into view
    if (thumbnailsRef.current && thumbnailsRef.current.children[index]) {
      (thumbnailsRef.current.children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  const handlePrev = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Scroll thumbnails container
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Scroll thumbnails container
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        if (selectedIndex !== null) {
          setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
        } else {
          handlePrev();
        }
      }
      if (e.key === "ArrowRight") {
        if (selectedIndex !== null) {
          setSelectedIndex((selectedIndex + 1) % gallery.length);
        } else {
          handleNext();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, gallery.length]);

  return (
    <>
      {/* Main Slider */}
      <div className="relative mb-8">
        <div className="aspect-video md:aspect-[21/9] w-full overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={gallery[currentIndex]}
              alt={`${title} main image`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedIndex(currentIndex)}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Thumbnails with Navigation */}
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div ref={thumbnailsRef} className="flex gap-4 overflow-x-auto pb-4 mx-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {gallery.map((imgSrc, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-1/4 max-w-[200px] aspect-video overflow-hidden rounded-lg cursor-pointer transition-all ${
                currentIndex === index ? 'ring-2 ring-kw-forest' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={imgSrc}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Lightbox */}
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
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length); }}
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
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % gallery.length); }}
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
