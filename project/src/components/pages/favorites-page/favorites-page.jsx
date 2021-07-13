import React from 'react';

import FavoritesList from '../../favorites/favorites-list/favorites-list';
import Header from '../../header/page-header/page-header';
import { useSelector } from 'react-redux';
import { getOffers } from '../../../store/data/selectors';

function FavoritesPage() {
  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
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
