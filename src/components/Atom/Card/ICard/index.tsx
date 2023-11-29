import { Card, CardProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type ICardProps = {
  children?: React.ReactNode;
} & CardProps;

const ICard = forwardRef(({ children, ...rest }: ICardProps, ref) => {
  return (
    <Card ref={ref} {...rest}>
      {children}
    </Card>
  );
});

export default ICard;
