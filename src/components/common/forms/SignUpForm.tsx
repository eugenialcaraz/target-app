import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import { setGenders } from "@/state/features/user";
import { getGenders } from "@/services";
import { useAppSelector, useAppDispatch } from "@/state/app/hooks";
import { setUser } from "@/state/features/user";
import { Button, Input, Dropdown } from "@components/common";
import { signUpRequest } from "@/services";
import { urlFormat, setLocalStorage, sendEmail } from "@/utils";
import { LocalStorageKeys, Pages } from "@/types";
import { useYupValidationResolver } from "@/hooks/formValidation";
import { signUpValidationSchema } from "@components/common";

import styles from "./Forms.module.css";

const SignUpForm = () => {
  const { genders } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resolver = useYupValidationResolver(signUpValidationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    setError,
  } = useForm({ resolver });

  const isFormValid = !isSubmitted || isValid;
  const errorMessage = String(Object.values(errors)[0]?.message ?? "");

  const callGenders = async () => {
    dispatch(setGenders(await getGenders()));
  };

  useEffect(() => {
    callGenders();
  }, []);

  const onSubmit = async (data: object) => {
    try {
      const { user } = await signUpRequest({ user: data });
      dispatch(setUser(user));
      setLocalStorage(LocalStorageKeys.username, user.name);
      sendEmail({});
      navigate(urlFormat(Pages.EmailConfirmation));
    } catch (error: any) {
      setError("serverError", {
        type: "custom",
        message: (error as Error).message,
      });
    }
  };

  return (
    <form
      className={`${styles.form} ${styles.signUpForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>{errorMessage}</span>
      <Input
        label="name"
        name="first_name"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
      />
      <Input
        label="email"
        name="email"
        type="email"
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
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
      />
      <Input
        label="Confirm password"
        name="password_confirmation"
        type="password"
        minLength={6}
        stylesName={isFormValid ? "signUp" : "error"}
        register={register}
        required
      />

      <Dropdown
        label="gender"
        defaultOption="Select your gender"
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
