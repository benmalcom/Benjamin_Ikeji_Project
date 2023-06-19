import { createRequest } from 'services/http';
import { CharacterApiResponse } from 'types/character';

export const getMovieCharacters = async (
  params?: Record<string, unknown>
): Promise<CharacterApiResponse> =>
  await createRequest({
    url: '/character',
    method: 'get',
    params,
  }).then(response => response.data);
