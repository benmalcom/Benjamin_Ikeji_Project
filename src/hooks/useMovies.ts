import useAxios from 'axios-hooks';
import { INITIAL_FETCH_DATA } from 'config/default';
import { MoviesApiResponse } from 'types/movie';

export const useFetchMovies = (params?: Record<string, unknown>) => {
  const [{ data = INITIAL_FETCH_DATA, loading, error }, refetch] =
    useAxios<MoviesApiResponse>({
      url: '/movie',
      params,
    });

  return { data, loading, error, fetchMovies: refetch };
};

export const useFetchMovieById = (movieId: string) => {
  const [{ data = INITIAL_FETCH_DATA, loading, error }, refetch] =
    useAxios<MoviesApiResponse>(
      {
        url: `/movie/${movieId}`,
      },
      { manual: true }
    );

  return { data, loading, error, fetchMovieById: refetch };
};

export default useFetchMovies;
