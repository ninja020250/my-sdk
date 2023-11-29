import { Flex, FlexProps } from "@chakra-ui/react";

export type IFlexProps = {
  children?: React.ReactNode;
} & FlexProps;

const IFlex = ({ children, ...rest }: IFlexProps) => {
  return <Flex {...rest}>{children}</Flex>;
};

export default IFlex;
