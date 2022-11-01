import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  stylesName: string;
  type?: "password" | "text" | "email";
  register: UseFormRegister<FieldValues>;
  required: boolean;
};

const Input: FC<InputProps> = ({
  label,
  stylesName,
  type = "text",
  register,
  required,
}) => {
  return (
    <div className={`${styles.inputContainer} flex-column`}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className={styles[stylesName]}
        id={label}
        {...register(label, { required })}
      />
    </div>
  );
};

export { Input };
