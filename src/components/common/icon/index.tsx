import React, { FC, ReactNode } from "react";
import {
  Apple,
  Facebook,
  Logo,
  Menu,
  Twitter,
  Close,
  ErrorLogo,
} from "@assets/icons";

type IconProps = {
  name: string;
};
interface iconObject {
  [key: string]: ReactNode;
}
const icons: iconObject = {
  apple: <Apple />,
  close: <Close />,
  errorLogo: <ErrorLogo />,
  facebook: <Facebook />,
  logo: <Logo />,
  menu: <Menu />,
  twitter: <Twitter />,
};

const Icon: FC<IconProps> = ({ name }) => <>{icons[name]}</>;

export { Icon };
