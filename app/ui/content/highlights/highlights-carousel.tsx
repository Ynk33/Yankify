"use client";

import { Carousel, Gallery } from "ydl-react-components";

import { useState } from "react";

export default function HighlightsCarousel({highlights} : {highlights: Gallery}) {

  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  return (
    <Carousel pictures={highlights.acf.photo_gallery.pictures[0]} activeIndex={currentHighlightIndex} onSelect={setCurrentHighlightIndex} autoPlay />
  );
}