import { useQuery } from '@tanstack/react-query';
import { INITIAL_FETCH_DATA } from 'config/default';
import { getMovieQuotes, getCharacterQuotes } from 'services/quote';
import { QuotesApiResponse } from 'types/quote';

export const useFetchMovieQuotes = (
  movieId: string,
  params?: Record<string, unknown>
) => {
  const {
    isLoading,
    isFetching,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<QuotesApiResponse, Error>({
    queryKey: ['movieQuotes', movieId, params],
    queryFn: () => getMovieQuotes(movieId, params),
  });

  return {
    data,
    loading: isLoading || isFetching,
    error,
    fetchQuotes: refetch,
  };
};

export const useFetchCharacterQuotes = (
  characterId: string,
  params?: Record<string, unknown>
) => {
  const {
    isFetching,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<QuotesApiResponse, Error>({
    queryKey: ['characterQuotes', characterId, params],
    queryFn: () => getCharacterQuotes(characterId, params),
    enabled: false,
  });

  return {
    data,
    loading: isFetching,
    error,
    fetchQuotes: refetch,
  };
};
export default useFetchMovieQuotes;
