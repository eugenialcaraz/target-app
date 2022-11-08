import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

import { setGenders } from "@/state/features/user";
import { getGenders } from "@/services";
import { useAppSelector, useAppDispatch } from "@/state/app/hooks";
import { setUsername } from "@/state/features/user";
import { Button, Input, Dropdown } from "@components/common";
import { signUpRequest } from "@/services";
import { urlFormat } from "@/utils";
import { Pages } from "@/pages";

import styles from "./Forms.module.css";

const SignUpForm = () => {
  const { genders } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    setError,
    clearErrors,
  } = useForm();

  const callGenders = async () => {
    dispatch(setGenders(await getGenders()));
  };

  const navigate = useNavigate();
  const isFormValid = !isSubmitted || isValid;

  const handleErrorMessage = (() => {
    if (errors?.password?.type === "minLength") {
      return (
        <ErrorMessage
          errors={errors}
          name="password"
          message="Password should be at least 6 characters long"
          render={({ message }) => <>{message}</>}
        />
      );
    } else if (!errors?.serverError) {
      return "All fields are required";
    }
  })();

  useEffect(() => {
    callGenders();
  }, []);

  const onSubmit = async (data: object) => {
    try {
      const response = await signUpRequest({
        user: data,
      });
      const { user } = response;
      dispatch(setUsername(user.name));
      navigate(urlFormat(Pages.EmailConfirmation));
      //TODO: add confirmation email instead of timeout
      setTimeout(() => {
        navigate(urlFormat(Pages.ConfirmationDone));
      }, 1500);
    } catch (error) {
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
      <span className={isFormValid ? "" : styles.error}>
        {<ErrorMessage errors={errors} name="serverError" />}
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
