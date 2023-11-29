import { Text, TextProps } from "@chakra-ui/react";

export type ITextProps = {
  children?: React.ReactNode;
} & TextProps;

const IText = ({ children, ...rest }: ITextProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default IText;
