import React, { FC, ReactNode } from "react";
import Apple from "./Apple";
import Facebook from "./Facebook";
import Logo from "./Logo";
import Menu from "./Menu";
import Twitter from "./Twitter";

type IconProps = {
  name: string;
};

interface iconObject {
  [key: string]: ReactNode;
}

const Icon: FC<IconProps> = ({ name }) => {
  const icons: iconObject = {
    apple: <Apple />,
    facebook: <Facebook />,
    logo: <Logo />,
    menu: <Menu />,
    twitter: <Twitter />,
  };

  return <>{icons[name]}</>;
};

export default Icon;
