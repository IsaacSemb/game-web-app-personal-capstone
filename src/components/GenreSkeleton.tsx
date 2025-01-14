import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function GenreSkeleton() {
  const mockData = ["1", "2", "3", "4", "5", "6"];
  return (
    <List>
      {mockData.map((_, index) => (
        <ListItem paddingY="5px" key={index}>
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText fontSize="lg" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreSkeleton;
