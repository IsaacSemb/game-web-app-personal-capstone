import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { GenreObject } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageOptimizer";
import GenreSkeleton from "./GenreSkeleton";

interface props {
  genreSelected: (genre: GenreObject) => void;
  activeGenre: GenreObject | null;
}

function GenreList({ genreSelected, activeGenre }: props) {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  // if (isLoading) return <Spinner />;
  if (isLoading) return <GenreSkeleton />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === activeGenre?.id ? "bold" : "normal"}
              onClick={() => {
                // console.log(genre);
                genreSelected(genre);
              }}
              variant="link"
              fontSize={genre.id === activeGenre?.id ? "2xl" : "lg"}
              whiteSpace="normal"
              textAlign="left"
              wordBreak="break-word"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
