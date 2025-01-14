import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

export interface GenreObject {
  id: number;
  name: string;
}

interface fetchingGenresResponse {
  count: number;
  results: GenreObject[];
}

function useGames() {
  const [genres, setGenres] = useState<GenreObject[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<fetchingGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGames;
