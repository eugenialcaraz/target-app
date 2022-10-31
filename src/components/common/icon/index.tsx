import React, { FC, ReactNode } from "react";
import Apple from "../../../assets/icons/Apple";
import Facebook from "../../../assets/icons/Facebook";
import Logo from "../../../assets/icons/Logo";
import Menu from "../../../assets/icons/Menu";
import Twitter from "../../../assets/icons/Twitter";

type IconProps = {
  name: string;
};
interface iconObject {
  [key: string]: ReactNode;
}
const icons: iconObject = {
  apple: <Apple />,
  facebook: <Facebook />,
  logo: <Logo />,
  menu: <Menu />,
  twitter: <Twitter />,
};

const Icon: FC<IconProps> = ({ name }) => <>{icons[name]}</>;

export { Icon };
