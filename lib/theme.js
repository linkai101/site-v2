import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "Source Sans Pro, system-ui, sans-serif",
  heading: "Source Sans Pro, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const colors = {
  brand: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  }
};


const theme = extendTheme({ 
  config, 
  colors, 
  fonts, 
});

export default theme;