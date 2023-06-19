import { PaginationType } from 'types/common';
export type QuoteType = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export type QuotesApiResponse = PaginationType & {
  docs: QuoteType[];
};
