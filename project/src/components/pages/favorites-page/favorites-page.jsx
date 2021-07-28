import React, { useEffect } from 'react';

import PageHeader from '../../header/page-header/page-header';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers, getIsDataLoadingError, getIsFavoriteOffersLoaded } from '../../../store/data/selectors';
import FavoritesSection from '../../favorites/favorites-section/favorites-section';
import EmptyFavoritesSection from '../../favorites/empty-favorites-section/empty-favorites-section';
import { fetchFavoriteOffers } from '../../../store/api-actions';
import ServerError from '../../server-error/server-error';
import LoadWrapper from '../../loading/load-wrapper/load-wrapper';

function FavoritesPage() {
  const offers = useSelector(getFavoriteOffers);
  const isDataLoadingError = useSelector(getIsDataLoadingError);
  const isFavoritesLoaded = useSelector(getIsFavoriteOffersLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className={`page ${offers.length === 0 && 'page--favorites-empty'}`}>
      <PageHeader />
      {isDataLoadingError && <ServerError />}

      <LoadWrapper isDataLoaded={isFavoritesLoaded}>
        <main className={`page__main page__main--favorites ${offers.length === 0 && 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {offers.length > 0 ? <FavoritesSection offers={offers} /> : <EmptyFavoritesSection />}
          </div>
        </main>
      </LoadWrapper>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
