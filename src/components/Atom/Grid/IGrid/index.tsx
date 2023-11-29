import { Grid, GridProps } from "@chakra-ui/react";

export type IGridProps = {
  children?: React.ReactNode;
} & GridProps;

const IGrid = ({ children, ...rest }: IGridProps) => {
  return <Grid {...rest}>{children}</Grid>;
};

export default IGrid;
