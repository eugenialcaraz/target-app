import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/state/app/hooks";
import { handleModalStatus, ModalStatus } from "@/state/features";

import { Button, Input, Textarea } from "@components/common";

import styles from "./Forms.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = useForm();

  const dispatch = useAppDispatch();

  const onSubmit = (data: object) => {
    dispatch(handleModalStatus(ModalStatus.Success));
  };

  const isFormValid = !isSubmitted || isValid;

  return (
    <form
      className={`${styles.contactForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>
        Both fields are mandatory
      </span>
      <Input
        label="email*"
        type="email"
        stylesName={isFormValid ? "contact" : "contactError"}
        register={register}
        required
      />
      <Textarea
        label="message*"
        stylesName={isFormValid ? "" : "error"}
        register={register}
        required
      />
      <Button type="submit" value="send" />
    </form>
  );
};

export { ContactForm };
