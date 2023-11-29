import { GridItem, GridItemProps } from "@chakra-ui/react";

export type IGridPropsProps = {
  children?: React.ReactNode;
} & GridItemProps;

const IGridItem = ({ children, ...rest }: IGridPropsProps) => {
  return <GridItem {...rest}>{children}</GridItem>;
};

export default IGridItem;
