import { CardBody, CardBodyProps } from "@chakra-ui/react";
import React from "react";

export type ICardBodyProps = {
  children?: React.ReactNode;
} & CardBodyProps;

const ICardBody = ({ children, ...rest }: ICardBodyProps) => {
  return <CardBody {...rest}>{children}</CardBody>;
};

export default ICardBody;
