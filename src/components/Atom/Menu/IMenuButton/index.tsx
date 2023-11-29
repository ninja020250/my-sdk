import { MenuButton, MenuButtonProps } from "@chakra-ui/react";

export type IMenuButtonProps = {
  children?: React.ReactNode;
} & MenuButtonProps;

const IMenuButton = ({ children, ...rest }: IMenuButtonProps) => {
  return <MenuButton {...rest}>{children}</MenuButton>;
};

export default IMenuButton;
