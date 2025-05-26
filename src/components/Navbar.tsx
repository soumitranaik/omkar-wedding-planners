// "use client";
// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   NavbarButton,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "@/components/ui/resizable-navbar";
// import { useState } from "react";

// export function NavbarMain() {
//   const [visible, setVisible] = useState(false);

//   const navItems = [
//     {
//       name: "About",
//       link: "#about",
//     },
//     {
//       name: "Services",
//       link: "#features",
//     },
//     {
//       name: "Testimonials",
//       link: "#testimonials",
//     },
//     {
//         name: "Location",
//         link: "#location",
//       },
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="relative w-full" id="navbar">
//       <Navbar>
//         {/* Desktop Navigation */}
//         <NavBody>
//           <NavItems items={navItems} />
//           <NavbarLogo/>
//           <div className="flex items-center gap-4">
//             <NavbarButton variant="secondary">Book Now</NavbarButton>
//           </div>
//         </NavBody>

//         {/* Mobile Navigation */}
//         <MobileNav>
//           <MobileNavHeader>
//             <NavbarLogo/>
//             <MobileNavToggle
//               isOpen={isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             />
//           </MobileNavHeader>

//           <MobileNavMenu
//             isOpen={isMobileMenuOpen}
//             onClose={() => setIsMobileMenuOpen(false)}
//           >
//             {navItems.map((item, idx) => (
//               <a
//                 key={`mobile-link-${idx}`}
//                 href={item.link}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="relative text-neutral-100"
//               >
//                 <span className="block">{item.name}</span>
//               </a>
//             ))}
//             <div className="flex w-full flex-col gap-4">
//               <NavbarButton
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 variant="primary"
//                 className="w-full"
//               >
//                 Book a call
//               </NavbarButton>
//             </div>
//           </MobileNavMenu>
//         </MobileNav>
//       </Navbar>

//       {/* Navbar */}
//     </div>
//   );
// }

"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
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
            src={ isScrolled ? "/logo-red.png" : "/logo-1.png"} // Replace with your logo path
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
        <button className="md:hidden">
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
        </button>
      </div>
    </motion.nav>
    </div>
  );
}
