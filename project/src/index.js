import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, nearestOffers} from './mocks/offers';
import reviews from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      nearestOffers={nearestOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
