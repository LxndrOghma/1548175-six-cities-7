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

function App({placesCount, offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = { AppRoute.MAIN }>
          <MainPage placesCount={ placesCount } offers={ offers }/>
        </Route>
        <Route exact path = { AppRoute.LOGIN }>
          <SignInPage />
        </Route>
        <Route exact path = { AppRoute.FAVORITES }>
          <FavoritesPage />
        </Route>
        <Route exact path = { AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes ={
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf( offersProp ).isRequired,
};


export default App;
