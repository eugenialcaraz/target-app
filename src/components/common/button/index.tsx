import React, { FC } from "react";

type ButtonProps = {
  value: string;
  type: "button" | "submit";
};

const Button: FC<ButtonProps> = ({ value, type }) => {
  return <input type={type} value={value} />;
};

export { Button };
