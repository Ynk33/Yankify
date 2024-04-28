import styles from "@/app/page.module.scss";

import { AlertPositions, AlertProvider, FontsProvider } from "ydl-react-components";
import NavbarWrapper from "@/app/ui/content/navbar/navbar-wrapper";
import Highlights from "@/app/ui/content/highlights/highlights";
import Galleries from "@/app/ui/content/gallery/galleries";
import Footer from "@/app/ui/content/footer/footer";
import AboutWrapper from "@/app/ui/content/about/about-wrapper";
import ContactWrapper from "@/app/ui/content/contact/contact-wrapper";
import { primaryFont, secondaryFont } from "@/app/styles/fonts";

export default function Home() {
  return (
    <FontsProvider primaryFont={primaryFont} secondaryFont={secondaryFont}>
      <AlertProvider position={AlertPositions.BOTTOM_LEFT} offset="100px">
        <main>
          <div id="main-container" className={styles.snapScrollContainer}>
            <NavbarWrapper />
            <Highlights />
            <Galleries />
            <AboutWrapper />
            <ContactWrapper />
            <Footer />
          </div>
        </main>
      </AlertProvider>
    </FontsProvider>
  );
}
