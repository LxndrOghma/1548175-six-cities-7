import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../header/page-header/page-header';
import { OffersListType } from '../../../const';
import offersProp from '../../props/offers.prop';
import OffersList from '../../offers/offers-list/offers-list';
import Map from '../../map/map';
import CitiesList from '../../cities/cities-list/cities-list';
import { getSortedOffersList } from '../../../utils';
import { ActionCreator } from '../../../store/action';
import EmptyMainPage from '../../empty-main-page/empty-main-page';

function MainPage({offers, city, onCityChange}) {
  const [activeCard, setActiveCard] = useState('');

  const sortedOffers = getSortedOffersList(offers, city);

  if (!sortedOffers.length) {
    return <EmptyMainPage onCityChange={onCityChange} city={city}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList onCityChange={onCityChange}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--closed">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={sortedOffers}
                setActiveCard={setActiveCard}
                pageType={OffersListType.MAIN_PAGE}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={sortedOffers}
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
