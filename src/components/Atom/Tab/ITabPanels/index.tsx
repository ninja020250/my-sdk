import { TabPanels, TabPanelsProps } from "@chakra-ui/react";

export type ITabPanelsProps = {
  children?: React.ReactNode;
} & TabPanelsProps;

const ITabPanels = ({ children, ...rest }: ITabPanelsProps) => {
  return <TabPanels {...rest}>{children}</TabPanels>;
};

export default ITabPanels;
