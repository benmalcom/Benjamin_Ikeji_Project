import { PaginationType } from 'types/common';

export type MovieType = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};

export type MovieMetaInformationType = {
  name: string;
  poster: string;
  searchableTags: string[];
  categories: string[];
  caption: string;
  year: number;
};

export type MoviesApiResponse = PaginationType & {
  docs: MovieType[];
};
