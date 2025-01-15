import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom="20px" fontSize="5xl" paddingLeft={10} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
