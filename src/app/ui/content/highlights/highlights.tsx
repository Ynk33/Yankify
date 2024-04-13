import styles from "@/app/ui/content/highlights/highlights.module.scss";

import { Galleries } from "ydl-react-components";
import { WordpressAPI } from "ydl-react-components";
import HighlightsCarousel from "@/app/ui/content/highlights/highlights-carousel";

export default async function Highlights() {
  const highlights: Galleries = await WordpressAPI.getInstance().fetchHighlights();

  return (
    <section id="highlights" className={styles.fixed}>
      <HighlightsCarousel highlights={highlights} />
    </section>
  );
}
