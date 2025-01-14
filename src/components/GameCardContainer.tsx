import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function GameCardContainer({ children }: props) {
  return (
    <Box overflow="hidden" borderRadius={10} width="100%">
      {children}
    </Box>
  );
}

export default GameCardContainer;
