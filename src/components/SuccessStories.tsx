"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Feeding Hope During COVID-19 Crisis",
    description:
      "When the COVID-19 pandemic struck and thousands of migrant workers found themselves stranded without food or resources on their journey home, we knew we had to act. Our team mobilized quickly to prepare and distribute fresh, hot biryanis to more than 1,000 people during those challenging times. Seeing the relief and gratitude on their faces as they received a warm meal reminded us why we do what we do—food isn't just sustenance, it's care, comfort, and connection when people need it most.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/covid19.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fueling Champions at Fatorda",
    description:
      "When the prestigious sepak takraw tournament came to Fatorda, Goa, we took on the critical responsibility of nourishing elite athletes whose performance depended on precise nutrition. Understanding that each athlete had unique dietary requirements—from high-protein meals for muscle recovery to specific carbohydrate timing for energy optimization—our culinary team worked closely with sports nutritionists to craft personalized meal plans. We prepared over 500 specialized meals throughout the tournament, carefully balancing macronutrients, avoiding common allergens, and timing meals to align with training and competition schedules. Watching these incredible athletes perform at their peak, knowing we played a part in fueling their success, reinforced our commitment to precision and excellence in every dish we serve.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/sepak-takraw.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "A Trusted Name Among Goa’s Elite",
    description:
      "Over the years, we’ve had the distinct honor of serving some of Goa’s most influential personalities during the most important celebrations of their lives—their weddings. From luxurious beachfront ceremonies to elegant heritage venues, our culinary team has been part of unforgettable experiences, crafting personalized menus that reflect tradition, taste, and a touch of modern flair. Each event is a testament to our dedication to quality, flavor, and flawless execution. We’re proud that our service and food have earned the trust of Goa’s top names — politicians, entrepreneurs, and public figures—who continue to choose us when it matters most. Your celebration deserves nothing less."
,
    content: (
      <Image
          src="/images/elite.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
    ),
  }
];
export function SuccessStories() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
