import { TabPanel, TabPanelProps } from "@chakra-ui/react";

export type ITabPanelProps = {
  children?: React.ReactNode;
} & TabPanelProps;

const ITabPanel = ({ children, ...rest }: ITabPanelProps) => {
  return <TabPanel {...rest}>{children}</TabPanel>;
};

export default ITabPanel;
