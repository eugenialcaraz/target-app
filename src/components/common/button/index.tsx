import React, { FC } from "react";

type ButtonProps = {
  value: string;
  buttonType: "button" | "submit";
};

const Button: FC<ButtonProps> = ({ value, buttonType }) => {
  return <input type={buttonType} value={value} />;
};

export default Button;
