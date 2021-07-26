import React, { useEffect } from 'react';

import PageHeader from '../../header/page-header/page-header';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../../store/data/selectors';
import FavoritesSection from '../../favorites/favorites-section/favorites-section';
import EmptyFavoritesSection from '../../favorites/empty-favorites-section/empty-favorites-section';
import { fetchFavoriteOffers } from '../../../store/api-actions';

function FavoritesPage() {
  const offers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className={`page ${offers.length === 0 && 'page--favorites-empty'}`}>
      <PageHeader />

      <main className={`page__main page__main--favorites ${offers.length === 0 && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {offers.length > 0 ? <FavoritesSection offers={offers} /> : <EmptyFavoritesSection />}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
