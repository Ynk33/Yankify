import { Picture } from "ydl-react-components";
import Image from "next/image";

export default function GalleryItem({
  picture,
  onclick,
}: {
  picture: Picture;
  onclick: () => void;
}) {
  const width = picture.media_details.sizes.large.width;
  const height = picture.media_details.sizes.large.height;

  const url = picture.full_image_url;

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
