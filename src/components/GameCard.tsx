import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { GameObject } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
export interface GameCardProp {
  game: GameObject;
}
function GameCard({ game }: GameCardProp) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack paddingTop="5px" display="flex" justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
