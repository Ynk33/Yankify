"use client";

import styles from "@/app/ui/content/about/about.module.scss";

import Image from "next/image";
import { Picture, useFonts, useScrollVisiblityObserver } from "ydl-react-components";

export default function AboutContent({
  headline,
  subtitle,
  htmlContent,
  picture,
}: {
  headline: string;
  subtitle: string;
  htmlContent: string;
  picture: Picture;
}) {
  const secondaryFont = useFonts().secondaryFont;

  useScrollVisiblityObserver(
    "." + styles.content,
    styles.animate
  );

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1 className={secondaryFont.className}>{headline}</h1>
          <h3 className={secondaryFont.className}>
            <em>{subtitle}</em>
          </h3>
        </div>
        <div className={styles.picture}>
          <div>
            <Image
              src={picture.full_image_url}
              alt={picture.title}
              height={picture.media_details.sizes.medium.height}
              width={picture.media_details.sizes.medium.width}
            />
          </div>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
