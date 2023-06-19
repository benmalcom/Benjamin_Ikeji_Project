import { AxiosResponse } from 'axios';
import { createRequest } from 'services/http';
import { CharacterApiResponse } from 'types/character';

export const getMovieCharacters = async (
  params: Record<string, unknown>,
  signal?: AbortSignal
): Promise<AxiosResponse<CharacterApiResponse>> => {
  return await createRequest({
    url: '/character',
    method: 'get',
    signal,
  });
};
