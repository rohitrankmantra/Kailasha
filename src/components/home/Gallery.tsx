"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/g1.jpeg",
  "/g2.jpeg",
  "/g3.jpeg",
  "/g4.jpeg",
  "/g5.jpeg",
  "/g6.jpeg",
  "/g7.jpeg",
  "/g8.jpeg",
  "/g1.jpeg",
  "/g2.jpeg",
  "/g3.jpeg",
];

const videos = ["/v1.mp4", "/v2.mp4"];

type GalleryItem = {
  type: "image" | "video";
  src: string;
};

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-35%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Create gallery with videos centered in left and right columns
  const column1Items: GalleryItem[] = [
    { type: "image", src: images[0] },
    { type: "image", src: images[1] },
    { type: "video", src: videos[0] },
    { type: "image", src: images[2] },
    { type: "image", src: images[3] },
  ];

  const column2Items: GalleryItem[] = [
    { type: "image", src: images[4] },
    { type: "image", src: images[5] },
    { type: "image", src: images[6] },
    { type: "image", src: images[7] },
    { type: "image", src: images[8] },
  ];

  const column3Items: GalleryItem[] = [
    { type: "image", src: images[9] },
    { type: "image", src: images[10] },
    { type: "video", src: videos[1] },
    { type: "image", src: images[0] },
    { type: "image", src: images[1] },
  ];

  const renderItems = (items: GalleryItem[]) => (
    items.map((item, idx) => (
      <div key={`${item.type}-${idx}`} className="w-full h-[30%] object-cover hover-trigger overflow-hidden rounded-sm bg-black">
        {item.type === "image" ? (
          <img 
            src={item.src} 
            alt="Gallery" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <video 
            src={item.src} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay" />
      </div>
    ))
  );

  return (
    <section id="gallery" ref={containerRef} className="py-12 bg-kw-offwhite overflow-hidden h-[150vh] md:h-[130vh] flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-6 flex gap-1 md:gap-2 h-[80vh] md:h-[90vh]">
        
        <motion.div style={{ y: y1 }} className="w-1/3 flex flex-col gap-1 md:gap-2 h-[180%] -mt-[15%]">
          {renderItems(column1Items)}
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="w-1/3 flex flex-col gap-1 md:gap-2 h-[180%]">
          {renderItems(column2Items)}
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="w-1/3 flex flex-col gap-1 md:gap-2 h-[180%] -mt-[10%]">
          {renderItems(column3Items)}
        </motion.div>

      </div>
    </section>
  );
}