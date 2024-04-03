import styles from "@/app/ui/content/navbar/navbar-socials.module.scss";

import { SocialMedia } from "@/app/lib/definitions";
import SocialMediaComponent from "@/app/ui/components/social-media/social-media-component";

export default function NavbarSocials({socialMedia} : {socialMedia: SocialMedia}) {
  return (
    <div className={styles.navbarSocials}>
      <SocialMediaComponent socialMedia={socialMedia} size={24} filled />
    </div>
  )
}