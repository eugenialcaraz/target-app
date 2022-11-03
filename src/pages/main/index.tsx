import React from "react";

import { toggleMenu } from "@/state/features";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { Navbar } from "@components/common";
import Map from "@assets/images/map.png";

import styles from "./Main.module.css";
import { UserActions } from "@components/main/userActions";

const Main = () => {
  const dispatch = useAppDispatch();
  const { menuOpen } = useAppSelector((state) => state.menu);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Navbar />
        <div className={`${styles.contentContainer} center flex-column`}>
          <UserActions />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img className={styles.map} src={Map} alt="Map default image" />
      </div>
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleMenu())}></div>
      )}
    </div>
  );
};

export { Main };
