import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GameObject } from "../hooks/useGames";

export interface GameCardProp {
  game: GameObject;
}
function GameCard({ game }: GameCardProp) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
