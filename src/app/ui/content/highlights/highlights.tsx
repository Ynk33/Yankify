import styles from "@/app/ui/content/highlights/highlights.module.scss";

import { Galleries } from "@/app/lib/definitions";
import { fetchHighlights } from "@/app/lib/wordpress-api";
import HighlightsCarousel from "@/app/ui/content/highlights/highlights-carousel";

export default async function Highlights() {
  const highlights: Galleries = await fetchHighlights();

  return (
    <section id="highlights" className={styles.fixed}>
      <HighlightsCarousel highlights={highlights} />
    </section>
  );
}
