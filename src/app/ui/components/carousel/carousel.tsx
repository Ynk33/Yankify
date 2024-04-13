"use client";

import styles from "@/app/ui/components/carousel/carousel.module.scss";

import { Picture } from "ydl-react-components";
import CarouselNav from "@/app/ui/components/carousel/carousel-nav";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScrollingNavigation, useRepeatingCallback, Direction } from "ydl-react-components";
import CarouselArrow, {
  Direction as ArrowDirection,
} from "@/app/ui/components/carousel/carousel-arrow";
import CarouselItem from "@/app/ui/components/carousel/carousel-item";

export enum Fill {
  Cover = "cover",
  Contain = "contain",
}

type CarouselProps = {
  pictures: Picture[];
  activeIndex: number;
  fill?: Fill;
  autoPlay?: boolean;
  showArrows?: boolean;
  showCaption?: boolean;
  onSelect: (selectedIndex: number) => void;
};

export default function Carousel(props: CarouselProps) {
  // Store the index of the current displayed picture
  const [activePictureIndex, setActivePictureIndex] = useState(
    props.activeIndex
  );

  // Reference to the InnerCarousel div
  const innerCarouselRef = useRef(null);

  // List the pictures' IDs
  const picturesIds = props.pictures.map((picture) => {
    return picture.id.toString();
  });

  // Scroll to next picture
  const next = () => {
    props.onSelect(
      activePictureIndex === props.pictures.length - 1
        ? 0
        : activePictureIndex + 1
    );
  };

  // Scroll to previous picture
  const prev = () => {
    props.onSelect(
      activePictureIndex === 0
        ? props.pictures.length - 1
        : activePictureIndex - 1
    );
  };

  // Wrap the inner carousel getter into a useCallback to prevent extra re-rendering
  const getInnerCarouselRef = useCallback(() => {
    return innerCarouselRef.current;
  }, [innerCarouselRef]);

  // Scrolling behaviour
  useScrollingNavigation(
    getInnerCarouselRef,
    picturesIds,
    props.pictures[props.activeIndex].id.toString(),
    Direction.x
  );

  // Autoplay behaviour
  useRepeatingCallback(
    5000,
    props.autoPlay
      ? () => {
          if (activePictureIndex + 1 >= props.pictures.length) {
            props.onSelect(0);
          } else {
            props.onSelect(activePictureIndex + 1);
          }
        }
      : () => {}
  );

  // Update the activePictureIndex whenever the activeIndex props changes
  // This happens when the user opens the carousel from the gallery by clicking on a specific picture
  useEffect(() => {
    setActivePictureIndex(props.activeIndex);
  }, [props.activeIndex]);

  return (
    <div className={styles.carousel}>
      <div ref={innerCarouselRef} className={styles.carouselInner}>
        {props.pictures.map((picture: Picture) => {
          return (
            <CarouselItem
              key={picture.id}
              picture={picture}
              fill={props.fill ?? Fill.Cover}
              showCaption={props.showCaption}
            />
          );
        })}
      </div>

      {props.showCaption && (
        <div className={styles.textOverlay} />
      )}

      {props.showArrows && (
        <>
          <CarouselArrow direction={ArrowDirection.Left} onClick={prev} />
          <CarouselArrow direction={ArrowDirection.Right} onClick={next} />
        </>
      )}

      <CarouselNav itemCount={props.pictures.length} {...props} />
    </div>
  );
}
