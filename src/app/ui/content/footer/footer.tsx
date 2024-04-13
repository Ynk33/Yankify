import styles from "@/app/ui/content/footer/footer.module.scss";

import { WordpressAPI } from "ydl-react-components";
import SocialMediaComponent from "@/app/ui/components/social-media/social-media-component";

export default async function Footer() {
  const footer = await WordpressAPI.getInstance().fetchFooter();
  const contact = await WordpressAPI.getInstance().fetchContact();

  return (
    <div className={styles.footer}>
      <p>{footer.content}</p>
      <div>
        <SocialMediaComponent socialMedia={contact.social_media} invert filled />
      </div>
    </div>
  );
}
