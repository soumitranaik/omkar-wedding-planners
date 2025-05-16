"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Gallery() {
  return (
    <div className="h-[84rem] py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Wedding Stage Decor
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Transform your wedding stage into a breathtaking focal point with our
        exquisite decor services. From lush floral arches and romantic drapery
        to sparkling chandeliers and personalized backdrops, we create dreamlike
        settings that reflect your love story. Our designs blend elegance,
        ambiance, and Instagram-worthy details to make your ceremony
        unforgettable.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Bridal Entrance Decor
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Make your grand entrance unforgettable with our breathtaking aisle
        designs. Adorned with floral runners, candlelit pathways, or suspended
        installations, we transform your walk to the altar into a scene from a
        fairy tale. Every petal and prop is placed to highlight your moment in
        the spotlight.{" "}
      </p>{" "}
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Mandap decor</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Elevate your sacred vows with our stunning mandap designs, where
        tradition meets artistry. We craft exquisite mandaps adorned with fresh
        flowers, intricate drapes, and ornate details to create a divine setting
        for your wedding ceremony. From lush floral canopies to crystal-adorned
        structures, our decor transforms your mandap into a heavenly backdrop
        for your most precious moments.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
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
const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Puja Samagri
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Honor tradition with sacred puja samagri—carefully arranged for every wedding ritual. From fresh flowers to holy threads, we provide all essentials to ensure ceremonies flow with devotion and authenticity.        </p>
      </div>
    );
  };
const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Reception, Photo-Booth & Grand Entry 
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        From floral-framed arches and smoke effects to synchronized LED pathways and petal showers, we create unforgettable moments that set the tone for your celebration.
        </p>
      </div>
    );
  };
  

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/gallery1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/gallery2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/gallery3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/haldi.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "/images/puja.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: "/images/entrance.jpg",
  },
];
