import useAxios from 'axios-hooks';
import { INITIAL_FETCH_DATA } from 'config/default';
import { CharacterApiResponse } from 'types/character';

export const useFetchCharacters = (params?: Record<string, unknown>) => {
  const [{ data = INITIAL_FETCH_DATA, loading, error }, refetch] =
    useAxios<CharacterApiResponse>(
      {
        url: '/character',
        params,
      },
      { manual: false, useCache: false }
    );

  return { data, loading, error, fetchCharacters: refetch };
};

export default useFetchCharacters;
