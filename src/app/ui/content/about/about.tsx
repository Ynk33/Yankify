"use client";

import styles from "@/app/ui/content/about/about.module.scss";

import AboutContent from "@/app/ui/content/about/about-content";
import Wide2Columns, {
  Layout,
} from "@/app/ui/components/layouts/wide-2-columns/wide-2-columns";
import { About as AboutProps } from "ydl-react-components";

export default function About({ about }: { about: AboutProps }) {
  return (
    <section id="about" className={styles.colored}>
      <h2 />
      <Wide2Columns
        picture={about.background}
        layout={Layout.PictureFirst}
      >
        <AboutContent
          headline={about.headline}
          subtitle={about.subtitle}
          htmlContent={about.content}
          picture={about.picture}
        />
      </Wide2Columns>
    </section>
  );
}
