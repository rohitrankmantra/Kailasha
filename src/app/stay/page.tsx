"use client";

import { motion } from "framer-motion";
import { staysData as accommodations } from "@/data/stays";
import Link from "next/link";

const amenitiesList = [
  "Farm-to-Table Organic Meals",
  "High-Speed Wifi",
  "Living Area",
  "Swimming Pool",
  "Outdoor Deck Sitting",
  "Gym",
  "Recreation",
  "Kailasa Temple",
  "Bonfire Area",
  "Library",
  "Farm Walks"
];

export default function StayPage() {
  return (
    <main className="min-h-screen bg-kw-beige text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/videoimg.jpg"
            alt="The Stay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-kw-beige/20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-kw-offwhite/80 tracking-widest uppercase text-sm mb-6 block font-medium"
          >
            The Stay
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light tracking-wide text-4xl md:text-5xl lg:text-6xl text-kw-offwhite mb-6"
          >
            Theme Based Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-kw-offwhite/90 text-lg max-w-2xl mx-auto"
          >
            Experience slow living and earthy luxury. Each room is thoughtfully designed to blend comfort with nature, providing stunning views of manicured gardens, forest trees, and vibrant wildlife.
          </motion.p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-24 bg-kw-beige relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24 md:gap-32">
            {accommodations.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-4/3 w-full overflow-hidden"
                  >
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:px-8 lg:px-12 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                      <span className="text-kw-sage tracking-widest font-mono text-sm">0{index + 1}</span>
                      <div className="h-px w-12 bg-kw-sage/50" />
                      <span className="text-xs uppercase tracking-widest text-kw-forest/50">{item.details}</span>
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-kw-forest">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-8">
                      {item.description}
                    </p>
                    
                    <div className="mb-10">
                      <h4 className="text-xs uppercase tracking-widest text-kw-forest/50 mb-4">Room Includes</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                        {item.amenities.map((amenity, i) => (
                          <li key={i} className="text-sm text-kw-forest/80 flex items-center justify-center md:justify-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-kw-sage" />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <Link href={`/stay/${item.id}`}>
                        <motion.button 
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group overflow-hidden border-b border-kw-forest pb-1 uppercase tracking-widest text-xs font-bold w-fit text-kw-forest"
                        >
                          <span className="relative z-10 group-hover:text-kw-sage transition-colors duration-300">
                            View Room Details
                          </span>
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities Section */}
      <section className="py-24 bg-kw-offwhite relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-kw-sage/50" />
              <span className="text-xs uppercase tracking-widest text-kw-forest/50">Shared Spaces</span>
              <div className="h-px w-12 bg-kw-sage/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-kw-forest">
              Common Amenities & Recreation
            </h2>
            <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-16">
              The common areas are an integral part of your stay at Kailasa Woods. Whether you want to stay active, relax with a book, or enjoy an evening by the bonfire, our shared spaces offer something for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 border-t border-kw-forest/10 mt-12 text-center md:text-left">
              {amenitiesList.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="py-6 border-b border-kw-forest/10 flex items-center justify-center md:justify-between gap-2 group hover:pl-0 md:hover:pl-4 transition-all duration-300"
                >
                  <h3 className="font-sans font-medium text-lg text-kw-forest group-hover:text-kw-sage transition-colors">{amenity}</h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-sage opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}