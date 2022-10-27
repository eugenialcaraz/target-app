import React, { FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  inputType: string;
};

const Input: FC<InputProps> = ({ label, inputType }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label}>{label}</label>
      <input className={styles[inputType]} id={label} />
    </div>
  );
};

export default Input;
