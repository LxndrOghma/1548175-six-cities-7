import {
  ActionType,
  changeCity,
  changeSortType,
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  logout,
  redirectToRoute,
  requiredAuthorization,
  setCommentsLoadState,
  setCurrentOfferLoadState,
  setFavoriteOffersLoadState,
  setIsCommentPosted,
  setNearbyOffersLoadState,
  setOfferIsFavorite,
  setOffersLoadState,
  setUser
} from './action';

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for changing sort type returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: 'Popular',
    };

    expect(changeSortType('Popular')).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: [{offer: 'offer'}, {offer: 'offer'}],
    };

    expect(loadOffers([{offer: 'offer'}, {offer: 'offer'}])).toEqual(expectedAction);
  });

  it('action creator for loading current offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: {offer: 'offer'},
    };

    expect(loadOffer({offer: 'offer'})).toEqual(expectedAction);
  });

  it('action creator for loading comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{comment: 'comment'}, {comment: 'comment'}],
    };

    expect(loadComments([{comment: 'comment'}, {comment: 'comment'}])).toEqual(expectedAction);
  });

  it('action creator for loading nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{nearbyOffer: 'nearbyOffer'}, {nearbyOffer: 'nearbyOffer'}],
    };

    expect(loadNearbyOffers([{nearbyOffer: 'nearbyOffer'}, {nearbyOffer: 'nearbyOffer'}])).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{favoriteOffer: 'favoriteOffer'}, {favoriteOffer: 'favoriteOffer'}],
    };

    expect(loadFavoriteOffers([{favoriteOffer: 'favoriteOffer'}, {favoriteOffer: 'favoriteOffer'}])).toEqual(expectedAction);
  });

  it('action creator for seting offers load state returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(setOffersLoadState(true)).toEqual(expectedAction);
  });

  it('action creator for seting current offer load state returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
      payload: true,
    };

    expect(setCurrentOfferLoadState(true)).toEqual(expectedAction);
  });

  it('action creator for seting comments load state returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_COMMENTS_LOAD_STATE,
      payload: true,
    };

    expect(setCommentsLoadState(true)).toEqual(expectedAction);
  });

  it('action creator for seting comment posting status returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_COMMENT_POSTED,
      payload: true,
    };

    expect(setIsCommentPosted(true)).toEqual(expectedAction);
  });

  it('action creator for seting nearby offers load state returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_NEARBY_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(setNearbyOffersLoadState(true)).toEqual(expectedAction);
  });

  it('action creator for seting favorite offers load state returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITE_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(setFavoriteOffersLoadState(true)).toEqual(expectedAction);
  });

  it('action creator for seting offer favorite status returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_OFFER_IS_FAVORITE,
      payload: true,
    };

    expect(setOfferIsFavorite(true)).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requiredAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    expect(redirectToRoute('/login')).toEqual(expectedAction);
  });

  it('action creator for seting user returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: {user: 'user'},
    };

    expect(setUser({user: 'user'})).toEqual(expectedAction);
  });
});
