"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Gallery() {
  return (
    <div className="h-[104rem] py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonStage = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Wedding Stage & Mandap Decor
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Elevate your wedding with stunning stage & mandap decor—luxe fabrics,
        floral cascades, and enchanting lighting for a picture-perfect backdrop.
        Traditional elegance or modern glam, tailored to your dream vision.
      </p>
    </div>
  );
};

const SkeletonEntry = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Reception, Photo-Booth & Grand Entry
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Make your grand entrance unforgettable with our breathtaking aisle
        designs. Adorned with floral runners, candlelit pathways, or suspended
        installations, we transform your walk to the altar into a scene from a
        fairy tale. Every petal and prop is placed to highlight your moment in
        the spotlight.
      </p>
    </div>
  );
};
const SkeletonLight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Light Show & LED Effects
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Create unforgettable wedding moments with dynamic light shows—lasers,
        LED floors, and holograms. Sync with music, add fog, or pair with
        pyrotechnics for a dazzling celebration.
      </p>
    </div>
  );
};
const SkeletonHaldi = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Haldi & Mehndi Setup
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Brighten your pre-wedding rituals with our vibrant haldi and mehndi
        setups. We design cheerful spaces with fresh marigold chandeliers,
        turmeric-dipped floral hangings, and low seating adorned in pastel
        linens—blending tradition with Instagram-worthy aesthetics.
      </p>
    </div>
  );
};
const SkeletonPuja = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Puja Samagri</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Honor tradition with sacred puja samagri—carefully arranged for every
        wedding ritual. From fresh flowers to holy threads, we provide all
        essentials to ensure ceremonies flow with devotion and authenticity.{" "}
      </p>
    </div>
  );
};
const SkeletonScreen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Large Screen Displays
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our large-scale displays transform wedding receptions into
        breathtaking spectacles. Synchronized fireworks erupt in perfect harmony
        with your first dance, while dazzling flame effects and low-lying fog
        create mesmerizing visuals across your venue. High-resolution projection
        mapping turns walls and ceilings into dynamic canvases, amplifying every
        special moment with stunning visual impact. All systems are
        professionally engineered for seamless integration with your event
        timeline and venue specifications.
      </p>
    </div>
  );
};

const SkeletonPyro = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Pyros, Smoke Shots, Confetti & Fireworks{" "}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Think fire-breathing entrances, smoke so thick your first dance looks
        like a movie scene, and fireworks that actually justify the rental
        price. We handle the permits, you get the gasps. No venue restrictions,
        no half-baked sparklers—just pyro that makes your wedding look like the
        main event.
      </p>
    </div>
  );
};
const SkeletonDrone = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Drone Phptography
      </p>

      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Drone coverage adds WOW-factor to your album—think golden-hour portraits
        from above, confetti explosions in 360°, and venue flyovers that’ll give
        you chills
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Wedding Stage & Mandap Decor",
    content: <SkeletonStage />,
    className: "md:col-span-2",
    thumbnail: "/images/wedding-stage-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonDrone />,
    title: "Drone Photography",
    className: "col-span-1",
    thumbnail: "/images/drone.jpg",
  },
  {
    id: 3,
    content: <SkeletonLight />,
    title: "Light Show & LED Effects",
    className: "col-span-1",
    thumbnail: "/images/light-show.jpg",
  },
   {
    id: 4,
    content: <SkeletonEntry />,
    title: "Reception, Photo-Booth & Grand Entry",
    className: "md:col-span-2",
    thumbnail: "/images/entrance-white.jpg",
  },
   {
    id: 5,
    content: <SkeletonScreen />,
    title: "Large Screen Display",
    className: "md:col-span-2",
    thumbnail: "/images/large-screen.jpg",
  },
  {
    id: 6,
    content: <SkeletonPuja />,
    title: "Puja Samagri",
    className: "md:col-span-1",
    thumbnail: "/images/puja.jpg",
  },

  {
    id: 7,
    content: <SkeletonPyro />,
    title: "Pyros, Smoke Shots, Confetti & Fireworks",
    className: "md:col-span-1",
    thumbnail: "/images/pyro.jpg",
  },
   {
    id: 8,
    content: <SkeletonHaldi />,
    title: "Haldi & Mehndi Setup",
    className: "md:col-span-2",
    thumbnail: "/images/haldi.jpg",
  },
 
];
