import { IconButton, IconButtonProps } from "@chakra-ui/react";

export type IIconButtonProps = {
  children?: React.ReactNode;
} & IconButtonProps;

const IIconButton = ({ children, ...rest }: IIconButtonProps) => {
  return <IconButton {...rest}>{children}</IconButton>;
};

export default IIconButton;
