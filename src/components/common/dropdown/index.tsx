import React, { FC } from "react";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";
import { GenderType } from "@/types";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  label: string;
  options: Array<GenderType>;
  stylesName: string;
  defaultOption: string;
  register: UseFormRegister<FieldValues>;
  required: ValidationRule<boolean>;
  onChange?: () => void;
};

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  defaultOption,
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
        {defaultOption}
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
