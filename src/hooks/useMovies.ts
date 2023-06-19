import { useQuery } from '@tanstack/react-query';
import { INITIAL_FETCH_DATA } from 'config/default';
import { getMovies, getMovieById } from 'services/movie';
import { MoviesApiResponse } from 'types/movie';

export const useFetchMovies = () => {
  const {
    isLoading,
    isError,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<MoviesApiResponse, Error>({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  });

  return { data, loading: isLoading, error, isError, fetchMovies: refetch };
};

export const useFetchMovieById = (movieId: string) => {
  const {
    isLoading,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<MoviesApiResponse, Error>({
    queryKey: ['movies', movieId],
    queryFn: () => getMovieById(movieId),
    enabled: !!movieId,
  });

  return { data, loading: isLoading, error, fetchMovieById: refetch };
};
export default useFetchMovies;
