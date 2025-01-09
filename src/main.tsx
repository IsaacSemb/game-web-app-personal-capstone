// react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 3rd party imports
// chakra
import { ChakraProvider } from "@chakra-ui/react";

// in-house imports
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
