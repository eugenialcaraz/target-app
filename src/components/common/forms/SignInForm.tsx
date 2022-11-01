import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@components/common";
import styles from "./Forms.module.css";

const SignInForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <form
      className={`${styles.form} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <Input label="email" stylesName="signIn" register={register} required />
      <Input
        label="password"
        type="password"
        stylesName="signIn"
        register={register}
        required
      />
      <Button type="submit" value="sign in" />
      <a className={styles.forgotPassword} href="!#">
        Forgot your password?
      </a>
    </form>
  );
};

export { SignInForm };
