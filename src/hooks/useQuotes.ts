import useAxios from 'axios-hooks';
import { INITIAL_FETCH_DATA } from 'config/default';
import { QuotesApiResponse } from 'types/quote';

export const useFetchMovieQuotes = (
  movieId: string,
  params?: Record<string, unknown>
) => {
  const [{ data = INITIAL_FETCH_DATA, loading, error }, refetch] =
    useAxios<QuotesApiResponse>(
      {
        url: `movie/${movieId}/quote`,
        params,
      },
      { manual: true, useCache: false }
    );

  return { data, loading, error, fetchQuotes: refetch };
};

export default useFetchMovieQuotes;
