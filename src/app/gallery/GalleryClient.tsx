"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type Variants,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Organized image array grouping file pairs cleanly by asset folder paths
const allImages = [
  // Main House
   "/main house/h (4).png",
  "/main house/h (1).webp",
  "/main house/h (2).webp",
  "/main house/h (1).png",
  "/main house/h (2).png",
  "/main house/h (3).png",
  // "/main house/h (5).png",
 


  // Gym
  "/gym/g (1).png",
  "/gym/g (1).webp",
  "/gym/g (2).webp",
  "/gym/g (3).webp",
  "/gym/g (4).webp",
  "/gym/g (5).webp",

  // Mandir & Bonfire
  "/mandir bonfire/m (1).JPG",
  "/mandir bonfire/m (1).webp",
  "/mandir bonfire/m (2).webp",

  // Pets
  "/pets/p (1).JPG",
  "/pets/p (2).JPG",
  "/pets/p (3).JPG",

  // Amazon Bus (New)
  "/kailasha-new-iamges/amazon-bus/1.webp",
  "/kailasha-new-iamges/amazon-bus/10.jpg",
  "/kailasha-new-iamges/amazon-bus/10.webp",
  "/kailasha-new-iamges/amazon-bus/11.webp",
  "/kailasha-new-iamges/amazon-bus/12.webp",
  "/kailasha-new-iamges/amazon-bus/2.webp",
  "/kailasha-new-iamges/amazon-bus/3.webp",
  "/kailasha-new-iamges/amazon-bus/4.webp",
  "/kailasha-new-iamges/amazon-bus/5.webp",
  "/kailasha-new-iamges/amazon-bus/6.webp",
  "/kailasha-new-iamges/amazon-bus/7.webp",
  "/kailasha-new-iamges/amazon-bus/8.webp",
  // "/kailasha-new-iamges/amazon-bus/9.webp",

  // Bamboo Cottage (New)
  "/kailasha-new-iamges/bamboo-cottage/1.webp",
  "/kailasha-new-iamges/bamboo-cottage/2.webp",
  "/kailasha-new-iamges/bamboo-cottage/3.webp",
  "/kailasha-new-iamges/bamboo-cottage/4.webp",
  "/kailasha-new-iamges/bamboo-cottage/5.webp",
  "/kailasha-new-iamges/bamboo-cottage/6.webp",
  "/kailasha-new-iamges/bamboo-cottage/7.webp",
  "/kailasha-new-iamges/bamboo-cottage/8.webp",
  "/kailasha-new-iamges/bamboo-cottage/9.webp",

  // Family Room (New)
  "/kailasha-new-iamges/family-room/1.webp",
  "/kailasha-new-iamges/family-room/10.webp",
  "/kailasha-new-iamges/family-room/11.webp",
  "/kailasha-new-iamges/family-room/12.webp",
  "/kailasha-new-iamges/family-room/2.webp",
  "/kailasha-new-iamges/family-room/3.webp",
  "/kailasha-new-iamges/family-room/4.webp",
  "/kailasha-new-iamges/family-room/5.webp",
  "/kailasha-new-iamges/family-room/6.webp",
  "/kailasha-new-iamges/family-room/7.webp",
  "/kailasha-new-iamges/family-room/8.webp",
  "/kailasha-new-iamges/family-room/9.webp",

  // Other New Images (in root of kailasha-new-iamges)
  "/kailasha-new-iamges/1.webp",
  "/kailasha-new-iamges/10.webp",
  "/kailasha-new-iamges/11.webp",
  "/kailasha-new-iamges/12.webp",
  "/kailasha-new-iamges/13.webp",
  "/kailasha-new-iamges/2.webp",
  // "/kailasha-new-iamges/3.webp",
  "/kailasha-new-iamges/4.webp",
  "/kailasha-new-iamges/5.jpg",
  "/kailasha-new-iamges/6.webp",
  "/kailasha-new-iamges/7.webp",
  "/kailasha-new-iamges/8.webp",
  "/kailasha-new-iamges/9.webp",
];

// Soft, premium spring physics configurations
const fluidSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 1,
};

const fadeTransition: Transition = {
  duration: 0.4,
  ease: "linear",
};

const sliderEase = [0.16, 1, 0.3, 1] as const;

