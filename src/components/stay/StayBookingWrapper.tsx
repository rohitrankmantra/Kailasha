"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  stayTitle: string;
};

export default function StayBookingWrapper({ stayTitle }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full mt-16 mb-8 relative z-20">
        <motion.button 
          onClick={() => setIsPopupOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden px-14 py-5 bg-kw-forest text-kw-offwhite uppercase tracking-widest text-sm font-bold shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>Reserve {stayTitle}</span>
            <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
          </span>
          <div className="absolute inset-0 bg-kw-sage opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-kw-offwhite w-full max-w-lg rounded-sm shadow-2xl overflow-hidden z-10"
            >
              <div className="bg-kw-forest text-kw-offwhite p-6 relative">
                <button 
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 text-kw-offwhite/70 hover:text-kw-offwhite transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="font-serif text-2xl mb-1">Book Your Stay</h3>
                <p className="text-kw-offwhite/80 text-sm tracking-wide">{stayTitle}</p>
              </div>

              <div className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Check-in</label>
                      <input type="date" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Check-out</label>
                      <input type="date" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Phone</label>
                      <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                  </div>

                  <button type="submit" className="w-full relative group overflow-hidden py-4 mt-8 bg-kw-forest text-kw-offwhite uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>Submit Request</span>
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-kw-sage opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
