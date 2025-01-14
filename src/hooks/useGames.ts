import useData from "../hooks/useData";
import { GenreObject } from "./useGenres";

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

function useGames(selectedGenre: GenreObject | null) {
  const gamesData = useData<GameObject>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );
  return gamesData;
}

export default useGames;
