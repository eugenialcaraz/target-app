import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@components/common";
import { signInRequest } from "@/services";
import { urlFormat } from "@/utils/urlFormat";
import { Pages } from "@/pages";

import styles from "./Forms.module.css";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: object) => {
    const response = await signInRequest({
      user: data,
    });
    if (typeof response === "object") {
      navigate(urlFormat(Pages.Main));
    } else {
      setError("serverError", { type: "custom", message: response });
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <form
      className={`${styles.form} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>
        {isFormValid
          ? ""
          : errors?.serverError?.message?.toString() ||
            "Both fields are required"}
      </span>
      <Input
        label="email"
        type="email"
        stylesName={isFormValid ? "signIn" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="password"
        type="password"
        stylesName={isFormValid ? "signIn" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Button type="submit" value="sign in" />
      <a className={styles.forgotPassword} href="!#">
        Forgot your password?
      </a>
    </form>
  );
};

export { SignInForm };
