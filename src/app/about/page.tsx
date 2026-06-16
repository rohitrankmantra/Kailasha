"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-125 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/main house/h (6).png"
            alt="About Kailasa Woods"
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
            The Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light tracking-wide text-3xl md:text-4xl lg:text-5xl text-kw-offwhite mb-6 leading-tight max-w-4xl mx-auto"
          >
            Kailasa Woods isn&apos;t just a place you see; <br className="hidden md:block" /> it&apos;s an atmosphere you feel.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-kw-sage text-lg md:text-xl max-w-2xl mx-auto font-sans font-light tracking-wide"
          >
            It is the quiet rustle of the bamboo forest, the warmth of old-world charm, and the luxury of unhurried time.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 text-base md:text-lg text-kw-forest/80 leading-relaxed font-sans"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-kw-forest mb-6">
                  Explore Our Estate
                </h2>
                <p>
                  Set within a sprawling 45,000 sq. ft. estate, our property features 12,000 sq. ft. of elegant, theme-based concept living. Whether you are looking for an immersive playful escape or a quiet bamboo forest retreat, you&apos;ll find it here.
                </p>
                <p>
                  Discover the rhythm of the hills and step into our uniquely crafted accommodations. From our signature farm-to-table dining to the quiet rustle of the bamboo forest, every moment is an invitation to stay present.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-kw-forest">Farm-to-Table</h4>
                    <p className="text-sm">Organic, fresh-cooked meals sourced directly from our estate gardens. Our 12-hour kitchen ensures quality in every bite.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-kw-forest">24/7 Support</h4>
                    <p className="text-sm">Rounding out our hospitality is 24/7 dining support and our famous complimentary breakfast service.</p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <Link href="/stay">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="uppercase tracking-widest text-sm font-bold border-b-2 border-kw-forest pb-1 hover:text-kw-sage hover:border-kw-sage transition-all duration-300"
                    >
                      Discover Our Rooms
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Images Grid Content */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 md:gap-3 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-span-2 h-64 md:h-100 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/about.jpeg" 
                  alt="Kailasa Woods Estate" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-48 md:h-64 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/gym/g (2).webp" 
                  alt="Nature at Kailasa" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="h-48 md:h-64 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/mandir bonfire/m (1).webp" 
                  alt="Peaceful Evenings" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
