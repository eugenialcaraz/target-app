import React, { FC } from "react";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";
import { GenderType } from "@/state/features/user/userSlice";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  label: string;
  options: Array<GenderType>;
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
      defaultValue=""
      {...register(label, { required, onChange })}>
      <option value="" hidden>
        Select your gender
      </option>
      {options.map(({ option }) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export { Dropdown };
