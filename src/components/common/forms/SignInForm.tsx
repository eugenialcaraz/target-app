import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@components/common";
import { signInRequest } from "@/services";
import { urlFormat } from "@/utils/urlFormat";
import { Pages } from "@/pages";
import styles from "./Forms.module.css";

const SignInForm = () => {
  const [signInError, setSignInError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: object) => {
    const response = await signInRequest({
      user: data,
    });

    typeof response === "object"
      ? navigate(urlFormat(Pages.Main))
      : setSignInError(response);
  };

  return (
    <form
      className={`${styles.form} flex-column`}
      onSubmit={handleSubmit(onSubmit)}
      onTouchStart={() => setSignInError("")}>
      <span className={signInError !== "" ? styles.error : ""}>
        {signInError}
      </span>
      <Input
        label="email"
        type="email"
        stylesName="signIn"
        register={register}
        required
      />
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
