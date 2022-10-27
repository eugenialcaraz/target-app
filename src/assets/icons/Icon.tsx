import React, { FC } from "react";
import Apple from "./Apple";
import Facebook from "./Facebook";
import Logo from "./Logo";
import Menu from "./Menu";
import Twitter from "./Twitter";

type IconProps = {
  name: string;
};

const Icon: FC<IconProps> = ({ name }) => {
  switch (name) {
    case "apple":
      return <Apple />;

    case "facebook":
      return <Facebook />;

    case "logo":
      return <Logo />;

    case "menu":
      return <Menu />;

    case "twitter":
      return <Twitter />;

    default:
      return <></>;
  }
};

export default Icon;
