"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  topSrc: string;
  bottomSrc: string;
};

export default function ExperienceVideos({ topSrc, bottomSrc }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full lg:w-7/12 relative">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-80 md:h-90 lg:h-80 overflow-hidden rounded-sm bg-black"
        >
          <video
            src={topSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-80 md:h-90 lg:h-80 overflow-hidden rounded-sm bg-black"
        >
          <video
            src={bottomSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay" />
        </motion.div>
      </div>
    </div>
  );
}

