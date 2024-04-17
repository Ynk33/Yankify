"use client";

import styles from "@/app/ui/content/contact/contact.module.scss";

import {
  Contact as ContactProps,
  useScrollVisiblityObserver,
  Wide2Columns,
  Layout,
  FontProvider,
} from "ydl-react-components";
import ContactForm from "@/app/ui/content/contact/contact-form";
import ContactSocialMedia from "@/app/ui/content/contact/contact-social-media";

export default function Contact({ contact }: { contact: ContactProps }) {
  const secondaryFont = FontProvider.SecondaryFont;

  useScrollVisiblityObserver("." + styles.formWrapper, styles.animate);

  return (
    <section id="contact" className={styles.alt}>
      <h2 />

      <Wide2Columns picture={contact.picture} layout={Layout.ContentFirst}>
        <div className={styles.formWrapper}>
          <h1 className={secondaryFont.className}>{contact.headline}</h1>
          <p>{contact.content}</p>
          <ContactForm />
          <ContactSocialMedia social_media={contact.social_media} />
        </div>
      </Wide2Columns>
    </section>
  );
}
