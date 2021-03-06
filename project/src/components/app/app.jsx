import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App() {

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainPage/>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignInPage />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <FavoritesPage />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.ROOM}>
        <RoomPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
