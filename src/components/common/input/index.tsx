import React, { FC } from "react";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  name: string;
  stylesName: string;
  type?: "password" | "text" | "email";
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required: ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  onChange?: () => void;
};

const Input: FC<InputProps> = ({
  label,
  name,
  stylesName,
  type = "text",
  placeholder = "",
  register,
  required,
  minLength,
  onChange,
}) => (
  <div className={`${styles.inputContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      className={styles[stylesName]}
      id={label}
      placeholder={placeholder}
      {...register(name, { required, onChange, minLength, maxLength: 100 })}
    />
  </div>
);

export { Input };
