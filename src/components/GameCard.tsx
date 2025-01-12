import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { GameObject } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageOptimizer";
import GameCardContainer from "./GameCardContainer";
export interface GameCardProp {
  game: GameObject;
}
function GameCard({ game }: GameCardProp) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>

          <HStack
            paddingTop="5px"
            display="flex"
            justifyContent="space-between"
          >
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore criticScore={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCard;
