import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";
import IIcon from "../../Atom/IIcon";
import IIconButton, { IIconButtonProps } from "../../Atom/IIconButton";
import SwitchIconButtonAnimation from "../../Atom/SwitchIconButtonAnimation";

export type ToggleColorButtonProps = Omit<IIconButtonProps, "aria-label">;

export const ToggleColorButton = (props: ToggleColorButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = useColorModeValue(BsMoonStarsFill, BsBrightnessHighFill);
  const colorScheme = useColorModeValue("teal", "orange");

  return (
    <SwitchIconButtonAnimation id={colorMode}>
      <IIconButton
        {...props}
        onClick={toggleColorMode}
        colorScheme={colorScheme}
        aria-label="color-mode"
        icon={
          <IIcon
            fontSize="20px"
            // @ts-ignore
            as={icon}
          />
        }
      />
    </SwitchIconButtonAnimation>
  );
};

export default ToggleColorButton;
