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

function useGames() {
  const gamesData = useData<GameObject>("/games");
  return gamesData;
}

export default useGames;
