import styles from "@/app/ui/content/gallery/gallery.module.scss";

import { WordpressAPI } from "ydl-react-components";
import Gallery from "@/app/ui/content/gallery/gallery";

export default async function Galleries() {
  const galleries = await WordpressAPI.getInstance().fetchGalleries();

  return (
    <section id="galleries" className={styles.neutral}>
      <h2 />
      {galleries.map((gallery) => {
        return <Gallery key={gallery.id} content={gallery} />;
      })}
    </section>
  );
}
