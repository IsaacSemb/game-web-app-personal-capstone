import { Grid, Show, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

import { GenreObject } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreObject | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  function handleGenreSelected(genre: GenreObject) {
    setSelectedGenre(genre);
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem paddingX="10px" area="aside">
          <GenreList
            genreSelected={handleGenreSelected}
            activeGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          platformSelected={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}
export default App;
