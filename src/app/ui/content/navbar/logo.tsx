import styles from "@/app/ui/content/navbar/logo.module.scss";

import { FontProvider } from "ydl-react-components";

export default function Logo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const primaryFont = FontProvider.PrimaryFont;
  const secondaryFont = FontProvider.SecondaryFont;
  return (
    <div className={styles.logoWrapper}>
      <div>
        <h1 className={primaryFont.className}>{title}</h1>
        <p className={secondaryFont.className}>{description}</p>
      </div>
    </div>
  );
}
