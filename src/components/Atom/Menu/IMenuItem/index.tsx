import { MenuItem, MenuItemProps } from "@chakra-ui/react";

export type IMenuItemProps = {
  children?: React.ReactNode;
} & MenuItemProps;

const IMenuItem = ({ children, ...rest }: IMenuItemProps) => {
  return <MenuItem {...rest}>{children}</MenuItem>;
};

export default IMenuItem;
