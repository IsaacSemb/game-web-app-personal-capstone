import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageOptimizer";
import GenreSkeleton from "./GenreSkeleton";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  // if (error) return null;
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
