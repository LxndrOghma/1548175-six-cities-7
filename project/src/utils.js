import { SortingOptions } from './const';

const getMonthYearFormatedDate = (utcDate) => {
  const date = new Date(utcDate);

  const options = {
    month: 'long',
    year: 'numeric',
  };

  const formatedDate = date.toLocaleString('en-US', options);

  return formatedDate;
};

const getNumericFormatedData = (utcDate) => {
  const date = new Date(utcDate);

  let dd = date.getDate();
  if (dd < 10) {dd = `0${dd}`;}

  let mm = date.getMonth() + 1;
  if (mm < 10) {mm = `0${mm}`;}

  const yy = date.getFullYear();

  return `${dd}-${mm}-${yy}`;
};

const getSortedByCityOffersList = (offers, city) => offers.filter((offer) => offer.city.name === city);


const sortLowToHighPrice = (arr) => arr.sort((a, b) => a.price - b.price);
const sortHighToLowPrice = (arr) => arr.sort((a, b) => b.price - a.price);
const sortByRating = (arr) => arr.sort((a, b) => b.rating - a.rating);

const getSortedOffers = (offers, sortType) => {
  const offersList = offers.slice();

  switch (sortType) {
    case SortingOptions.POPULAR:
      return offersList;
    case SortingOptions.LOW_TO_HIGH_PRICE:
      return sortLowToHighPrice(offersList);
    case SortingOptions.HIGH_TO_LOW_PRICE:
      return sortHighToLowPrice(offersList);
    case SortingOptions.TOP_RATED:
      return sortByRating(offersList);
    default:
      return offersList;
  }
};

export {
  getMonthYearFormatedDate,
  getNumericFormatedData,
  getSortedByCityOffersList,
  getSortedOffers
};
