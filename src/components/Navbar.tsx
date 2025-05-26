
"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
     { name: "Location", href: "#location" },
  ];

  return (
    <div id="navbar">
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-colors ${
        isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between ">
        {/* Logo that shrinks on scroll */}
        <motion.div
          animate={{
            width: isScrolled ? 120 : 140,
            height: isScrolled ? 60 : 100,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex-shrink-0"
        >
          <Image
            src={ isScrolled ? "/logo-red.png" : "/logo-1.png"} 
            alt="Company Logo"
            width={200}
            height={90}
            className="h-full py-1 object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-red-800" : "text-white"
              } hover:text-primary-500`}
            >
              {link.name}
            </a>
          ))}
          <button className="rounded-md bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-900">
            Book Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6 text-red-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-red-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
      </div>

      
    </motion.nav>
    
     <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <div className="absolute right-0 top-0 h-full w-full bg-white shadow-xl">
                <div className="flex h-full flex-col p-6">
                  <div className="mb-8 flex justify-end">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2"
                      aria-label="Close menu"
                    >
                      
                    </button>
                  </div>

                  <nav className="flex flex-1 flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-red-800 hover:text-primary-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                    <button className="mt-4 rounded-md bg-red-800 px-6 py-3 text-lg font-medium text-white hover:bg-red-900">
                      Book Now
                    </button>
                  </nav>
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
         </div>
  );
}
