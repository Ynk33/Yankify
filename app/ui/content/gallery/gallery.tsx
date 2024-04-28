"use client";

import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { useEffect, useState } from "react";
import { Gallery as GalleryProps, Carousel, Fill, Modal, useWindowDimensions, useFonts } from "ydl-react-components";
import GalleryItem from "@/app/ui/content/gallery/gallery-item";

export default function Gallery({ content }: { content: GalleryProps }) {
  const secondaryFont = useFonts().secondaryFont;

  const pictures = content.acf.photo_gallery.pictures[0];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCarousel, setDisplayCarousel] = useState(true);

  const { width } = useWindowDimensions();
  const mobileWidth = Number.parseInt(styles.mobile.substring(0, styles.mobile.length - 2));

  const showModal = (selectedIndex: number) => {
    if (!displayCarousel) return;

    setActiveIndex(selectedIndex);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };
  
  // Toggle the carousel depending on the current window width
  useEffect(() => {
    setDisplayCarousel(width > mobileWidth);
  }, [width, mobileWidth]);


  return (
    <section>
      <h3 className={`${styles.galleryTitle} ${secondaryFont.className}`}>
        {content.title.rendered}
      </h3>
      <div className={styles.gallery}>
        {pictures.map((picture, i) => {
          return (
            <GalleryItem
              key={picture.id}
              picture={picture}
              onclick={() => showModal(i)}
              interactable={displayCarousel}
            />
          );
        })}
      </div>

      <Modal show={isModalOpen} onHide={hideModal}>
        <Carousel
          pictures={pictures}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          fill={Fill.Contain}
          autoPlay={false}
          showArrows
          showCaption
        />
      </Modal>
    </section>
  );
}
