import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface GameObjects {
  id: number;
  name: string;
}

interface fetchingGamesResponse {
  count: number;
  results: GameObjects[];
}

function useGames() {
  const [games, setGames] = useState<GameObjects[]>([]);
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
