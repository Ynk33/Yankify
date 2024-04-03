import styles from "@/app/ui/components/social-media/social-button.module.scss";

import instaLogo from "@/public/socials/instagram.svg";
import Image from "next/image";

export enum SocialNetworks {
  Instagram = "instagram",
}

export default function SocialButton({
  socialNetwork,
  link,
  size = 32,
  invert = false,
  filled = false,
}: {
  socialNetwork: SocialNetworks;
  link: string;
  size?: number;
  invert?: boolean;
  filled?: boolean;
}) {
  const socialNetworkLogoLookUpTable = { instagram: instaLogo };

  return (
    <a
      href={link}
      target="_blank"
      className={`
        ${styles.socialLink}
        ${invert ? styles.invert : ""}
        ${filled ? styles.filled : ""}
      `}
    >
      <Image
        src={socialNetworkLogoLookUpTable[socialNetwork]}
        alt={socialNetwork}
        width={size}
        height={size}
      />
    </a>
  );
}
