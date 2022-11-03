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
  // const isFormValid = Object.keys(errors).length === 0;

  const onSubmit = (data: object) => {
    dispatch(handleModalStatus(ModalStatus.Success));
  };

  return (
    <form
      className={`${styles.contactForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isSubmitted ? (isValid ? "" : styles.error) : ""}>
        Both fields are mandatory
      </span>
      <Input
        label="email*"
        type="email"
        stylesName={
          isSubmitted ? (isValid ? "contact" : "contactError") : "contact"
        }
        register={register}
        required
      />
      <Textarea
        label="message*"
        stylesName={isSubmitted ? (isValid ? "" : "error") : ""}
        register={register}
        required
      />
      <Button type="submit" value="send" />
    </form>
  );
};

export { ContactForm };
