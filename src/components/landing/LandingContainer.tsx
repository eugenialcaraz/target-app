import React from "react";
import Icon from "@assets/icons/Icon";
import SignIn from "./signIn/SignIn";
import Phone from "@assets/images/i6.png";
import Play from "@assets/images/play.png";

import styles from "./LandingContainer.module.css";

const LandingContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <button className={styles.iconContainer} tabIndex={0}>
          <Icon name="menu" />
        </button>
        <div className={styles.contentContainer}>
          <Icon name="logo" />
          <SignIn />
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
        <div className={`${styles.contentContainer} ${styles.rightContent}`}>
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
    </div>
  );
};

export default LandingContainer;
