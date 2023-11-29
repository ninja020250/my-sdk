import { TabIndicator, TabIndicatorProps } from "@chakra-ui/react";

export type ITabIndicatorProps = {
  children?: React.ReactNode;
} & TabIndicatorProps;

const ITabIndicator = ({ children, ...rest }: ITabIndicatorProps) => {
  return <TabIndicator {...rest}>{children}</TabIndicator>;
};

export default ITabIndicator;
