import { TabList, TabListProps } from "@chakra-ui/react";

export type ITabListProps = {
  children?: React.ReactNode;
} & TabListProps;

const ITabList = ({ children, ...rest }: TabListProps) => {
  return <TabList {...rest}>{children}</TabList>;
};

export default ITabList;
