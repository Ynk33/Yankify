"use client";

import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { Gallery } from "@/app/lib/definitions";
import Carousel, { Fill } from "@/app/ui/components/carousel/carousel";
import GalleryItem from "@/app/ui/content/gallery/gallery-item";
import Modal from "@/app/ui/components/modal/modal";
import { useState } from "react";
import { secondaryFont } from "@/app/fonts";
import useScrollAnimation from "@/app/lib/useScrollAnimation";

export default function Gallery({ content }: { content: Gallery }) {
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

  useScrollAnimation(
    "." + styles.galleryTitle,
    styles.animate
  );

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
