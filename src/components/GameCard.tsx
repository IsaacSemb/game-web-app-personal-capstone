import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { GameObject } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageOptimizer";
import GameCardContainer from "./GameCardContainer";
import EmojiComponent from "./EmojiComponent";
export interface GameCardProp {
  game: GameObject;
}
function GameCard({ game }: GameCardProp) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack
            paddingTop="5px"
            paddingBottom="5px"
            display="flex"
            justifyContent="space-between"
          >
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore criticScore={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name} <EmojiComponent rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCard;
