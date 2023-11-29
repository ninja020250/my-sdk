import { VStack, StackProps } from "@chakra-ui/react";

export type IVStackProps = {
  children?: React.ReactNode;
} & StackProps;

const IVStack = ({ children, ...rest }: IVStackProps) => {
  return <VStack {...rest}>{children}</VStack>;
};

export default IVStack;
