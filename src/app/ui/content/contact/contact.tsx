"use client";

import styles from "@/app/ui/content/contact/contact.module.scss";

import ContactForm from "@/app/ui/content/contact/contact-form";
import { secondaryFont } from "@/app/fonts";
import {
  Contact as ContactProps,
  useScrollVisiblityObserver,
  Wide2Columns,
  Layout,
} from "ydl-react-components";
import ContactSocialMedia from "@/app/ui/content/contact/contact-social-media";

export default function Contact({ contact }: { contact: ContactProps }) {
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
