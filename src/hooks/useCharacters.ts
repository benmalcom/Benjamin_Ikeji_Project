import { useQuery } from '@tanstack/react-query';
import { INITIAL_FETCH_DATA } from 'config/default';
import { getMovieCharacters } from 'services/character';
import { CharacterApiResponse } from 'types/character';

export const useFetchCharacters = (params?: Record<string, unknown>) => {
  const {
    isLoading,
    data = INITIAL_FETCH_DATA,
    error,
    refetch,
  } = useQuery<CharacterApiResponse, Error>({
    queryKey: ['characters', params],
    queryFn: () => getMovieCharacters(params),
  });

  return { data, loading: isLoading, error, fetchCharacters: refetch };
};

export default useFetchCharacters;
