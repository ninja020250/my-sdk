import { useColorModeValue } from "@chakra-ui/react";
import { IButton, SwitchIconButtonAnimation } from "@components/Atom";
import type { IIconButtonProps } from "@components/Atom/IIconButton";

export type ToggleLanguageButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  language?: string;
} & Omit<IIconButtonProps, "aria-label">;

export const ToggleLanguageButton = ({ onClick, language, ...rest }: ToggleLanguageButtonProps) => {
  const colorScheme = useColorModeValue("teal", "orange");

  return (
    <SwitchIconButtonAnimation id={language}>
      <IButton
        {...rest}
        onClick={onClick}
        colorScheme={colorScheme}
        aria-label="color-mode"
        textTransform="uppercase"
        paddingX="6px"
        paddingY="8px"
      >
        {language}
      </IButton>
    </SwitchIconButtonAnimation>
  );
};

export default ToggleLanguageButton;
