"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className=" rounded-md flex flex-col py-32 antialiased bg-rose-50 items-center justify-center relative overflow-hidden" id="testimonials">
      <h3 className="text-center text-neutral-800 text-4xl font-bold py-4">
        Testimonials
      </h3>
      <p className="text-neutral-600 pb-8">
        Heartfelt words from couples who trusted us with their most special day.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Best Wedding Planner in town with reasonable rates. Services include breakfast, lunch, dinner, buffet, parcel packets, birthday decorations & arrangements, wedding decorations & arrangements, baby shower arrangements, naming ceremony of baby arrangements, fruit & vegtables cravings, video shooting, photography, mandop, tables & chairs, DJ music, boquets, return gifts, arrangements for office conference & meetings, picnic arrangements, any other indoor & outdoor functions. Various transport facility also avaliable.",
    name: "Shailendra Udaykar",
    title: "Cuncolim, Goa",
  },
  {
    quote:
      "Your team went above and beyond. We felt so comfortable, and the memories you helped create will stay with us forever.",
    name: "Rajesh Jadhav",
    title: "Margao, Goa",
  },
  {
    quote: "The decorations were straight out of a dream. Every corner was picture-perfect and matched our vision exactly. Our guests couldn’t stop talking about how beautiful everything looked!",
    name: "Ankit Naik",
    title: "Balli, Quepem, Goa",
  },
  {
    quote:
      "The mandap setup, the aisle, the centerpieces — everything was flawless. Elegant, tasteful, and full of love. Thank you for creating such a beautiful atmosphere.",
    name: "Shraddha Naik",
    title: "Canacona, Goa",
  },
];
