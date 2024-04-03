import styles from "@/app/ui/content/footer/footer.module.scss";

import { fetchContact, fetchFooter } from "@/app/lib/wordpress-api";
import SocialMediaComponent from "@/app/ui/components/social-media/social-media-component";

export default async function Footer() {
  const footer = await fetchFooter();
  const contact = await fetchContact();

  return (
    <div className={styles.footer}>
      <p>{footer.content}</p>
      <div>
        <SocialMediaComponent socialMedia={contact.social_media} invert filled />
      </div>
    </div>
  );
}
