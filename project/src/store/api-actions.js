import { ActionCreator } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { getAdaptedOffer, getAdaptedUser } from '../adapter/adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const offers = data.map((offer) => getAdaptedOffer(offer));
      dispatch(ActionCreator.loadOffers(offers));
    })
    .then(() => dispatch(ActionCreator.setLoadState(true)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUser(getAdaptedUser(data))))
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUser(getAdaptedUser(data)));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export {
  fetchOffersList,
  checkAuth,
  login,
  logout
};

