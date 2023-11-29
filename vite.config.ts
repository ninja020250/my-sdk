import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    lib: {
      formats: ["es"],
      entry: {
        index: resolve(__dirname, "src/index"),
        "components/index": resolve(__dirname, "src/components"),
        "hooks/index": resolve(__dirname, "src/hooks"),
        "styles/index": resolve(__dirname, "src/styles"),
      },
      name: "PortfolioUI",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
        "react/jsx-runtime",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utility": resolve(__dirname, "src/utility"),
    },
  },
});
