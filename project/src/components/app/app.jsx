import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import LoadingScreen from '../loading/loading';
import { connect } from 'react-redux';

function App({isDataLoaded}) {
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {AppRoute.MAIN}>
          <MainPage isDataLoaded={isDataLoaded}/>
        </Route>
        <Route exact path = {AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path = {AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path = {AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
