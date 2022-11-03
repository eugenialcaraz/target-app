import React from "react";
import { useForm } from "react-hook-form";

import { Button, Input, Dropdown } from "@components/common";

import styles from "./Forms.module.css";

const options = [
  { value: "", name: "SELECT YOUR GENDER", hidden: true },
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "other", name: "None of the above" },
];

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = async (data: object) => {
    console.log(data);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <form
      className={`${styles.form} ${styles.signUpForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>
        {isFormValid
          ? ""
          : errors?.serverError?.message?.toString() ||
            "All fields are required"}
      </span>
      <Input
        label="name"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="email"
        type="email"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="password"
        type="password"
        stylesName={isFormValid ? "signUp" : "error"}
        placeholder="MIN. 6 CHARACTERS LONG"
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Input
        label="Confirm password"
        type="password"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
        onChange={() => clearErrors()}
      />
      <Dropdown
        label="gender"
        stylesName={isFormValid ? "signUp" : "error"}
        options={options}
        register={register}
        required
      />
      <Button type="submit" value="sign up" />
    </form>
  );
};

export { SignUpForm };
