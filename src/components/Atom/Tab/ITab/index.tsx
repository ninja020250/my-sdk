import { Tab, TabProps } from "@chakra-ui/react";

export type ITabProps = {
  children?: React.ReactNode;
} & TabProps;

const ITab = ({ children, ...rest }: ITabProps) => {
  return <Tab {...rest}>{children}</Tab>;
};

export default ITab;
