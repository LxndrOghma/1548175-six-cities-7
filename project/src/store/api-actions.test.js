import MockAdapter from 'axios-mock-adapter';
import { getAdaptedComment, getAdaptedOffer, getAdaptedUser } from '../adapter/adapter';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

import { createApi } from '../services/api';
import { ActionType } from './action';
import {
  checkAuth,
  fetchComments,
  fetchCurrentOffer,
  fetchFavoriteOffers,
  fetchNearbyOffers,
  fetchOffersList,
  login,
  logout,
  markOfferIsFavorite,
  sendComment
} from './api-actions';

let api = null;

const offer = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
  host: {
    'avatar_url': 'img/test.jpg',
    id: 1,
    'is_pro': false,
    name: 'Horus',
  },
  id: 2,
  images: ['img/test.jpg, img/test2.jpg'],
  'is_favorite': false,
  'is_premium': true,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  'max_adults': 2,
  'preview_image': 'img/test.jpg',
  price: 150,
  rating: 3,
  title: 'Excepteur sint occaecat cupidatat non proident',
  type: 'room',
};

const review = {
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  date: '2020-05-08T14:40:56.569Z',
  id: 2,
  rating: 2,
  user: {
    'avatar_url': 'img/test.jpg',
    id: 2,
    'is_pro': false,
    name: 'Jaghatai Khan',
  },
};

const userInfo =  {
  'avatar_url': 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  'is_pro': false,
  name: 'Oliver.conner',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  it('should make correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [offer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);


        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_DATA_LOADING_ERROR,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_OFFERS,
          payload: [getAdaptedOffer(offer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_OFFERS_LOAD_STATE,
          payload: true,
        });
      });
  });

  it('should make correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferLoader = fetchCurrentOffer(1);

    apiMock
      .onGet(`${APIRoute.HOTELS}/1`)
      .reply(200, offer);

    return currentOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: getAdaptedOffer(offer),
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
          payload: true,
        });
      });
  });

  it('should correctly handle the error code in API respone from GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentOfferLoader = fetchCurrentOffer(1);

    apiMock
      .onGet(`${APIRoute.HOTELS}/1`)
      .reply(404);

    return currentOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.NOT_FOUND,
        });
      });
  });

  it('should make correct API call to GET /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);

    apiMock
      .onGet(`${APIRoute.COMMENTS}1`)
      .reply(200, [review]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: [getAdaptedComment(review)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_COMMENTS_LOAD_STATE,
          payload: true,
        });
      });
  });

  it('should make correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [offer]);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);


        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_OFFERS_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_DATA_LOADING_ERROR,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [getAdaptedOffer(offer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_FAVORITE_OFFERS_LOAD_STATE,
          payload: true,
        });
      });
  });

  it('should make correct API call to POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferMarker = markOfferIsFavorite(1, 1);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/1/1`)
      .reply(200, offer);

    return favoriteOfferMarker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER_IS_FAVORITE,
          payload: getAdaptedOffer(offer),
        });
      });
  });

  it('should correctly handle the error code in API respone from POST /favorite/:hotel_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferMarker = markOfferIsFavorite(1, 1);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/1/1`)
      .reply(401);

    return favoriteOfferMarker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.LOGIN,
        });
      });
  });

  it('should make correct API call to POST /comments/: hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentSender = sendComment({id: 1, comment: 'text', rating: 3});

    apiMock
      .onPost(`${APIRoute.COMMENTS}1`)
      .reply(200, [review]);

    return commentSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_IS_COMMENT_POSTED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_COMMENTS,
          payload: [getAdaptedComment(review)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_COMMENTS_LOAD_STATE,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.SET_IS_COMMENT_POSTED,
          payload: true,
        });
      });
  });

  it('should make correct API call to GET /hotels/:hotel_id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(200, [offer]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NEARBY_OFFERS_LOAD_STATE,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_DATA_LOADING_ERROR,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [getAdaptedOffer(offer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_NEARBY_OFFERS_LOAD_STATE,
          payload: true,
        });
      });
  });

  it('should make correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, userInfo);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: getAdaptedUser(userInfo),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({email: 'test@test.ru', password: 'test'});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, userInfo);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: getAdaptedUser(userInfo),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });

        expect(Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.removeItem).toHaveBeenNthCalledWith(1, 'token');
      });
  });
});
