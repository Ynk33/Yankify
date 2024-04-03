import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { fetchGalleries } from "@/app/lib/wordpress-api";
import Gallery from "@/app/ui/content/gallery/gallery";

export default async function Galleries() {
  const galleries = await fetchGalleries();

  return (
    <section id="galleries" className={styles.neutral}>
      <h2 />
      {galleries.map((gallery) => {
        return <Gallery key={gallery.id} content={gallery} />;
      })}
    </section>
  );
}
