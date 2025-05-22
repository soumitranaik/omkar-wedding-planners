"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10 mt-20" id="about">
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 text-left bg-white border-solid border-1 border-red-200">
          <Image
            src="/images/decoration.jpg"
            alt="jordans"
            height="700"
            width="800"
            className="object-contain rounded-md"
          />
          <p className="text-base sm:text-xl text-red-900 mt-4 mb-4 ">
            Wedding Decoration
          </p>

          <p className="text-sm text-neutral-600">
            We specialize in exquisite wedding decoration services that blend
            tradition with modern elegance. From stunning floral arrangements to
            bespoke stage setups, our team crafts unforgettable experiences
            tailored to your vision. Let us bring beauty, charm, and magic to
            your special day.
          </p>
       
        </BackgroundGradient>
      </div>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 text-left bg-white border-solid border-1 border-pink-200">
          <Image
            src="/images/3793.jpg"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-md"
          />
          <p className="text-base sm:text-xl text-red-900 mt-4 mb-4">
            Catering
          </p>

          <p className="text-sm text-neutral-600 ">
            Our catering services deliver a culinary experience as
            unforgettable as your big day. From traditional favorites to gourmet
            delights, we craft personalized menus that satisfy every palate.
            Exceptional taste, elegant presentation, and flawless
            service—because your celebration deserves nothing less.
          </p>
          
        </BackgroundGradient>
      </div>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 text-left bg-white border-solid border-1 border-pink-200">
          <Image
            src="/images/photography.jpg"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-md"
          />
          <p className="text-base sm:text-xl text-red-900 mt-4 mb-4 ">
            Photography & Videography
          </p>

          <p className="text-sm text-neutral-600 ">
          Our wedding photography and videography services are all about preserving the magic of your special day. With an artistic eye, creative storytelling, and professional precision, we capture every emotion, smile, and heartfelt moment—so you can relive your beautiful love story for a lifetime.
          </p>
          
        </BackgroundGradient>
      </div>
    </div>
  );
}
