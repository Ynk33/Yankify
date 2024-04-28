"use client";

import styles from "@/app/ui/content/navbar/logo.module.scss";

import { useFonts } from "ydl-react-components";

export default function Logo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const fonts = useFonts();
  const primaryFont = fonts.primaryFont;
  const secondaryFont = fonts.secondaryFont;
  return (
    <div className={styles.logoWrapper}>
      <div>
        <h1 className={primaryFont.className}>{title}</h1>
        <p className={secondaryFont.className}>{description}</p>
      </div>
    </div>
  );
}
