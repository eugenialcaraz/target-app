import React, { FC } from "react";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  stylesName: string;
  type?: "password" | "text" | "email";
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required: ValidationRule<boolean> | string | undefined;
  onChange?: () => void;
};

const Input: FC<InputProps> = ({
  label,
  stylesName,
  type = "text",
  placeholder = "",
  register,
  required,
  onChange,
}) => (
  <div className={`${styles.inputContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      className={styles[stylesName]}
      id={label}
      placeholder={placeholder}
      {...register(label, { required, onChange })}
    />
  </div>
);

export { Input };
