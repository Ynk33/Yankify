import { primaryFont, secondaryFont } from "@/app/fonts";
import styles from "@/app/ui/content/navbar/logo.module.scss";

export default function Logo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.logoWrapper}>
      <div>
        <h1 className={primaryFont.className}>{title}</h1>
        <p className={secondaryFont.className}>{description}</p>
      </div>
    </div>
  );
}
