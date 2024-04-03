"use client";

import styles from "@/app/ui/content/navbar/navbar.module.scss";

import { Menu } from "@/app/lib/definitions";
import NavbarItem from "@/app/ui/content/navbar/navbar-item";
import useScrollingNavigation, {
  Direction,
} from "@/app/lib/useScrollingNavigation";
import { useCallback, useEffect, useState } from "react";

export default function Navbar({ menu }: { menu: Menu }) {
  // Store the current active section
  const [activeSection, setActiveSection] = useState("highlights");

  // Store the margin to apply based on the actual navbar height
  const [margin, setMargin] = useState(0);

  // List of the items' IDs
  const itemIds = menu.map((menuItem) => {
    return menuItem.url.substring(1);
  });

  // Wrap the window getter into a useCallback to prevent extra re-rendering
  const getWindow = useCallback(() => {
    return document.getElementById("main-container");
  }, []);

  // Scroll behaviour
  const activeElement = useScrollingNavigation(
    getWindow,
    itemIds,
    activeSection,
    Direction.y,
    margin
  );

  // Get the navbarMargin from the actual navbar height.
  useEffect(() => {
    const getMarginFromNavbar = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      setMargin(navbar.getBoundingClientRect().height);
    };

    getMarginFromNavbar();

    window.addEventListener("resize", getMarginFromNavbar);
    return () => window.removeEventListener("resize", getMarginFromNavbar);
  }, [setMargin]);

  useEffect(() => {
    if (activeElement === activeSection) {
      setActiveSection("");
    }
  }, [setActiveSection, activeElement, activeSection])

  return (
    <nav>
      <ul>
        {menu.map((menuItem) => {
          return (
            <NavbarItem
              key={menuItem.ID}
              onClick={() => setActiveSection(menuItem.url.substring(1))}
              className={
                activeElement === menuItem.url.substring(1) ? styles.active : ""
              }
            >
              {menuItem.title}
            </NavbarItem>
          );
        })}
      </ul>
    </nav>
  );
}
