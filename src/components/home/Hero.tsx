"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-kw-forest">
      {/* Grain Overlay for Hero */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}
      />
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/desktop.jpeg"
          alt="Luxury Farm Stay Desktop"
          className="hidden md:block h-full w-full object-cover"
        />
        <img
          src="/mobile.jpeg"
          alt="Luxury Farm Stay Mobile"
          className="md:hidden h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden text-kw-offwhite/80 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base mb-6 max-w-[80vw]"
        >
          A Farm to Table Luxury Farm Stay
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kw-offwhite tracking-tight mb-8 drop-shadow-lg"
        >
          Kailasa Woods
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden gap-4"
        >
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-3 bg-kw-offwhite text-kw-forest uppercase tracking-widest text-sm hover:bg-kw-beige transition-colors duration-300 shadow-xl"
            >
              Discover
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
