"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const amenitiesList = [
  { name: "Farm-to-Table Organic Food", img: "/food/f (1).webp" },
  { name: "Complimentary Breakfast", img: "/food/f (2).webp" },
  { name: "24/7 Dining Support", img: "/food/f (3).webp" },
  { name: "12-Hour Running Kitchen", img: "/food/f (4).webp" },
  { name: "Gym", img: "/gym/g (3).webp" },
  { name: "Recreation Area", img: "/gym/g (1).webp" },
  { name: "Bon Fire", img: "/mandir bonfire/m (1).webp" },
  { name: "Library", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" },
  { name: "Wi-Fi", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Amenities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only update position occasionally or use simple bounds relative to container
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="amenities" className="py-16 md:py-20 bg-kw-stone text-kw-forest relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          <div className="w-full md:w-1/3">
            <span className="text-kw-sage tracking-widest uppercase text-sm mb-6 block font-medium">The Estate</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl mb-6"
            >
              Curated <br /> Amenities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-kw-forest/80 text-lg"
            >
              Beyond the luxury of our rooms, Kailasa Woods offers a curated selection of amenities designed for your comfort. From our 12-hour running kitchen serving fresh-cooked, farm-to-table organic meals to our 24/7 dining support, every detail is crafted to nourish your soul.
            </motion.p>
          </div>
          
          <div 
            className="w-full md:w-2/3 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Floating Image */}
            <motion.div
              className="hidden md:block absolute pointer-events-none z-50 w-64 h-48 rounded-lg overflow-hidden shadow-2xl"
              animate={{
                x: mousePos.x + 20,
                y: mousePos.y - 100,
                opacity: hoveredIndex !== null ? 1 : 0,
                scale: hoveredIndex !== null ? 1 : 0.8,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            >
              {hoveredIndex !== null && (
                <img 
                  src={amenitiesList[hoveredIndex].img} 
                  alt={amenitiesList[hoveredIndex].name} 
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 relative z-10"
            >
              {amenitiesList.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative flex items-center gap-4 py-4 cursor-pointer group"
                >
                  <div className="absolute bottom-0 left-0 w-full h-px bg-kw-forest/10" />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-px bg-kw-forest origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ width: "100%" }}
                  />
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-forest/30 group-hover:bg-kw-forest transition-colors duration-300" />
                  <span className="text-base md:text-lg tracking-wide group-hover:translate-x-2 transition-transform duration-300 font-medium text-kw-forest/80 group-hover:text-kw-forest">{amenity.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
