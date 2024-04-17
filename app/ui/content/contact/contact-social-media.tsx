import styles from "@/app/ui/content/contact/contact.module.scss";

import { FontProvider, SocialMedia, SocialMediaComponent } from "ydl-react-components";

export default function ContactSocialMedia({
  social_media,
}: {
  social_media: SocialMedia;
}) {
  const secondaryFont = FontProvider.SecondaryFont;

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
