import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@components/common";
import styles from "./Forms.module.css";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <form
      className={`${styles.contactForm} flex-column`}
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="email*"
        type="email"
        stylesName="contact"
        register={register}
        required
      />
      <Textarea label="message*" register={register} required />
      <Button type="submit" value="send" />
    </form>
  );
};

export { ContactForm };
