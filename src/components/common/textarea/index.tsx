import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import styles from "./Textarea.module.css";

type TextareaProps = {
  label: string;
  name: string;
  stylesName?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
};

const Textarea: FC<TextareaProps> = ({
  label,
  name,
  stylesName = "",
  register,
  required,
}) => (
  <div className={`${styles.textareaContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <textarea
      className={styles[stylesName]}
      id={label}
      {...register(name, { required })}
    />
  </div>
);

export { Textarea };
