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
        Create the perfect backdrop for your sacred vows with elegant mandap and stage decorations that reflect your style and traditions. Our designs range from classic floral arrangements with roses and jasmine to modern setups with graceful draping and ambient lighting.
Choose from traditional wooden mandaps adorned with fresh blooms, contemporary crystal and fabric designs, or grand stages with intricate backdrops. We incorporate meaningful elements like sacred fire pits, decorative pillars, and ornate canopies that frame your ceremony perfectly.
Every setup is customized to your venue and vision, ensuring your wedding stage becomes the focal point where your new journey begins.
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
        Transform your pre-wedding celebrations with beautiful, traditional setups that honor these cherished rituals. Our Haldi ceremonies feature vibrant yellow and orange decorations with fresh marigold flowers, banana leaves, and comfortable seating arrangements where family can gather to apply the sacred turmeric paste.
For Mehndi celebrations, we create cozy, colorful spaces with low seating, bright cushions, and canopies draped in rich fabrics. Fresh flower arrangements, traditional brass items, and ambient lighting set the perfect mood for intricate henna application and joyful celebrations with your closest friends and family.
We handle all the details—from backdrop decorations to comfortable seating arrangements—so you can focus on enjoying these meaningful traditions. Each setup is designed to create beautiful photo opportunities while keeping the authentic spirit of these beloved ceremonies.
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
        Honor your wedding traditions with our complete collection of sacred
        puja samagri, thoughtfully prepared and beautifully arranged for every
        meaningful ritual throughout your special day. We provide all the
        essential items your ceremonies require, from vibrant fresh flowers like
        marigolds and roses to sacred red threads, pure ghee, fragrant incense,
        colorful rangoli powders, blessed rice, and traditional brass items.
        Each element is carefully selected for its spiritual significance and
        arranged with respect for ancient customs. Our experienced team
        understands the importance of authenticity in your wedding rituals,
        ensuring that every item meets traditional standards while being
        perfectly timed for your ceremony.
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
        Our big screens and displays make your wedding and reception absolutely
        magical. We time fireworks to go off perfectly with your first dance,
        and add beautiful flame effects and smooth fog that flows across your
        venue. We can also project amazing images onto your walls and ceilings,
        turning them into moving works of art that make every special moment
        even more incredible. Everything is set up by professionals to work
        smoothly with your wedding schedule and fit perfectly in your venue.
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
        Light up your celebration with stunning special effects that create
        unforgettable moments. Our professional pyrotechnics add dramatic bursts
        of color and excitement to your biggest moments—from your entrance to
        the grand finale. Colorful smoke shots create dreamy, romantic backdrops
        perfect for photos and dancing. Confetti cannons shower guests with
        biodegradable petals or streamers during your kiss, cake cutting, or
        exit. Fireworks displays light up the night sky with beautiful patterns
        that guests will remember forever. All effects are handled by certified
        professionals with full safety measures. We time everything perfectly
        with your photographer and venue to create those magical wow moments
        that make your wedding truly special.
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
        Capture your wedding from stunning aerial perspectives that showcase the full beauty of your celebration. Our professional drone photography creates breathtaking shots of your venue, ceremony setup, and guest arrangements from above.
Get dramatic footage of your grand entrance, outdoor ceremonies, and reception festivities that traditional cameras simply can't achieve. Perfect for destination weddings, garden venues, and creating cinematic moments that wow your guests.
All flights are operated by licensed pilots following safety regulations, ensuring beautiful results without disrupting your special day.
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
