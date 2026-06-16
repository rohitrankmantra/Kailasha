"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 2800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-100 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Background Panels for elegant split wipe */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-[50.5%] bg-kw-forest"
          />
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50.5%] bg-kw-forest"
          />

          <div className="relative z-10 text-kw-offwhite flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center overflow-hidden"
            >
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] text-center font-light leading-tight"
              >
                KAILASA WOODS
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, letterSpacing: "0em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="text-kw-sage uppercase text-xs mt-4 opacity-80"
              >
                A Return to Serenity
              </motion.p>
            </motion.div>
            
            {/* Subtle Loading Line */}
            <motion.div 
              className="absolute -bottom-16 w-px h-12 bg-kw-sage/30 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full bg-kw-offwhite"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
