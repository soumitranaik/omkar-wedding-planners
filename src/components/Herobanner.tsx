"use client";

import { motion } from "motion/react";
import { div } from "motion/react-client";
import { BackgroundGradientCards } from "./GradientCards";
import { FiPhoneCall } from "react-icons/fi";


export function HeroSectionOne() {
  return (
    <div className="relative w-full bg-neutral-50">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source src="/videos/bg-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center h-screen justify-center"></div>
      <div className="relative mx-auto py-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-pink-200/80 ">
          <div className="absolute mx-auto h-px w-90 bg-gradient-to-r from-transparent via-pink-800 to-transparent" />
        </div>
        <div className="px-4 py-30 md:py-50">
          <h1 className="relative z-10 mx-auto  max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-white">
            {"Best Wedding Planners & Decorators in Goa"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl font-normal text-neutral-100"
          >
            Goa's Most Trusted Wedding Planners & Decorators – Traditional to
            Grand Celebrations
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-red-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-900">
              Explore Features
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 ">
              Call Now
            </button>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative z-10 mt-20 rounded-3xl border border-red-800 bg-rose-50 p-4 shadow-md"
          >
            <div className="w-full h-auto overflow-hidden rounded-xl px-8 md:px-16 py-20 border bg-white border-rose-50 text-center">
              <div className="flex flex-col items-center justify-center"><h2 className="text-4xl font-bold py-4 text-neutral-800">About Us</h2>
              <p className="py-4 text-neutral-800">
                At Omkar's Wedding Planners, we specialize in creating unforgettable weddings and
                vibrant events. Our expert team blends tradition with innovation
                to craft seamless, joyous celebrations that leave lasting
                memories. Let us bring your dream event to life!
                <br /><br />
                From intimate gatherings to grand weddings, we handle every
                detail with precision and passion—stunning decor, flawless
                coordination, and personalized touches that reflect your unique
                love story. Let us transform your vision into reality, ensuring
                a stress-free experience from the first consultation to the
                final farewell. Your dream celebration starts with Omkar's Wedding Planners.
              </p>
              <button className="w-60 my-4 flex items-center justify-center gap-2  transform rounded-lg border border-gray-300 bg-red-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-900 ">
                <FiPhoneCall /> Call Now
              </button>
              </div>
              <BackgroundGradientCards />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
