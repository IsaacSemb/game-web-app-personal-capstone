import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform{
  id: number
  name: string
  slug: string

}

export interface GameObject {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform: Platform}[]
}

interface fetchingGamesResponse {
  count: number;
  results: GameObject[];
}

function useGames() {
  const [games, setGames] = useState<GameObject[]>([]);
  const [error, setError] = useState();
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchingGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
