import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input, Button } from "@components/common";
import { urlFormat } from "@/utils/urlFormat";
import { Pages } from "@/pages";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    //Logic of creating user
    navigate(urlFormat(Pages.EmailConfirmation));
  };

  return (
    <div className={`${styles.container} flex-column`}>
      <h1>SIGN UP</h1>
      <form className={`${styles.form} flex-column`}>
        <Input label="name" stylesName="signUp" />
        <Input label="email" stylesName="signUp" />
        <Input
          label="password"
          stylesName="signUp"
          placeholder="MIN. 6 CHARACTERS LONG"
        />
        <Input label="Confirm password" stylesName="signUp" />
        <Input
          label="gender"
          stylesName="signUp"
          placeholder="SELECT YOUR GENDER"
        />
        <Button type="submit" value="sign up" />
      </form>
      <div className={styles.divider}></div>
      <Link
        className={`${styles.signIn} uppercase`}
        to={urlFormat(Pages.SignIn)}>
        Sign in
      </Link>
    </div>
  );
};

export { SignUp };
