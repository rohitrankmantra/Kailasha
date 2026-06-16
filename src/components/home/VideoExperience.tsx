"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";

export default function VideoExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[140%] top-[-20%]">
        <img
          src="/mandir bonfire/m (1).webp"
          alt="Kailasa Temple Heritage"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/80 z-10" />
      </motion.div>
      
      <div className="relative z-20 w-full max-w-5xl px-6 text-center">
         <motion.div 
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
         >
           <motion.span variants={itemVariants} className="text-kw-sage tracking-widest uppercase text-sm mb-6 block font-medium">
             The Heritage
           </motion.span>
           <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-5xl lg:text-6xl text-kw-offwhite leading-tight mb-8">
             Blessed by almighty Lord Shiva, <br className="hidden md:block" />
             reside at our Farm Stay.
           </motion.h2>
           <motion.div variants={itemVariants} className="font-sans font-normal text-base md:text-xl text-kw-offwhite/80 max-w-3xl mx-auto leading-relaxed space-y-6">
             <p>
               You can seek his blessing every single day by visiting our Kailasa Temple constructed keeping in mind the authenticity of natural materials that were used by our ancestors for building temples.
             </p>
             <p>
               You will be taken back by a time machine to the Satyug Era where Bholenath was worshipped in the light of diyas.
             </p>
             <p>
               The architecture blends nature with spatial grandeur, featuring old world colonial interiors, high ceiling drawing room that invites light and air to dance freely through the space.
             </p>
           </motion.div>
         </motion.div>
      </div>
    </section>
  );
}
