import React from "react";
import styles from "./LandingContainer.module.css";
import Icon from "../../assets/icons/Icon";
import SignUp from "./signUp/SignIn";

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
      <div className={styles.rightContainer}></div>
    </div>
  );
};

export default LandingContainer;
