import useData from "../hooks/useData";

interface GenreObject {
  id: number;
  name: string;
}

function useGenres() {
  const genresData = useData<GenreObject>("/genres");
  return genresData;
}

export default useGenres;
