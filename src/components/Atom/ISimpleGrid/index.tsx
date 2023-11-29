import React from "react";
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

export type ISimpleGridProps = {
  children?: React.ReactNode;
} & SimpleGridProps;

const ISimpleGrid = ({ children, ...rest }: ISimpleGridProps) => {
  return <SimpleGrid {...rest}>{children}</SimpleGrid>;
};

export default ISimpleGrid;
