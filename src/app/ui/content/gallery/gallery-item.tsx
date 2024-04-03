import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { Picture } from "@/app/lib/definitions";
import useScrollAnimation from "@/app/lib/useScrollAnimation";
import Image from "next/image";
import { useEffect } from "react";

export default function GalleryItem({
  picture,
  onclick,
}: {
  picture: Picture;
  onclick: () => void;
}) {
  const width = picture.media_details.sizes.large.width * 0.5;
  const height = picture.media_details.sizes.large.height * 0.5;

  const url = picture.full_image_url;

  useScrollAnimation(
    "#picture" + picture.id.toString(),
    styles.animate,
  );

  return (
    <div>
      <Image
        id={`picture${picture.id.toString()}`}
        src={url}
        width={width}
        height={height}
        alt={picture.title}
        onClick={onclick}
      />
    </div>
  );
}
