import { useCallback, useRef, useState } from "react";
import { Movie } from "../types/movie";
import { searchMovies } from "../services/movies";

interface Props {
  search: string;
}

export const useMovies = ({ search }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }: Props) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading, error };
};
