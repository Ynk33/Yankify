import styles from "@/app/ui/components/social-media/social-media-component.module.scss";

import { SocialMedia } from "ydl-react-components";
import SocialButton, { SocialNetworks } from "@/app/ui/components/social-media/social-button";

export default function SocialMediaComponent({
  socialMedia,
  size = 32,
  filled = false,
  invert = false,
}: {
  socialMedia: SocialMedia;
  size?: number;
  filled?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={styles.socialMedia} style={{height: size}}>
      {socialMedia.instagram && (
        <SocialButton link={socialMedia.instagram} socialNetwork={SocialNetworks.Instagram} size={size} filled={filled} invert={invert} />
      )}
    </div>
  )
}
