import React from "react";
import Icon from "../../assets/icons/Icon";
import SignUp from "./signIn/SignIn";
import Phone from "../../assets/images/i6.png";
import Play from "../../assets/images/play.png";

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
          <SignUp />
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
      </div>
    </div>
  );
};

export default LandingContainer;
