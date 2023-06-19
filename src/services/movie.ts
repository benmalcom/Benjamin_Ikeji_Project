import { MoviesApiResponse } from 'types/movie';
import { createRequest } from './http';
export const getMovies = async (
  params?: Record<string, unknown>
): Promise<MoviesApiResponse> =>
  await createRequest({
    url: '/movie',
    method: 'get',
    params,
  }).then(response => response.data);

export const getMovieById = async (id: string): Promise<MoviesApiResponse> =>
  await createRequest({
    url: `/movie/${id}`,
    method: 'get',
  }).then(response => response.data);
