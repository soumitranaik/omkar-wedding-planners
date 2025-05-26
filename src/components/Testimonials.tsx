"use client";

import React, { useState } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Best Wedding Planner in town with reasonable rates. Services include breakfast, lunch, dinner, buffet, parcel packets, birthday decorations & arrangements, wedding decorations & arrangements, baby shower arrangements, naming ceremony of baby arrangements, fruit & vegtables cravings, video shooting, photography, mandop, tables & chairs, DJ music, boquets, return gifts, arrangements for office conference & meetings, picnic arrangements, any other indoor & outdoor functions. Various transport facility also avaliable.",
      name: "Shailendra Udaykar",
      location: "Cuncolim, Goa",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "Your team went above and beyond. We felt so comfortable, and the memories you helped create will stay with us forever.The attention to detail, seamless coordination, and genuine warmth you brought to our celebration created memories that will stay with us forever. Thank you for turning our vision into a day more beautiful than we ever imagined.",
      name: "Rajesh Jadhav",
      location: "Margao, Goa",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "The decorations were straight out of a dream. Every corner was picture-perfect and matched our vision exactly. Our guests couldn’t stop talking about how beautiful everything looked! Our guests couldn’t stop talking about how beautiful everything looked! You transformed our venue into a magical wonderland we’ll never forget.",
      name: "Ankit Naik",
      location: "Ponda, Goa",
      stars: 5,
    },
    {
      id: 4,
      quote:
        "The mandap setup, the entrance, the centerpieces — everything was flawless. Elegant, tasteful, and full of love. Thank you for creating such a beautiful atmosphere.  Thank you for creating such a breathtaking atmosphere that perfectly captured our love story and left our guests in awe. The magic you created still lingers in every photo and memory.",
      name: "Shraddha Naik",
      location: "Canacona, Goa",
      stars: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="">
      <div
        className=" rounded-md flex flex-col py-32 antialiased bg-rose-50 items-center justify-center relative overflow-hidden"
        id="testimonials"
      >
        <h3 className="text-center text-neutral-800 text-4xl font-bold py-4">
          Testimonials
        </h3>
        <p className="text-neutral-600 pb-8 px-4 text-center">
          Heartfelt words from couples who trusted us with their most special
          day.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-3xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].stars
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-600 mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-red-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-red-800 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-red-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
