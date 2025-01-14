import { GameQuery } from "../App";
import useData from "../hooks/useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameObject {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGames(gameQuery: GameQuery) {
  const gamesData = useData<GameObject>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
  return gamesData;
}

export default useGames;
