import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import styles from "./Textarea.module.css";

type TextareaProps = {
  label: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
};

const Textarea: FC<TextareaProps> = ({ label, register, required }) => (
  <div className={`${styles.textareaContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <textarea id={label} {...register(label, { required })} />
  </div>
);

export { Textarea };
