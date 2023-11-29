import { Stack, StackProps } from "@chakra-ui/react";

export type IStackProps = {
  children?: React.ReactNode;
} & StackProps;

const IStack = ({ children, ...rest }: IStackProps) => {
  return <Stack {...rest}>{children}</Stack>;
};

export default IStack;
