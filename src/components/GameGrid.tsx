import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface GameOBjects {
  id: number;
  name: string;
}

interface fetchingGamesResponse {
  count: number;
  results: GameOBjects[];
}

function GameGrid() {
  const [games, setGames] = useState<GameOBjects[]>([]);
  const [error, setError] = useState();
  useEffect(() => {
    apiClient
      .get<fetchingGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
