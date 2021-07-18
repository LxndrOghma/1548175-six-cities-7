import React from 'react';
import PropTypes from 'prop-types';

import CitiesList from '../cities/cities-list/cities-list';
import Header from '../header/page-header/page-header';
import LoadWrapper from '../loading/load-wrapper/load-wrapper';
import EmptyOffersList from '../offers/empty-offers-list/empty-offers-list';

function EmptyMainPage({onCityChange, city, isDataLoaded}) {
  return (
    <div className="page page--gray page--main">
      <Header />

      <LoadWrapper isDataLoaded={isDataLoaded}>
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList onCityChange={onCityChange} activeCity={city}/>
          </div>
          <EmptyOffersList city={city} />
        </main>
      </LoadWrapper>
    </div>
  );
}

EmptyMainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export default EmptyMainPage;
