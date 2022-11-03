import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/state/app/hooks";
import { Button, Input, Dropdown } from "@components/common";
import { signUpRequest } from "@/services";
import { urlFormat } from "@/utils";
import { Pages } from "@/pages";

import styles from "./Forms.module.css";

const SignUpForm = () => {
  const { genders } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const navigate = useNavigate();
  const isFormValid = Object.keys(errors).length === 0;

  const handleErrorMessage = (() => {
    if (isFormValid) {
      return "";
    } else if (errors?.password?.type === "minLength") {
      return "Password should be at least 6 characters long";
    } else {
      return (
        errors?.serverError?.message?.toString() || "All fields are required"
      );
    }
  })();

  const onSubmit = async (data: object) => {
    const response = await signUpRequest({
      user: data,
    });
    if (typeof response === "object") {
      navigate(urlFormat(Pages.EmailConfirmation));
    } else {
      setError("serverError", { type: "custom", message: response });
    }
  };

  return (
    <form
      className={`${styles.form} ${styles.signUpForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>
        {handleErrorMessage}
      </span>
      <Input
        label="name"
        name="first_name"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="email"
        name="email"
        type="email"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="password"
        name="password"
        type="password"
        minLength={6}
        stylesName={isFormValid ? "signUp" : "error"}
        placeholder="MIN. 6 CHARACTERS LONG"
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="Confirm password"
        name="password_confirmation"
        type="password"
        minLength={6}
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />

      <Dropdown
        label="gender"
        stylesName={isFormValid ? "signUp" : "error"}
        options={genders}
        register={register}
        required
      />

      <Button type="submit" value="sign up" />
    </form>
  );
};

export { SignUpForm };
