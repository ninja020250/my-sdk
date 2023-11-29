import { Container, ContainerProps } from "@chakra-ui/react";

export type IContainerProps = {
  children: React.ReactNode;
} & ContainerProps;

export const IContainer = ({ children, maxW = "1152px", w = "100%", ...rest }: IContainerProps) => {
  return (
    <Container maxW={maxW} w={w} {...rest}>
      {children}
    </Container>
  );
};

export default IContainer;
