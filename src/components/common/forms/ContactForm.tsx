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
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const formError = errors["email*"]?.type || errors["message*"]?.type;

  const onSubmit = (data: object) => {
    //on submit logic
    dispatch(handleModalStatus(ModalStatus.Success));
  };

  return (
    <form
      className={`${styles.contactForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <span className={formError && styles.error}>
        Both fields are mandatory
      </span>
      <Input
        label="email*"
        type="email"
        stylesName={formError ? "contactError" : "contact"}
        register={register}
        required
      />
      <Textarea
        label="message*"
        stylesName={formError && "error"}
        register={register}
        required
      />
      <Button type="submit" value="send" />
    </form>
  );
};

export { ContactForm };
