import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Input, Button } from "@components/common";
import { urlFormat } from "@/utils";
import { Pages } from "@/pages";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  const handleSubmit = () => {
    navigate(urlFormat(Pages.EmailConfirmation));
  };

  return (
    <div className={`${styles.container} flex-column`}>
      <h1>SIGN UP</h1>
      <form className={`${styles.form} flex-column`} onSubmit={handleSubmit}>
        <Input label="name" stylesName="signUp" register={register} required />
        <Input label="email" stylesName="signUp" register={register} required />
        <Input
          label="password"
          stylesName="signUp"
          placeholder="MIN. 6 CHARACTERS LONG"
          register={register}
          required
        />
        <Input
          label="Confirm password"
          stylesName="signUp"
          register={register}
          required
        />
        <Input
          label="gender"
          stylesName="signUp"
          placeholder="SELECT YOUR GENDER"
          register={register}
          required
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
