import React from "react";

import { toggleMenu } from "@/state/features";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { Navbar, ContactModal } from "@components/common";
import { Welcome } from "@components/main/welcome";

import styles from "./Main.module.css";

const Main = () => {
  const dispatch = useAppDispatch();
  const { menuOpen } = useAppSelector((state) => state.menu);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Navbar />
        <div className={`${styles.contentContainer} center flex-column`}>
          <Welcome />
        </div>
      </div>
      <div className={styles.rightContainer}> Map</div>
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleMenu())}></div>
      )}
      <ContactModal />
    </div>
  );
};

export { Main };
