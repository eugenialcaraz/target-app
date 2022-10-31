import React, { FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  stylesName: string;
};

const Input: FC<InputProps> = ({ label, stylesName }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={label}>{label}</label>
    <input className={styles[stylesName]} id={label} />
  </div>
);

export { Input };
