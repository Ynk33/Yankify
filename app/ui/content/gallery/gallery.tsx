"use client";

import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { useState } from "react";
import { Gallery as GalleryProps, Carousel, Fill, Modal, FontProvider } from "ydl-react-components";
import GalleryItem from "@/app/ui/content/gallery/gallery-item";

export default function Gallery({ content }: { content: GalleryProps }) {
  const secondaryFont = FontProvider.SecondaryFont;

  const pictures = content.acf.photo_gallery.pictures[0];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

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
