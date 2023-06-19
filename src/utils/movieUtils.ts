import moviesMetaList from 'data/moviesMetaList.json';
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
