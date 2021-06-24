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

const getSortedOffersList = (offers, city) => offers.filter(({city: name}) => name === city);

export {
  getMonthYearFormatedDate,
  getNumericFormatedData,
  getSortedOffersList
};
