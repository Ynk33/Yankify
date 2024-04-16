import styles from "@/app/ui/content/footer/footer.module.scss";

import { WordpressAPI, SocialMediaComponent } from "ydl-react-components";

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
