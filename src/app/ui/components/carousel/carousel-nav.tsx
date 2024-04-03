import styles from "@/app/ui/components/carousel/carousel.module.scss";

import CarouselNavLink from "@/app/ui/components/carousel/carousel-nav-link";
import { ReactNode } from "react";

export default function CarouselNav({
  itemCount,
  activeIndex = 0,
  onSelect,
}: {
  itemCount: number;
  activeIndex?: number;
  onSelect: (selectedIndex: number) => void;
}) {

  const links: ReactNode[] = [];
  for (let i = 0; i < itemCount; i++) {
    links.push(
      <CarouselNavLink
        key={i}
        active={i === activeIndex}
        onClick={() => onSelect(i)}
      />
    );
  }

  return (
    <div className={styles.carouselNavigation}>
      {links}
    </div>
  );
}
