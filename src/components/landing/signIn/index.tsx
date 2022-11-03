import React from "react";
import { Link } from "react-router-dom";

import { SignInForm } from "@components/common";
import { urlFormat } from "@/utils/urlFormat";
import { Pages } from "@/pages";

import styles from "./SignIn.module.css";

const SignIn = () => (
  <div className={`${styles.container} flex-column`}>
    <div className={styles.welcomeContainer}>
      <h1>TARGET MVD</h1>
      <h2>Find people near you & Connect</h2>
      <p>
        Create a target wherever on the map, specify your interest: Travel,
        Dating, Music, etc and start conecting with others who share your
        interest.
      </p>
    </div>
    <SignInForm />
    <div className={`${styles.bottomLinks} flex-column`}>
      <a className={`${styles.facebookLogin} uppercase`} href="!#">
        Connect with facebook
      </a>
      <div className={styles.divider}></div>
      <Link
        className={`${styles.signUp} uppercase`}
        to={urlFormat(Pages.SignUp)}>
        Sign up
      </Link>
    </div>
  </div>
);

export { SignIn };
