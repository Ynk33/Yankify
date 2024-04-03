"use client";

import { Galleries } from "@/app/lib/definitions";
import Carousel from "@/app/ui/components/carousel/carousel";

import { useState } from "react";

export default function HighlightsCarousel({highlights} : {highlights: Galleries}) {

  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  return (
    <Carousel pictures={highlights[0].acf.photo_gallery.pictures[0]} activeIndex={currentHighlightIndex} onSelect={setCurrentHighlightIndex} autoPlay />
  );
}