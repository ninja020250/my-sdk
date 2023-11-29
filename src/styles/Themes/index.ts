import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "#root": {
        flexDirection: "column",
        display: "flex",
        flex: 1,
        minHeight: "100vh",
      },
      body: {
        bg: mode("white", "gray.900")(props),
        color: mode("gray.900", "white")(props), // Set text color for dark mode
      },
    }),
  },
  colors: {
    bg: (props: StyleFunctionProps) => ({
      subtle: mode("gray.50", "gray.700")(props),
    }),
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  components: {
    Link: {
      baseStyle: {
        "&:hover": { textDecoration: "none" },
      },
    },
  },
});

export default theme;
