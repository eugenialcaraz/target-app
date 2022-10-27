import React, { FC } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

type IconProps = {
  name: string;
};

const Icon: FC<IconProps> = ({ name }) => {
  switch (name) {
    case "menu":
      return <Menu />;
    case "logo":
      return <Logo />;
    default:
      return <></>;
  }
};

export default Icon;
