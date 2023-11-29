import { Tabs, TabsProps } from "@chakra-ui/react";

export type ITabsProps = {
  children?: React.ReactNode;
} & TabsProps;

const ITabs = ({ children, ...rest }: ITabsProps) => {
  return <Tabs {...rest}>{children}</Tabs>;
};

export default ITabs;
