import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  criticScore: number;
}

function CriticScore({ criticScore }: CriticScoreProps) {
  const color = criticScore > 85 ? "green" : "orange";

  return (
    <Badge padding="3px 10px" colorScheme={color}>
      {criticScore}
    </Badge>
  );
}

export default CriticScore;
