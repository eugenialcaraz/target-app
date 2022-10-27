import React from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./SignIn.module.css";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <h1>TARGET MVD</h1>
        <h2>Find people near you & Connect</h2>
        <p>
          Create a target wherever on the map, specify your interest: Travel,
          Dating, Music, etc and start conecting with others who share your
          interest.
        </p>
      </div>
      <form className={styles.form}>
        <Input label="email" inputType="signUp" />
        <Input label="password" inputType="signUp" />
        <Button buttonType="submit" value="sign in" />
        <a className={styles.forgotPassword} href="!#">
          Forgot your password?
        </a>
      </form>
      <div className={styles.bottomLinks}>
        <a className={styles.facebookLogin} href="!#">
          Connect with facebook
        </a>
        <div className={styles.divider}></div>
        <a className={styles.signUp} href="!#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignUp;
