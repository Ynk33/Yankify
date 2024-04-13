"use client";

import styles from "@/app/ui/components/layouts/wide-2-columns/wide-2-columns.module.scss";

import { Picture } from "ydl-react-components";
import { ReactNode } from "react";
import Image from "next/image";
import { useScrollVisiblityObserver } from "ydl-react-components";

export enum Layout {
  PictureFirst,
  ContentFirst,
}

export default function Wide2Columns({
  picture,
  layout = Layout.ContentFirst,
  children,
  className = "",
  animate = false,
}: {
  picture: Picture;
  layout?: Layout;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}) {

  useScrollVisiblityObserver(
    "." + styles.picture + " img",
    animate ? styles.animate : ""
  )

  return (
    <div
      className={`
        ${className}
        ${styles.container}
        ${layout === Layout.ContentFirst ? styles.reverse : ""}
      `}
    >
      <div className={styles.picture}>
        <Image
          src={picture.full_image_url}
          alt={picture.title}
          height={picture.media_details.height}
          width={picture.media_details.width}
          className={animate ? "" : styles.fixed}
        />
      </div>
      
      <div
        className={`${styles.content}`}
      >
        {children}
      </div>
    </div>
  );
}
