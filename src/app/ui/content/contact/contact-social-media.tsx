import styles from "@/app/ui/content/contact/contact.module.scss";

import { SocialMedia } from "@/app/lib/definitions";
import { secondaryFont } from "@/app/fonts";
import SocialMediaComponent from "@/app/ui/components/social-media/social-media-component";

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
