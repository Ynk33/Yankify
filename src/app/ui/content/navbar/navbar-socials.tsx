import styles from "@/app/ui/content/navbar/navbar-socials.module.scss";

import { SocialMedia as SocialMediaProps, SocialMediaComponent } from "ydl-react-components";

export default function NavbarSocials({socialMedia} : {socialMedia: SocialMediaProps}) {
  return (
    <div className={styles.navbarSocials}>
      <SocialMediaComponent socialMedia={socialMedia} size={24} filled />
    </div>
  )
}