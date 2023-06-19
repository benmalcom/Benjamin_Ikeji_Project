import { AxiosResponse } from 'axios';
import { createRequest } from 'services/http';
import { QuotesApiResponse } from 'types/quote';

export const getMovieQuotes = async (
  params: Record<string, unknown>,
  signal?: AbortSignal
): Promise<AxiosResponse<QuotesApiResponse>> => {
  return await createRequest({
    url: '/quote',
    method: 'get',
    signal,
  });
};
