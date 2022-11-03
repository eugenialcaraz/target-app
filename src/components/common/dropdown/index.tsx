import React, { FC } from "react";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";

import styles from "./Dropdown.module.css";

type OptionType = {
  value: string;
  name: string;
  hidden?: boolean;
};

type DropdownProps = {
  label: string;
  options: Array<OptionType>;
  stylesName: string;
  register: UseFormRegister<FieldValues>;
  required: ValidationRule<boolean>;
  onChange?: () => void;
};

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  stylesName = "",
  register,
  required,
  onChange,
}) => (
  <div className={`${styles.inputContainer} flex-column`}>
    <label htmlFor={label}>{label}</label>
    <select
      id={label}
      className={styles[stylesName]}
      {...register(label, { required, onChange })}>
      {options.map(({ value, name, hidden }) => (
        <option defaultValue={""} key={value} value={value} hidden={hidden}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export { Dropdown };
