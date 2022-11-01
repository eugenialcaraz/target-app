import React, { useEffect } from "react";

import { Icon, Navbar } from "@components/common";
import Phone from "@assets/images/i6.png";
import Play from "@assets/images/play.png";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { openMenu, closeMenu } from "@/state/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";

import styles from "./Landing.module.css";

const Landing = () => {
  const dispatch = useAppDispatch();
  const { menuOpen, activeLink } = useAppSelector((state) => state.menu);

  const location = useLocation();
  const navigate = useNavigate();

  const handleMenu = (status: boolean) => {
    status ? dispatch(openMenu()) : dispatch(closeMenu());
  };

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Navbar />
        <div className={`${styles.contentContainer} center flex-column`}>
          <Icon name="logo" />
          <Outlet />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img
          className={styles.phoneImage}
          src={Phone}
          alt="App representative video"
        />
        <button className={styles.playIconContainer} tabIndex={0}>
          <img src={Play} alt="Play icon" />
        </button>
        <div
          className={`${styles.contentContainer} ${styles.rightContent} center flex-column`}>
          <a href="!#">
            <Icon name="apple" />
          </a>
          <div className={styles.socialMediaContainer}>
            <a href="!#">
              <Icon name="facebook" />
            </a>
            <a href="!#">
              <Icon name="twitter" />
            </a>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className={styles.overlay} onClick={() => handleMenu(false)}></div>
      ) : (
        <></>
      )}
      {activeLink === "Contact" && <p>Modal</p>}
    </div>
  );
};

export { Landing };
