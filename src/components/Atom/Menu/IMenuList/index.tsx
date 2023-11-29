import { MenuList, MenuListProps } from "@chakra-ui/react";

export type IMenuListProps = {
  children?: React.ReactNode;
} & MenuListProps;

const IMenuList = ({ children, ...rest }: IMenuListProps) => {
  return <MenuList {...rest}>{children}</MenuList>;
};

export default IMenuList;
