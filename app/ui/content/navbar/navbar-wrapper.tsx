import { WordpressAPI } from "ydl-react-components";
import Logo from "@/app/ui/content/navbar/logo";
import Navbar from "@/app/ui/content/navbar/navbar";
import NavbarSocials from "@/app/ui/content/navbar/navbar-socials";

import styles from "@/app/ui/content/navbar/navbar.module.scss";

export default async function NavbarWrapper() {
  const settings = await WordpressAPI.fetchSettings();
  const menu = await WordpressAPI.fetchMenu();
  const contact = await WordpressAPI.fetchContact();

  return (
    <div id="navbar" className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSocials socialMedia={contact.social_media} />
        <Logo title={settings.name} description={settings.description} />
        <Navbar menu={menu} />
      </div>
    </div>
  );
}
