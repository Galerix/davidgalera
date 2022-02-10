import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    initialColorMode: "dark",
    fonts: {
      title: `Gugi, ${base.fonts?.heading}`,
      heading: `Oxanium, ${base.fonts?.heading}`,
      body: `Raleway, ${base.fonts?.body}`,
    },

    colors: {
      brand: {
        100: "#b7e9fd",
        200: "#6fd4fc",
        300: "#27befa",
        400: "#0599d4",
        500: "#03658C",
        600: "#025170",
        700: "#023d54",
        800: "#011e2a",
        900: "#01141c",
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("white", "brand.900")(props),
        },
      }),
    },
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button", "IconButton"],
  })
);

export default theme;
