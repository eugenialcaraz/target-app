import React, { useEffect } from "react";
import { Icon } from "@components/common";
import {
  openMenu,
  closeMenu,
  setActiveLink,
} from "@/state/features/menu/menuSlice";

import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { menuOpen, activeLink } = useAppSelector((state) => state.menu);

  const location = useLocation();

  const handleMenu = (status: boolean) => {
    status ? dispatch(openMenu()) : dispatch(closeMenu());
  };

  const handleActiveLink = (activeLink: string) => {
    dispatch(setActiveLink(activeLink));
    dispatch(closeMenu());
  };

  const navLinks = [
    { href: "/about", name: "About" },
    //I'm not including "Contact" here as it's a Modal and it's not supposed to change url path
    //However, array structure is made in case more links are needed in the future
  ];

  useEffect(() => {
    location.pathname === "/about" && activeLink !== "/about"
      ? dispatch(setActiveLink("About"))
      : dispatch(setActiveLink(""));
  }, []);

  return (
    <>
      <button
        className={styles.iconContainer}
        tabIndex={0}
        onClick={() => handleMenu(!menuOpen)}>
        {!menuOpen ? <Icon name="menu" /> : <Icon name="close" />}
      </button>
      <nav
        className={`${styles.menu} flex-column ${
          menuOpen ? styles.menuOpen : styles.menuClosed
        }`}>
        {navLinks.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            onClick={() => handleActiveLink(link.name)}
            className={activeLink === link.name ? styles.activeLink : ""}
            tabIndex={menuOpen ? 0 : -1}>
            {link.name}
          </Link>
        ))}
        <button tabIndex={menuOpen ? 0 : -1}>Contact</button>
      </nav>
    </>
  );
};

export { Navbar };
