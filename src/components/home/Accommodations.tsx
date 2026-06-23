"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { staysData as accommodations } from "@/data/stays";

function AccommodationItem({ item, index, scrollYProgress, total }: { item: { id: string; details: string; title: string; description: string; heroImage: string; amenities: string[] }, index: number, scrollYProgress: MotionValue<number>, total: number }) {
  const y = useTransform(scrollYProgress, [Math.max(0, (index - 1) / total), (index + 1) / total], ["-15%", "15%"]);

  return (
    <div 
      className="md:sticky md:top-0 min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-kw-beige overflow-hidden border-t border-kw-forest/10"
      style={{ zIndex: index + 10 }}
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2 p-8 py-16 md:p-16 lg:p-24 flex flex-col justify-center h-auto md:h-full bg-kw-beige shadow-[0_-20px_50px_rgba(0,0,0,0.05)] md:shadow-none z-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="text-kw-sage tracking-widest font-mono text-sm">0{index + 1}</span>
            <div className="h-px w-12 bg-kw-sage/50" />
            <span className="text-xs uppercase tracking-widest text-kw-forest/50">{item.details}</span>
          </div>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            {item.description}
          </p>
          
          <div className="mb-10 text-center md:text-left">
            <h4 className="text-xs uppercase tracking-widest text-kw-forest/50 mb-4">Room Includes</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              {item.amenities.map((amenity, i) => (
                <li key={i} className="text-sm text-kw-forest/80 flex items-center justify-center md:justify-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-kw-sage" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="mb-10 border-t border-kw-forest/20 pt-4 max-w-lg">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h4 className="text-xs uppercase tracking-widest text-kw-forest/80 font-bold group-hover:text-kw-sage transition-colors">
                Standard & Common Amenities
              </h4>
              <span className="text-kw-forest/50 group-hover:text-kw-sage transition-colors text-lg">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {[...standardRoomAmenities, ...commonAmenities].map((amenity, i) => (
                      <li key={i} className="text-sm text-kw-forest/80 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-kw-sage/50" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          <div className="flex flex-col gap-4 justify-center md:justify-start">
            <Link href={`/stay/${item.id}`}>
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden border-b border-kw-forest pb-1 uppercase tracking-widest text-xs font-bold w-fit"
              >
                <span className="relative z-10 group-hover:text-kw-sage transition-colors duration-300">
                  View Details
                </span>
              </motion.button>
            </Link>
            <Link href={`/contact`}>
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden bg-kw-forest text-kw-beige px-6 py-3 uppercase tracking-widest text-xs font-bold"
              >
                <span className="relative z-10 group-hover:text-kw-sage transition-colors duration-300">
                  Book Now
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Image Side with Parallax */}
      <div className="w-full md:w-1/2 relative h-[50vh] min-h-100 md:h-full overflow-hidden z-10">
        <motion.div 
          className="absolute inset-0 w-full h-[130%] top-[-15%] hidden md:block"
          style={{ y }}
        >
          <img 
            src={item.heroImage} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </motion.div>
        
        {/* Mobile static image without parallax to prevent layout issues */}
        <div className="absolute inset-0 w-full h-full md:hidden block">
          <img 
            src={item.heroImage} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

export default function Accommodations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="experience" ref={containerRef} className="relative bg-kw-beige text-kw-forest pb-[10vh]">
      
      {/* Intro Header */}
      <div className="py-24 md:py-32 px-6 md:px-12 text-center relative z-10 bg-kw-beige">
        <span className="text-kw-sage tracking-widest uppercase text-sm mb-4 block font-medium">The Stay</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
          Theme Based Living
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-kw-forest/80 leading-relaxed">
          Each of the three ensuite bedrooms are designed keeping in mind all finer details to make your stay comfortable and memorable. Stunning views of either the manicured garden, the forest trees or our farm vegetables/fruit trees and farm tamed and untamed wildlife—bringing nature right into your room.
        </p>
      </div>

      <div className="relative">
        {accommodations.map((item, index) => (
          <AccommodationItem 
            key={index} 
            item={item} 
            index={index} 
            scrollYProgress={scrollYProgress} 
            total={accommodations.length} 
          />
        ))}
      </div>
    </section>
  );
}