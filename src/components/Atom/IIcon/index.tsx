import { As, Icon, IconProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type IIconProps = {
  as?: As | undefined;
} & IconProps;

const IIcon = forwardRef((props: IIconProps, ref) => {
  return <Icon {...props} ref={ref} />;
});

export default IIcon;
