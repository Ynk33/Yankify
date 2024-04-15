import styles from "@/app/ui/content/navbar/navbar-socials.module.scss";

import { SocialMedia as SocialMediaProps } from "ydl-react-components";
import SocialMediaComponent from "@/app/ui/components/social-media/social-media-component";

export default function NavbarSocials({socialMedia} : {socialMedia: SocialMediaProps}) {
  return (
    <div className={styles.navbarSocials}>
      <SocialMediaComponent socialMedia={socialMedia} size={24} filled />
    </div>
  )
}