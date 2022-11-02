import React, { FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  stylesName: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({ label, stylesName, placeholder = "" }) => (
  <div className={`${styles.inputContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <input
      className={styles[stylesName]}
      id={label}
      placeholder={placeholder}
    />
  </div>
);

export { Input };
