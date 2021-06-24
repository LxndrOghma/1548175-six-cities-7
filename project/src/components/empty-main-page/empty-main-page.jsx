import React from 'react';
import PropTypes from 'prop-types';

import CitiesList from '../cities/cities-list/cities-list';
import Header from '../header/page-header/page-header';

function EmptyMainPage({onCityChange, city}) {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList onCityChange={onCityChange} activeCity={city}/>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>


  );
}

EmptyMainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default EmptyMainPage;
