// react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 3rd party imports
// chakra
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// in-house imports
import App from "./App.tsx";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
