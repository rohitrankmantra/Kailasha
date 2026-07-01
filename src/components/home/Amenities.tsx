"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const amenitiesList = [
  {
    name: "Farm-to-Table Organic Meals",
    description: "Savor fresh, organic meals prepared with ingredients grown right here on our estate. Experience the authentic taste of nature with every bite.",
    image: "/food/f (1).webp"
  },
  {
    name: "High-Speed Wifi",
    description: "Stay connected with reliable high-speed internet access throughout the property, perfect for both work and leisure.",
    image: "/wifi-1.jpg"
  },
  {
    name: "Swimming Pool",
    description: "Take a refreshing dip in our pristine swimming pool, surrounded by nature for a truly serene experience.",
    image: "/swimmingpool/2.webp"
  },
  {
    name: "Outdoor Sitting",
    description: "Enjoy the fresh air and beautiful views from our outdoor sitting area, perfect for morning coffee or evening conversations.",
    image: "/kailasha-new-iamges/6.webp"
  },
  {
    name: "Gym",
    description: "Maintain your fitness routine in our well-equipped gym with modern equipment and a motivating atmosphere.",
    image: "/new/5.jpg"
  },
  {
    name: "Recreation and Games",
    description: "Engage in various recreational activities and games that keep you entertained and connected with nature during your stay.",
    image: "/new/1.webp"
  },
  {
    name: "Kailasa Temple",
    description: "Find peace and spirituality at our beautiful Kailasa Temple, a perfect place for meditation and reflection.",
    image: "/mandir bonfire/m (2).webp"
  },
  {
    name: "Bonfire Area",
    description: "Gather around the bonfire in the evening for warmth, stories, and unforgettable moments under the stars.",
    image: "/new/6.jpg"
  },
  {
    name: "Library",
    description: "Escape into a good book in our cozy library, stocked with a diverse collection for all reading interests.",
    image: "/new/13.jpg"
  },
  {
    name: "Farm Walks",
    description: "Explore our organic farm on guided walks, learn about sustainable farming, and connect with the land.",
    image: "/new/4.png"
  },
  {
    name: "Pet Friendly",
    description: "Bring your furry friends along! Our pet-friendly property ensures a comfortable stay for you and your beloved pets.",
    image: "/pets/p (1).JPG"
  },
  {
    name: "24/7 Power Backup",
    description: "Enjoy uninterrupted stay with our reliable 24/7 power backup system, ensuring your comfort at all times.",
    image: "/kailasha-new-iamges/1.webp"
  },
  {
    name: "Tea and Souvenirs",
    description: "Relish a warm cup of tea and browse through our curated selection of unique souvenirs to take home memories of your stay.",
    image: "/new/1.webp"
  },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="amenities" className="py-16 md:py-20 bg-kw-stone text-kw-forest relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-24 lg:px-48 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-kw-sage tracking-widest uppercase text-sm mb-6 block font-medium">The Estate</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            Curated Amenities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-kw-forest/80 text-lg max-w-2xl mx-auto"
          >
            Beyond the luxury of our rooms, Kailasa Woods offers a curated selection of amenities designed for your comfort. From fresh-cooked, farm-to-table organic meals to spacious living areas, every detail is crafted to nourish your soul.
          </motion.p>
        </div>
        
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
              className="border-b border-kw-forest/10"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-forest/30" />
                  <span className="text-base md:text-lg tracking-wide font-medium text-kw-forest/80">{amenity.name}</span>
                </div>
                {openIndex === index ? <ChevronUp className="text-kw-forest/60" size={20} /> : <ChevronDown className="text-kw-forest/60" size={20} />}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-8">
                      <div className="mb-4 h-96 w-full overflow-hidden rounded-lg relative">
                        <Image
                          src={amenity.image}
                          alt={amenity.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <p className="text-kw-forest/70">{amenity.description}</p>
                    </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}