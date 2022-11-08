import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@components/common";
import { signInRequest } from "@/services";
import { urlFormat, setLocalStorage } from "@/utils";
import { Pages } from "@/pages";

import styles from "./Forms.module.css";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
    setError,
    clearErrors,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: object) => {
    try {
      const response = await signInRequest({
        user: data,
      });
      setLocalStorage("user", response);
      navigate(urlFormat(Pages.Main));
    } catch (error) {
      setError("serverError", {
        type: "custom",
        message: (error as Error).message,
      });
    }
  };

  const isFormValid = !isSubmitted || isValid;

  return (
    <form
      className={`${styles.form} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>
        <ErrorMessage errors={errors} name="serverError" />
        <ErrorMessage errors={errors} name={"email" && "password"} />
      </span>
      <Input
        label="email"
        name="email"
        type="email"
        stylesName={isFormValid ? "signIn" : "error"}
        register={register}
        required="Both fields are required"
        onChange={() => clearErrors(["serverError", "email"])}
      />
      <Input
        label="password"
        name="password"
        type="password"
        stylesName={isFormValid ? "signIn" : "error"}
        register={register}
        required="Both fields are required"
        onChange={() => clearErrors(["serverError", "password"])}
      />
      <Button type="submit" value="sign in" />
      <a className={styles.forgotPassword} href="!#">
        Forgot your password?
      </a>
    </form>
  );
};

export { SignInForm };
