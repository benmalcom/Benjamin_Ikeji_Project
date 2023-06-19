import { PaginationType } from 'types/common';

export type CharacterType = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};

export type CharacterApiResponse = PaginationType & {
  docs: CharacterType[];
};
