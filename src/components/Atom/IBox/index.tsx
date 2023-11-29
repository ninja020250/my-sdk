import { Box, BoxProps } from "@chakra-ui/react";

export type IBoxProps = {
  children?: React.ReactNode;
} & BoxProps;

const IBox = ({ children, ...rest }: IBoxProps) => {
  return <Box {...rest}>{children}</Box>;
};

export default IBox;
