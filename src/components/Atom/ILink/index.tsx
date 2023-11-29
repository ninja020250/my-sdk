import { Link, LinkProps } from "@chakra-ui/react";

export type ILinkProps = {
  children?: React.ReactNode;
} & LinkProps;

const ILink = ({ children, ...rest }: ILinkProps) => {
  return <Link {...rest}>{children}</Link>;
};

export default ILink;
