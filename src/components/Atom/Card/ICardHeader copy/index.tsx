import { CardHeader, CardHeaderProps } from "@chakra-ui/react";
import React from "react";

export type ICardHeaderProps = {
  children?: React.ReactNode;
} & CardHeaderProps;

const ICardHeader = ({ children, ...rest }: ICardHeaderProps) => {
  return <CardHeader {...rest}>{children}</CardHeader>;
};

export default ICardHeader;
