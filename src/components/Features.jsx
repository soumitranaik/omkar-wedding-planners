"use client"; // Only needed if using interactivity/hooks, optional otherwise

import React from "react";
import {
  PiFlowerLotusThin,
  PiMicrophoneStageThin,
  PiMusicNotesThin,
  PiCameraThin,
} from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { LiaUtensilsSolid } from "react-icons/lia";

export const WeddingFeatures = () => {
  const features = [
    {
      icon: <PiFlowerLotusThin />,
      title: "Floral Design",
      description:
        "Custom floral arrangements tailored to your vision and style, from bouquets to centerpieces, ensuring your wedding blooms with beauty and elegance.",
    },
    {
      icon: <PiMicrophoneStageThin />,
      title: "Event Coordination",
      description:
        "We meticulously manage every detail, from scheduling to vendor coordination, so you can relax and enjoy a seamless wedding experience.",
    },
    {
      icon: <HiOutlineBuildingLibrary />,
      title: "Venue Selection",
      description:
        "Choose from a curated list of stunning and diverse venues, including indoor and outdoor options, to create the perfect backdrop for your celebration.",
    },
    {
      icon: <PiMusicNotesThin />,
      title: "Entertainment",
      description:
        "From live bands to DJs and performances, we offer entertainment options that keep your guests dancing and entertained throughout the entire event.",
    },
    {
      icon: <PiCameraThin />,
      title: "Photography & Video",
      description:
        "Our professional photographers and videographers capture every magical moment, preserving your memories with high-quality photos and cinematic videos.",
    },
    {
      icon: <LiaUtensilsSolid />,
      title: "Catering",
      description:
        "Indulge in a wide variety of catering options, from exquisite hors d'oeuvres to custom-designed wedding cakes, all tailored to your taste and preferences.",
    },
  ];

  return (
    <section
      className="relative bg-white  md:px-8 flex flex-col  items-center text-center mx-auto"
      id="features"
    >
      <div className="container absolute inset-x-0 bottom-0 h-px w-full bg-pink-200/80 flex text-center mx-auto">
        <div className="  absolute mx-auto h-px w-90 bg-gradient-to-r from-transparent via-red-800 to-transparent" />
      </div>
      <div className="container py-16 px-8 md:px-32 my-32">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">Why Choose Us</h2>
          <p className="mt-4 text-neutral-600 px-4 md:px-24">
            All your event related needs & requirements under one roof. We handle every detail so you
            can focus on celebrating. Your vision, our expertise - perfectly
            aligned for unforgettable moments
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-red-50 py-10 rounded-lg shadow hover:shadow-md transition hover:bg-white"
            >
              <div className="text-red-700 text-6xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