// Fluid directional variant transitions for the image slider
const smoothSliderVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "20%" : "-20%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.98,
  }),
  center: {
    x: "0%",
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      x: fluidSpring,
      opacity: fadeTransition,
      filter: fadeTransition,
      scale: fluidSpring,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "20%" : "-20%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.98,
    transition: {
      x: { duration: 0.4, ease: sliderEase },
      opacity: { duration: 0.3 },
      filter: { duration: 0.3 },
      scale: { duration: 0.4, ease: sliderEase },
    },
  }),
};

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const getCategoryFromPath = (path: string): string => {
    if (path.includes("/main house/")) return "Main House";
    if (path.includes("/gym/")) return "Gym";
    if (path.includes("/mandir bonfire/")) return "Mandir & Bonfire";
    if (path.includes("/pets/")) return "Pets";
    if (path.includes("/kailasha-new-iamges/amazon-bus/")) return "Amazon Bus";
    if (path.includes("/kailasha-new-iamges/bamboo-cottage/")) return "Bamboo Cottage";
    if (path.includes("/kailasha-new-iamges/family-room/")) return "Family Room";
    return "Other";
  };

  const categories = ["All", "Main House", "Gym", "Mandir & Bonfire", "Pets", "Amazon Bus", "Bamboo Cottage", "Family Room", "Other"];

  const filteredImages = allImages.filter(
    (img) => activeCategory === "All" || getCategoryFromPath(img) === activeCategory
  );

  const openLightbox = (imageSrc: string) => {
    const absoluteIndex = allImages.indexOf(imageSrc);
    setCurrentIndex(absoluteIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = allImages.length - 1;
      if (nextIndex >= allImages.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <div className="w-full">
      {/* Hero Section — Left completely untouched */}
      <section className="relative flex h-[60vh] min-h-125 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/main house/h (1).webp"
            alt="Gallery Kailasa Woods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-kw-offwhite/20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-kw-offwhite/80 tracking-widest uppercase text-sm mb-6 block font-medium"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-kw-offwhite mb-6 uppercase tracking-[0.2em]"
          >
            The Gallery
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-6 h-px w-24 origin-center bg-kw-offwhite/50"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-kw-offwhite/90 max-w-2xl mx-auto text-lg"
          >
            A visual journey through the timeless beauty and serene landscapes of Kailasa Woods.
          </motion.p>
        </div>
      </section>

      {/* Smooth Minimal Category Filter */}
      <div className="w-full bg-neutral-950 py-4 flex justify-center sticky top-0 z-40 border-b border-white/5 backdrop-blur-md bg-opacity-90">
        <div className="flex flex-wrap gap-2 md:gap-3 px-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-500 text-white font-medium"
              >
                <span className={isActive ? "text-neutral-950" : "text-white/60 hover:text-white"}>
                  {category}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="smoothTabIndicator"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={fluidSpring}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Stagger Layout Grid */}
      <div className="mx-auto max-w-450 px-2 py-12">
        <motion.div layout="position" className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((src) => (
              <motion.div
                layout
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={fluidSpring}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-none"
                onClick={() => openLightbox(src)}
              >
                <div className="w-full overflow-hidden bg-neutral-900">
                  <img
                    src={src}
                    alt="Gallery Asset Component"
                    className="h-auto w-full rounded-none object-cover transition-transform duration-1200 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-103"
                    loading="lazy"
                  />
                </div>

                {/* Micro-Interaction Soft Backdrop Overlay */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="p-3 bg-white/10 rounded-full border border-white/10 scale-90 group-hover:scale-100 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* High-End Fluid Lightbox */}
      <AnimatePresence initial={false} custom={direction}>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="fixed inset-0 z-100 flex select-none items-center justify-center bg-black/95 backdrop-blur-md"
          >
            {/* Top Close Control */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50 p-3 bg-white/5 rounded-full border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white hover:bg-white/5 transition-all p-4 z-50 rounded-full hidden md:block border border-white/0 hover:border-white/10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Main Stage Image Container */}
            <div className="w-full h-full p-4 md:p-16 flex items-center justify-center relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  custom={direction}
                  variants={smoothSliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={allImages[currentIndex]}
                  alt="Gallery absolute view"
                  className="max-w-full max-h-[78vh] object-contain rounded-none shadow-2xl pointer-events-none"
                />
              </AnimatePresence>
              
              {/* Discrete Micro Index Track */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.25em] font-mono">
                {String(currentIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}
              </div>
            </div>

            {/* Right Nav */}
            <button
              onClick={() => paginate(1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white hover:bg-white/5 transition-all p-4 z-50 rounded-full hidden md:block border border-white/0 hover:border-white/10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
