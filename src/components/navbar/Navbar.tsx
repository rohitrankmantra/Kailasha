"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "The Stay", href: "/stay" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if the current page has a dark hero section.
  // We exclude the home page ("/") here so that its navbar links default to the dark theme color (text-kw-forest).
  const hasDarkHero = pathname === "/about" || pathname === "/stay" || pathname === "/contact" || pathname === "/gallery" || pathname.startsWith("/stay/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          (isScrolled || mobileMenuOpen)
            ? "bg-kw-offwhite/90 backdrop-blur-md py-4 shadow-sm text-kw-forest"
            : hasDarkHero 
              ? "bg-transparent py-6 text-kw-offwhite"
              : "bg-transparent py-6 text-kw-forest"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50 relative group" onClick={() => setMobileMenuOpen(false)}>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
              KAILASA WOODS
            </h1>
            <div className={cn("h-px w-0 transition-all duration-300 group-hover:w-full", (isScrolled || mobileMenuOpen || !hasDarkHero) ? "bg-kw-forest" : "bg-kw-offwhite")} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-sm uppercase tracking-widest font-medium opacity-70 hover:opacity-100 relative group overflow-hidden transition-opacity"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={cn(
              "px-6 py-2 border uppercase tracking-widest text-sm transition-colors duration-300",
              (isScrolled || mobileMenuOpen || !hasDarkHero)
                ? "border-kw-forest text-kw-forest hover:bg-kw-forest hover:text-kw-offwhite" 
                : "border-kw-offwhite text-kw-offwhite hover:bg-kw-offwhite hover:text-kw-forest"
            )}>
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className="text-kw-forest" /> : <Menu size={28} className={(isScrolled || !hasDarkHero) ? "text-kw-forest" : "text-kw-offwhite"} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-kw-offwhite flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col items-center gap-6 md:gap-8 w-full px-6 mt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-3xl md:text-4xl text-kw-forest/70 hover:text-kw-forest uppercase tracking-widest transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-6 md:mt-8 w-full max-w-xs"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-8 py-3 bg-kw-forest text-kw-offwhite uppercase tracking-widest text-sm w-full"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
