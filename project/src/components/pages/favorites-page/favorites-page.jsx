import React from 'react';

import Header from '../../header/page-header/page-header';
import { useSelector } from 'react-redux';
import { getOffers } from '../../../store/data/selectors';
import FavoritesSection from '../../favorites/favorites-section/favorites-section';
import EmptyFavoritesSection from '../../favorites/empty-favorites-section/empty-favorites-section';

function FavoritesPage() {
  const offers = useSelector(getOffers);

  return (
    <div className={`page ${offers.length === 0 && 'page--favorites-empty'}`}>
      <Header />

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
