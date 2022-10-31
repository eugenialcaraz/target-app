import React from "react";
import { Icon } from "@components/common";
import {
  openMenu,
  closeMenu,
  setActiveLink,
} from "@/state/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { menuOpen, activeLink } = useAppSelector((state) => state.menu);

  const handleMenu = (status: boolean) => {
    status ? dispatch(openMenu()) : dispatch(closeMenu());
  };

  const handleActiveLink = (activeLink: string) => {
    dispatch(setActiveLink(activeLink));
    dispatch(closeMenu());
  };
  const navLinks = [
    { href: "!#", name: "About" },
    { href: "!#", name: "Contact" },
  ];

  return (
    <>
      <button
        className={styles.iconContainer}
        tabIndex={0}
        onClick={() => handleMenu(!menuOpen)}>
        {!menuOpen ? <Icon name="menu" /> : <Icon name="close" />}
      </button>
      <nav
        className={`${styles.menu} ${
          menuOpen ? styles.menuOpen : styles.menuClosed
        }`}>
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.name}
            onClick={() => handleActiveLink(link.name)}
            className={activeLink === link.name ? styles.activeLink : ""}
            tabIndex={menuOpen ? 0 : -1}>
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
};

export { Navbar };
