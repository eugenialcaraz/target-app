import React from "react";
import { Link } from "react-router-dom";

import { SignUpForm } from "@components/common";
import { urlFormat } from "@/utils";
import { Pages } from "@/pages";

import styles from "./SignUp.module.css";

const SignUp = () => (
  <div className={`${styles.container} flex-column`}>
    <h1>SIGN UP</h1>
    <SignUpForm />
    <div className={styles.divider}></div>
    <Link className={`${styles.signIn} uppercase`} to={urlFormat(Pages.SignIn)}>
      Sign in
    </Link>
  </div>
);

export { SignUp };
