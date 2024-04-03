import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

export default function NavbarItem({
  onClick,
  className,
  children,
}: {
  onClick: () => void;
  className: string;
  children: ReactNode;
}) {

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  }

  return (
    <li onClick={handleClick}>
      <Link href="/" className={className} onClick={handleClick}>
        {children}
      </Link>
    </li>
  );
}
