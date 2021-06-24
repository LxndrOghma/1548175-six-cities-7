import React from 'react';
import PropTypes from 'prop-types';

import FavoritesList from '../../favorites/favorites-list/favorites-list';
import Header from '../../header/page-header/page-header';
import offersProp from '../../props/offers.prop';
import { connect } from 'react-redux';

function FavoritesPage({offers}) {
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

FavoritesPage.propTypes ={
  offers: PropTypes.arrayOf( offersProp ).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
