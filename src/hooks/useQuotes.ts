import { useQuery } from '@tanstack/react-query';
import { INITIAL_FETCH_DATA } from 'config/default';
import { getMovieQuotes } from 'services/quote';
import { QuotesApiResponse } from 'types/quote';

export const useFetchMovieQuotes = (
  movieId: string,
  params?: Record<string, unknown>
) => {
  const {
    isLoading,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<QuotesApiResponse, Error>({
    queryKey: ['movieQuotes', movieId, params],
    queryFn: () => getMovieQuotes(movieId, params),
  });

  return { data, loading: isLoading, error, fetchQuotes: refetch };
};

export default useFetchMovieQuotes;
