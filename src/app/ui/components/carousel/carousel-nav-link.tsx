import styles from "@/app/ui/components/carousel/carousel.module.scss";

import { MouseEvent } from "react";

export default function CarouselNavLink({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="#" className={active ? styles.active : ""} onClick={handleClick} />
  );
}
