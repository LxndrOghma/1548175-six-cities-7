import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';

function App({placesCount}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = { AppRoute.MAIN }>
          <MainPage placesCount={ placesCount }/>
        </Route>
        <Route exact path = { AppRoute.LOGIN }>
          <SignIn />
        </Route>
        <Route exact path = { AppRoute.FAVORITES }>
          <Favorites />
        </Route>
        <Route exact path = { AppRoute.ROOM}>
          <Room />
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
};


export default App;
