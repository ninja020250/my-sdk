import { useColorMode, useTheme } from "@chakra-ui/react";

export const useITheme = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const colors = theme.colors;

  return {
    ...theme,
    colors: {
      ...colors,
      bg: colors.bg?.({ colorMode }),
    },
  };
};

export default useITheme;
