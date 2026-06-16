"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export default function LocationReachUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="location" className="bg-kw-beige text-kw-forest relative overflow-hidden flex flex-col lg:flex-row w-full">
      
      {/* Left Content (Text) */}
      <div ref={ref} className="w-full lg:w-1/2 py-10 md:py-16 lg:py-20 flex justify-center lg:justify-end relative z-10 bg-kw-beige">
        <div className="w-full max-w-160 px-6 md:px-12 lg:pr-16 lg:pl-12 flex flex-col justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <div>
              <motion.span variants={itemVariants} className="text-kw-sage tracking-widest uppercase text-xs mb-3 block font-medium">
                Location & Reach Us
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight text-kw-forest">
                Tucked Away, <br />
                <span className="italic text-kw-sage">Yet Accessible.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-kw-forest/80 text-sm md:text-base leading-relaxed font-light max-w-lg">
                Hidden in the slow-paced village of Bharatwala, Bisht Gaon, Kailasa Woods offers complete seclusion without the grueling journey.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-5 mt-2">
              <div className="flex flex-col group">
                <div className="w-10 h-px bg-kw-sage/50 group-hover:bg-kw-sage group-hover:w-16 transition-all duration-500 mb-2" />
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] text-kw-sage mb-1 font-bold">From Dehradun Airport</h4>
                  <p className="text-xl md:text-2xl font-serif text-kw-forest">~ 35 km <span className="text-xs font-sans text-kw-forest/60 ml-2">/ 60 mins drive</span></p>
                </div>
              </div>

              <div className="flex flex-col group">
                <div className="w-10 h-px bg-kw-sage/50 group-hover:bg-kw-sage group-hover:w-16 transition-all duration-500 mb-2" />
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] text-kw-sage mb-1 font-bold">From Dehradun Station</h4>
                  <p className="text-xl md:text-2xl font-serif text-kw-forest">~ 12 km <span className="text-xs font-sans text-kw-forest/60 ml-2">/ 35 mins drive</span></p>
                </div>
              </div>

              <div className="flex flex-col group">
                <div className="w-10 h-px bg-kw-sage/50 group-hover:bg-kw-sage group-hover:w-16 transition-all duration-500 mb-2" />
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] text-kw-sage mb-1 font-bold">From Mussoorie</h4>
                  <p className="text-xl md:text-2xl font-serif text-kw-forest">~ 25 km <span className="text-xs font-sans text-kw-forest/60 ml-2">/ 50 mins drive</span></p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-6">
              <a 
                href="https://maps.app.goo.gl/zytAeMaRPJ1ZDJqu5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold border-b border-kw-forest pb-1 hover:text-kw-sage hover:border-kw-sage transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Content (Map - Fully Filled) */}
      <div className="w-full lg:w-1/2 h-87.5 md:h-112.5 lg:h-auto relative z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27544.597204481017!2d78.0559368!3d30.3738018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d72111d4e0e5%3A0xc6c4293f06d71f54!2sBisht%20Gaon%2C%20Bharatwala%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(100%) sepia(20%) hue-rotate(50deg) contrast(90%) opacity(90%)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-kw-beige/20" />
        </motion.div>
      </div>

    </section>
  );
}
