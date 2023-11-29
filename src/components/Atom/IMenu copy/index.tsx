import { Menu, MenuProps } from "@chakra-ui/react";
import React from "react";

export type IMenuProps = {
  children?: React.ReactNode;
} & MenuProps;

const IMenu = ({ children, ...rest }: IMenuProps) => {
  return <Menu {...rest}>{children}</Menu>;
};

export default IMenu;
