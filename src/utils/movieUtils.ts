import moviesMetaList from 'data/moviesMetaList.json';
import { CharacterType } from 'types/character';
import { MovieMetaInformationType } from 'types/movie';
export const getMovieMetaInformation = (
  movieName: string
): MovieMetaInformationType => {
  let metaInformation: MovieMetaInformationType;
  for (let i = 0; i < moviesMetaList.length; i++) {
    const metaItem = moviesMetaList[i];
    if (metaItem.name.toLowerCase() === movieName.toLowerCase()) {
      metaInformation = metaItem;
      break;
    }
    if (metaItem.searchableTags.every(tag => movieName.indexOf(tag) > -1)) {
      metaInformation = metaItem;
      break;
    }
  }

  return metaInformation!;
};

export const formatViewingTime = (time: number) =>
  `${Math.floor(time / 60)}h:${time % 60}m`;

export const formatNumberWithCurrency = (
  amount: number,
  currencyCode = 'USD'
) => {
  const nf = new Intl.NumberFormat(
    typeof navigator !== 'undefined' ? navigator.language : 'en-US',
    {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );
  return nf.format(amount);
};

export const getTrailerLink = (movieName: string) =>
  `https://youtube.com/results?search_query=${encodeURIComponent(
    `${movieName} trailer`
  )}`;

export const getCharacterAttributes = (character: CharacterType) => {
  const attributes = [
    {
      label: 'Name',
      value: character.name,
    },
    {
      label: 'Race',
      value: character.race,
    },
    {
      label: 'Birth',
      value: character.birth,
    },
    {
      label: 'Spouse',
      value: character.spouse,
    },
    {
      label: 'Gender',
      value: character.gender,
    },
    {
      label: 'Realm',
      value: character.realm,
    },
    {
      label: 'Hair',
      value: character.hair,
    },
    {
      label: 'Wiki Info',
      value: character.wikiUrl,
    },
  ];

  return attributes.filter(attribute => Boolean(attribute.value));
};
