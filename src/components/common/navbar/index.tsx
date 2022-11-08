import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import {
  toggleMenu,
  toggleModal,
  handleModalStatus,
  ModalStatus,
} from "@/state/features";

import { Icon } from "@components/common";
import { Pages } from "@/types";
import { urlFormat } from "@/utils";

import styles from "./Navbar.module.css";

const navLinks = [
  { href: urlFormat(Pages.About), name: Pages.About },
  //I'm not including "Contact" here as it's a Modal and it's not supposed to change url path
  //However, array structure is made in case more links are needed in the future
];

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { menuOpen } = useAppSelector((state) => state.menu);

  const location = useLocation();

  const handleContact = () => {
    dispatch(handleModalStatus(ModalStatus.Default));
    dispatch(toggleModal());
    dispatch(toggleMenu());
  };

  return (
    <>
      <button
        className={styles.iconContainer}
        tabIndex={0}
        onClick={() => dispatch(toggleMenu())}>
        <Icon name={menuOpen ? "close" : "menu"} />
      </button>
      <nav
        className={`${styles.menu} flex-column ${
          menuOpen ? styles.menuOpen : styles.menuClosed
        }`}>
        {navLinks.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            onClick={() => dispatch(toggleMenu())}
            className={link.href === location.pathname ? styles.activeLink : ""}
            tabIndex={menuOpen ? 0 : -1}>
            {link.name}
          </Link>
        ))}
        <button tabIndex={menuOpen ? 0 : -1} onClick={handleContact}>
          {Pages.Contact}
        </button>
      </nav>
    </>
  );
};

export { Navbar };
