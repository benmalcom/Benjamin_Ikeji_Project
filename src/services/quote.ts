import { createRequest } from 'services/http';
import { QuotesApiResponse } from 'types/quote';

export const getMovieQuotes = async (
  movieId: string,
  params?: Record<string, unknown>
): Promise<QuotesApiResponse> =>
  await createRequest({
    url: `/movie/${movieId}/quote`,
    method: 'get',
    params,
  }).then(response => response.data);
