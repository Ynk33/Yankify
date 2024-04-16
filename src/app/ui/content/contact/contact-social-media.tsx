import styles from "@/app/ui/content/contact/contact.module.scss";

import { SocialMedia, SocialMediaComponent } from "ydl-react-components";
import { secondaryFont } from "@/app/fonts";

export default function ContactSocialMedia({
  social_media,
}: {
  social_media: SocialMedia;
}) {
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
