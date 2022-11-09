import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/state/app/hooks";
import { handleModalStatus, ModalStatus } from "@/state/features";
import { useYupValidationResolver } from "@/hooks/formValidation";
import { contactValidationSchema } from "@components/common";

import { Button, Input, Textarea } from "@components/common";

import styles from "./Forms.module.css";

const ContactForm = () => {
  const resolver = useYupValidationResolver(contactValidationSchema);
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = useForm({ resolver });

  const dispatch = useAppDispatch();

  const onSubmit = (data: object) => {
    dispatch(handleModalStatus(ModalStatus.Success));
  };

  const isFormValid = !isSubmitted || isValid;
  const errorMessage = String(Object.values(errors)[0]?.message || "");

  return (
    <form
      className={`${styles.contactForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={isFormValid ? "" : styles.error}>{errorMessage}</span>
      <Input
        label="email*"
        name="email"
        type="email"
        stylesName={isFormValid ? "contact" : "contactError"}
        register={register}
        required
      />
      <Textarea
        label="message*"
        name="message"
        stylesName={isFormValid ? "" : "error"}
        register={register}
        required
      />
      <Button type="submit" value="send" />
    </form>
  );
};

export { ContactForm };
