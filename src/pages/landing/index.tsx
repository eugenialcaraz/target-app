import React, { useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { handleMenu } from "@/state/features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { Icon, Navbar } from "@components/common";
import Phone from "@assets/images/i6.png";
import Play from "@assets/images/play.png";
import { urlFormat } from "@/utils";
import { Pages } from "../pages";

import styles from "./Landing.module.css";

const Landing = () => {
  const dispatch = useAppDispatch();
  const { menuOpen } = useAppSelector((state) => state.menu);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(urlFormat(Pages.SignIn));
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Navbar />
        <div className={`${styles.contentContainer} center flex-column`}>
          {location.pathname !== urlFormat(Pages.SignUp) && (
            <Icon name="logo" />
          )}
          <Outlet />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img
          className={styles.phoneImage}
          src={Phone}
          alt="Phone image showcasing the mobile application"
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
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(handleMenu(false))}></div>
      )}
    </div>
  );
};

export { Landing };
