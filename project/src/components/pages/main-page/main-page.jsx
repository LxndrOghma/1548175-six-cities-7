import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

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
import LoadWrapper from '../../loading/load-wrapper/load-wrapper';
import { fetchOffersList } from '../../../store/api-actions';

function MainPage({offers, city, onCityChange, onSortTypeChange, isOffersLoaded}) {
  const [activeCard, setActiveCard] = useState(NaN);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffersList());
  }, [dispatch]);

  if (!offers.length) {
    return <EmptyMainPage onCityChange={onCityChange} city={city} isDataLoaded={isOffersLoaded}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <LoadWrapper isDataLoaded={isOffersLoaded}>
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
      </LoadWrapper>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const offers = getSortedByCityOffersList(state.offers, state.city);

  return ({
    city: state.city,
    offers: getSortedOffers(offers, state.sortType),
    isOffersLoaded: state.isOffersLoaded,
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
