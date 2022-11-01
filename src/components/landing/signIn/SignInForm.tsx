import React from "react";
import { Button, Input } from "@components/common";
import styles from "./SignIn.module.css";

const SignInForm = () => (
  <form className={`${styles.form} flex-column`}>
    <Input label="email" stylesName="signIn" />
    <Input label="password" stylesName="signIn" />
    <Button type="submit" value="sign in" />
    <a className={styles.forgotPassword} href="!#">
      Forgot your password?
    </a>
  </form>
);

export { SignInForm };
