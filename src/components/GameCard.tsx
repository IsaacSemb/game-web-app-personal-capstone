import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { GameObject } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

export interface GameCardProp {
  game: GameObject;
}
function GameCard({ game }: GameCardProp) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
