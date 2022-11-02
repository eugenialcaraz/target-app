import React, { FC } from "react";
import styles from "./Textarea.module.css";

type TextareaProps = {
  label: string;
};

const Textarea: FC<TextareaProps> = ({ label }) => {
  return (
    <div className={`${styles.textareaContainer} flex-column`}>
      <label htmlFor={label}>{label}</label>
      <textarea id={label} />
    </div>
  );
};

export { Textarea };
