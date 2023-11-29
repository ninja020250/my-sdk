import { useColorModeValue } from "@chakra-ui/react";
import BrandLogoDark from "../../Icons/BrandLogoDark";
import BrandLogoLight from "../../Icons/BrandLogoLight";
import IIcon from "../../Atom/IIcon";
import { IBox } from "../..";

export type BrandLogoProps = {};

export const BrandLogo = (props: BrandLogoProps) => {
  const icon = useColorModeValue(BrandLogoLight, BrandLogoDark);

  return (
    <IBox pt={4}>
      <IIcon
        // @ts-ignore
        as={icon}
        w={72}
        h={25}
        {...props}
      />
    </IBox>
  );
};

export default BrandLogo;
