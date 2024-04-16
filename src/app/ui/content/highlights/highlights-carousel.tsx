"use client";

import { Galleries, Carousel } from "ydl-react-components";

import { useState } from "react";

export default function HighlightsCarousel({highlights} : {highlights: Galleries}) {

  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  return (
    <Carousel pictures={highlights[0].acf.photo_gallery.pictures[0]} activeIndex={currentHighlightIndex} onSelect={setCurrentHighlightIndex} autoPlay />
  );
}