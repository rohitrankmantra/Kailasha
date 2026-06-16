"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-kw-stone text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/main house/h (5).png"
            alt="Contact Kailasa Woods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-kw-stone" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-kw-offwhite/80 tracking-widest uppercase text-sm mb-6 block font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light tracking-wide text-4xl md:text-5xl lg:text-6xl text-kw-offwhite mb-6"
          >
            Reach Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-kw-offwhite/90 text-lg max-w-2xl mx-auto"
          >
            Looking forward to host you soon, cause hosting for us is pleasure, building relations and extending our Kailasa family.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-8">Contact Information</h2>
                <p className="text-kw-forest/80 leading-relaxed mb-12">
                  Whether you have a question about our accommodations, organic farming, or you&apos;re ready to book your peaceful retreat, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-kw-forest/20 flex items-center justify-center shrink-0 group-hover:bg-kw-forest group-hover:text-kw-offwhite transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-kw-sage font-bold mb-2">Location</h3>
                    <a href="https://maps.app.goo.gl/zytAeMaRPJ1ZDJqu5" target="_blank" rel="noopener noreferrer" className="text-lg text-kw-forest/90 hover:text-kw-forest hover:underline underline-offset-4 leading-relaxed">
                      Kailasa Woods, Mulberry Farms,<br />
                      Bharatwala, Bisht Gaon<br />
                      Dehradun, Uttarakhand 248003
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-kw-forest/20 flex items-center justify-center shrink-0 group-hover:bg-kw-forest group-hover:text-kw-offwhite transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-kw-sage font-bold mb-2">Call Us</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+918954848480" className="text-lg text-kw-forest/90 hover:text-kw-forest hover:underline underline-offset-4">
                        +91 89548 48480
                      </a>
                      <a href="tel:+919639999919" className="text-lg text-kw-forest/90 hover:text-kw-forest hover:underline underline-offset-4">
                        +91 96399 99919
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-kw-forest/20 flex items-center justify-center shrink-0 group-hover:bg-kw-forest group-hover:text-kw-offwhite transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-kw-sage font-bold mb-2">Email Us</h3>
                    <a href="mailto:kailasawoodsfarmstay@gmail.com" className="text-lg text-kw-forest/90 hover:text-kw-forest hover:underline underline-offset-4">
                      kailasawoodsfarmstay@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-kw-beige p-8 md:p-12 rounded-sm"
            >
              <h3 className="font-serif text-3xl mb-8 text-kw-forest">Send an Inquiry</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-kw-forest/60 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-kw-forest/30 py-3 text-kw-forest focus:outline-none focus:border-kw-forest transition-colors placeholder:text-kw-forest/30"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-kw-forest/60 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-transparent border-b border-kw-forest/30 py-3 text-kw-forest focus:outline-none focus:border-kw-forest transition-colors placeholder:text-kw-forest/30"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-kw-forest/60 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-transparent border-b border-kw-forest/30 py-3 text-kw-forest focus:outline-none focus:border-kw-forest transition-colors placeholder:text-kw-forest/30"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-kw-forest/60 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-kw-forest/30 py-3 text-kw-forest focus:outline-none focus:border-kw-forest transition-colors resize-none placeholder:text-kw-forest/30"
                    placeholder="Tell us about your stay requirements..."
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-kw-forest text-kw-offwhite py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#16291d] transition-colors mt-4"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
