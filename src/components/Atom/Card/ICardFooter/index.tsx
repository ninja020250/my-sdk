import { CardFooter, CardFooterProps } from "@chakra-ui/react";

export type ICardFooterProps = {
  children?: React.ReactNode;
} & CardFooterProps;

const ICardFooter = ({ children, ...rest }: ICardFooterProps) => {
  return <CardFooter {...rest}>{children}</CardFooter>;
};

export default ICardFooter;
