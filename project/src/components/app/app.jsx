import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import offersProp from '../props/offers.prop';
import reviewsProp from '../props/reviews.prop';

function App({offers, reviews, nearestOffers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path = {AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path = {AppRoute.FAVORITES}>
          <FavoritesPage offers={ offers } />
        </Route>
        <Route exact path = {AppRoute.ROOM}>
          <RoomPage reviews={reviews} nearestOffers={nearestOffers}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes ={
  offers: PropTypes.arrayOf(offersProp).isRequired,
  nearestOffers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};


export default App;
