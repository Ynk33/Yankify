import styles from "@/app/ui/content/contact/contact.module.scss";

import { SocialMedia, SocialMediaComponent, useFonts } from "ydl-react-components";

export default function ContactSocialMedia({
  social_media,
}: {
  social_media: SocialMedia;
}) {
  const secondaryFont = useFonts().secondaryFont;

  return (
    <div className={styles.socialMedia}>
      <hr />
      <p className={secondaryFont.className}>
        {social_media.headline}
      </p>
      <div className={styles.links}>
        <SocialMediaComponent socialMedia={social_media} filled />
      </div>
    </div>
  );
}
