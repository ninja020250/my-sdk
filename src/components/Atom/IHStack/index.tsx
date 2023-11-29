import { HStack, StackProps } from "@chakra-ui/react";

export type IHStackProps = {
  children?: React.ReactNode;
} & StackProps;

const IHStack = ({ children, ...rest }: IHStackProps) => {
  return <HStack {...rest}>{children}</HStack>;
};

export default IHStack;
