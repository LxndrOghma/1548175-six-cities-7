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

const validateEmail = (email) => {
  const reg = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

const getWordWithCapitalLetter = (word) => word.charAt(0).toUpperCase() + word.substr(1);

const setOffers = (offers, updatedOffer) => {
  const { id } = updatedOffer;
  const offerIndex = offers.findIndex((offer) => offer.id === id);
  offerIndex !== -1 &&
    (offers[offerIndex].isFavorite = updatedOffer.isFavorite);
  return offers;
};

const setFavoriteOffers = (favoriteOffers, deletedOffer) => {
  const { id } = deletedOffer;
  const offersWithoutDeleted = favoriteOffers.filter((offer) => offer.id !== id);
  return offersWithoutDeleted;
};

const setCurrentOffer = (currentOffer, updatedOffer) => {
  currentOffer && (currentOffer.id === updatedOffer.id) && (currentOffer.isFavorite = updatedOffer.isFavorite);
  return currentOffer;
};

export {
  getMonthYearFormatedDate,
  getNumericFormatedData,
  getSortedByCityOffersList,
  getSortedOffers,
  validateEmail,
  getWordWithCapitalLetter,
  setOffers,
  setFavoriteOffers,
  setCurrentOffer
};
