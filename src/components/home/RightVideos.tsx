"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  videos: string[];
};

export default function RightVideos({ videos }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full lg:w-7/12 relative ml-auto">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {videos.map((src, idx) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full md:w-full h-80 md:h-[650px] overflow-hidden rounded-sm bg-black group ${idx === 0 ? 'md:-translate-y-6' : 'md:translate-y-6'}`} 
          >
            <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
