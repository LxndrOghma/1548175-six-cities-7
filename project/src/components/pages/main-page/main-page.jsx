import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/page-header/page-header';
import { OffersListType } from '../../../const';
import offersProp from '../../props/offers.prop';
import OffersList from '../../offers/offers-list/offers-list';
import Map from '../../map/map';
import CitiesList from '../../cities/cities-list/cities-list';
import { getSortedByCityOffersList, getSortedOffers } from '../../../utils';
import { ActionCreator } from '../../../store/action';
import EmptyMainPage from '../../empty-main-page/empty-main-page';
import PlacesSorting from '../../sorting/places-sorting/places-sorting';

function MainPage({offers, city, onCityChange, onSortTypeChange}) {
  const [activeCard, setActiveCard] = useState('');

  if (!offers.length) {
    return <EmptyMainPage onCityChange={onCityChange} city={city}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList onCityChange={onCityChange} activeCity={city}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} {offers.length === 1 ? 'place' : 'places'} to stay in {city}</b>
              <PlacesSorting onSortTypeChange={onSortTypeChange}/>
              <OffersList
                offers={offers}
                setActiveCard={setActiveCard}
                pageType={OffersListType.MAIN_PAGE}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  activeCard={activeCard}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const offers = getSortedByCityOffersList(state.offers, state.city);

  return ({
    city: state.city,
    offers: getSortedOffers(offers, state.sortType),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    dispatch(ActionCreator.changeCity(evt.target.textContent));
  },
  onSortTypeChange(evt) {
    dispatch(ActionCreator.changeSortType(evt.target.textContent));
  },
});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
