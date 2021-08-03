import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHeader from '../../header/page-header/page-header';
import { OffersListType } from '../../../const';
import OffersList from '../../offers/offers-list/offers-list';
import Map from '../../map/map';
import CitiesList from '../../cities/cities-list/cities-list';
import { changeCity, changeSortType } from '../../../store/action';
import EmptyMainPage from '../../empty-main-page/empty-main-page';
import PlacesSorting from '../../sorting/places-sorting/places-sorting';
import LoadWrapper from '../../loading/load-wrapper/load-wrapper';
import { fetchOffersList } from '../../../store/api-actions';
import { getIsDataLoadingError, getIsOffersLoaded, getSortedOffers } from '../../../store/data/selectors';
import { getCity } from '../../../store/ui/selectors';
import ServerError from '../../server-error/server-error';

function MainPage() {
  const [activeCard, setActiveCard] = useState(NaN);

  const offers = useSelector(getSortedOffers);
  const city = useSelector(getCity);
  const isOffersLoaded = useSelector(getIsOffersLoaded);
  const isDataLoadingError = useSelector(getIsDataLoadingError);


  const dispatch = useDispatch();

  const onSortTypeChange = (evt) => {
    dispatch(changeSortType(evt.target.textContent));
  };

  const onCityChange = (evt) => {
    dispatch(changeCity(evt.target.textContent));
  };

  useEffect(() => {
    dispatch(fetchOffersList());
  }, [dispatch]);

  if (!offers.length) {
    return <EmptyMainPage onCityChange={onCityChange} city={city} isDataLoaded={isOffersLoaded}/>;
  }

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      {isDataLoadingError && <ServerError />}

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

export default MainPage;
