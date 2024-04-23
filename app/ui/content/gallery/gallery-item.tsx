import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { Picture } from "ydl-react-components";
import Image from "next/image";

export default function GalleryItem({
  picture,
  onclick,
  interactable = false
}: {
  picture: Picture;
  onclick: () => void;
  interactable?: Boolean;
}) {
  const width = picture.media_details.sizes.large.width;
  const height = picture.media_details.sizes.large.height;

  const url = picture.full_image_url;

  const className = interactable ? '' : styles.disabled;

  return (
    <div>
      <Image
        id={`picture${picture.id.toString()}`}
        className={className}
        src={url}
        width={width}
        height={height}
        alt={picture.title}
        onClick={onclick}
      />
    </div>
  );
}
