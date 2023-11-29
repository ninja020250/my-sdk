import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export type IButtonProps = {
  children?: React.ReactNode;
} & ButtonProps;

const IButton = ({ children, ...rest }: IButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default IButton;
