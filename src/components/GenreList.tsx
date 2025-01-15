import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
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
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === activeGenre?.id ? "bold" : "normal"}
                onClick={() => {
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
    </>
  );
}

export default GenreList;
