import styles from "@/app/ui/content/highlights/highlights.module.scss";

import { Gallery, WordpressAPI } from "ydl-react-components";
import HighlightsCarousel from "@/app/ui/content/highlights/highlights-carousel";

export default async function Highlights() {
  const highlights: Gallery = await WordpressAPI.fetchHighlights();

  return highlights && (
    <section id="highlights" className={styles.fixed}>
      <HighlightsCarousel highlights={highlights} />
    </section>
  );
}
