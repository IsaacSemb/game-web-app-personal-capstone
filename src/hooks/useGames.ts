// import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient";
// import { CanceledError } from "axios";
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

// interface fetchingGamesResponse {
//   count: number;
//   results: GameObject[];
// }

function useGames() {
  const gamesData = useData<GameObject>("/games");
  return gamesData;
}

// function useGames1() {
//   const [games, setGames] = useState<GameObject[]>([]);
//   const [error, setError] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<fetchingGamesResponse>("/games", { signal: controller.signal })
//       .then((response) => {
//         setGames(response.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setIsLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// }

export default useGames;
