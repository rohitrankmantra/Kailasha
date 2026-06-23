"use client";

import { motion, Variants } from "framer-motion";
import { staysData as accommodations } from "@/data/stays";
import Link from "next/link";
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
    name: "Living Area",
    description: "Relax in our spacious, comfortable living areas designed for unwinding and spending quality time with loved ones.",
    image: "/family/f (1).webp"
  },
  {
    name: "Swimming Pool",
    description: "Take a refreshing dip in our pristine swimming pool, surrounded by nature for a truly serene experience.",
    image: "/swimmingpool/2.webp"
  },
  {
    name: "Outdoor Deck Sitting",
    description: "Enjoy the fresh air and beautiful views from our outdoor deck sitting area, perfect for morning coffee or evening conversations.",
    image: "/kailasha-new-iamges/6.webp"
  },
  {
    name: "Gym",
    description: "Maintain your fitness routine in our well-equipped gym with modern equipment and a motivating atmosphere.",
    image: "/new/5.jpg"
  },
  {
    name: "Recreation",
    description: "Engage in various recreational activities that keep you entertained and connected with nature during your stay.",
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

export default function StayPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

                    <div className="flex flex-col gap-4 justify-center md:justify-start">
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
            <Link href={`/contact`}>
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden bg-kw-forest text-kw-beige px-6 py-3 uppercase tracking-widest text-xs font-bold"
              >
                <span className="relative z-10 group-hover:text-kw-sage transition-colors duration-300">
                  Book Now
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-kw-sage/50" />
              <span className="text-xs uppercase tracking-widest text-kw-forest/50">Shared Spaces</span>
              <div className="h-px w-12 bg-kw-sage/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-kw-forest text-left">
              Common Amenities & Recreation
            </h2>
            <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-16 text-left">
              The common areas are an integral part of your stay at Kailasa Woods. Whether you want to stay active, relax with a book, or enjoy an evening by the bonfire, our shared spaces offer something for everyone.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 border-t border-kw-forest/10 mt-12"
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
                      <div className="w-1.5 h-1.5 rounded-full bg-kw-sage" />
                      <h3 className="font-sans font-medium text-lg text-kw-forest">{amenity.name}</h3>
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
                      <div className="mb-4 h-64 w-full overflow-hidden rounded-lg relative">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}