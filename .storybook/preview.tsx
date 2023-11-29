import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../src/styles/Themes";
import "../i18n";
import Fonts from "../src/styles/Fonts";

export const parameters = {
  chakra: {
    theme: theme,
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Story {...context} />
    </ChakraProvider>
  );
};

export const decorators = [withThemeProvider];
