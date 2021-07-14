import { loadComments, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, logout as userLogout, redirectToRoute, requiredAuthorization, setCommentsLoadState, setCurrentOfferLoadState, setFavoriteOffersLoadState, setIsCommentPosted, setNearbyOffersLoadState, setOfferIsFavorite, setOffersLoadState, setUser } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { getAdaptedComment, getAdaptedOffer, getAdaptedUser } from '../adapter/adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const offers = data.map((offer) => getAdaptedOffer(offer));
      dispatch(loadOffers(offers));
    })
    .then(() => dispatch(setOffersLoadState(true)))
);

const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      const offer = getAdaptedOffer(data);
      dispatch(loadOffer(offer));
    })
    .then(() => dispatch(setCurrentOfferLoadState(true)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => {
      const comments = data.map((comment) => getAdaptedComment(comment));
      dispatch(loadComments(comments));
    })
    .then(() => dispatch(setCommentsLoadState(true)))
);

const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      const favoriteOffers = data.map((offer) => getAdaptedOffer(offer));
      dispatch(loadFavoriteOffers(favoriteOffers));
    })
    .then(() => dispatch(setFavoriteOffersLoadState(true)))
);

const markOfferIsFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => dispatch(setOfferIsFavorite(getAdaptedOffer(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

const sendComment = ({id, comment, rating}) => (dispatch, _getState, api) => {
  dispatch(setCommentsLoadState(false));
  dispatch(setIsCommentPosted(false));
  return api.post(`${APIRoute.COMMENTS}${id}`, {comment, rating})
    .then((response) => {
      const { data } = response;
      const comments = data.map((loadedComment) => getAdaptedComment(loadedComment));
      dispatch(loadComments(comments));
      dispatch(setCommentsLoadState(true));
      dispatch(setIsCommentPosted(true));
    });
};

const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const offers = data.map((offer) => getAdaptedOffer(offer));
      dispatch(loadNearbyOffers(offers));
    })
    .then(() => dispatch(setNearbyOffersLoadState(true)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(getAdaptedUser(data))))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUser(getAdaptedUser(data)));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export {
  fetchOffersList,
  fetchCurrentOffer,
  fetchComments,
  sendComment,
  fetchNearbyOffers,
  fetchFavoriteOffers,
  markOfferIsFavorite,
  checkAuth,
  login,
  logout
};

