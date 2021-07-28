import { DEFAULT_OFFER } from '../../const';
import { ActionType } from '../action';
import data from './data';

describe('Reducer: data', () => {
  it('without additional parameters should reurn initial state', () => {
    expect(data(undefined, {})).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should update offers by loaded data', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: [{offer: 'offer'}, {offer: 'offer'}],
    };

    expect(data(state, loadOffers)).toEqual({
      offers: [{offer: 'offer'}, {offer: 'offer'}],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should update current offer by loaded data', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const loadOffer = {
      type: ActionType.LOAD_OFFER,
      payload: {currentOffer: 'currentOffer'},
    };

    expect(data(state, loadOffer)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: {currentOffer: 'currentOffer'},
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should update reviews by loaded data', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const loadComments = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{comment: 'comment'}, {comment: 'comment'}],
    };

    expect(data(state, loadComments)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [{comment: 'comment'}, {comment: 'comment'}],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should update nearby offers by loaded data', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const loadNearbyOffers = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{nearbyOffer: 'nearbyOffer'}, {nearbyOffer: 'nearbyOffer'}],
    };

    expect(data(state, loadNearbyOffers)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [{nearbyOffer: 'nearbyOffer'}, {nearbyOffer: 'nearbyOffer'}],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should update favorite offers by loaded data', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const loadFavoriteOffers = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{favoriteOffer: 'favoriteOffer'}, {favoriteOffer: 'favoriteOffer'}],
    };

    expect(data(state, loadFavoriteOffers)).toEqual({
      offers: [],
      favoriteOffers: [{favoriteOffer: 'favoriteOffer'}, {favoriteOffer: 'favoriteOffer'}],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set offers load state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setOffersLoadState = {
      type: ActionType.SET_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(data(state, setOffersLoadState)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: true,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set current offer load state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setCurrentOfferLoadState = {
      type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
      payload: true,
    };

    expect(data(state, setCurrentOfferLoadState)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: true,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set comments load state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setCommentsLoadState = {
      type: ActionType.SET_COMMENTS_LOAD_STATE,
      payload: true,
    };

    expect(data(state, setCommentsLoadState)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: true,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set nearby offers load state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setNearbyOffersLoadState = {
      type: ActionType.SET_NEARBY_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(data(state, setNearbyOffersLoadState)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: true,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set favorite offers load state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setFavoriteOffersLoadState = {
      type: ActionType.SET_FAVORITE_OFFERS_LOAD_STATE,
      payload: true,
    };

    expect(data(state, setFavoriteOffersLoadState)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: true,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set comment posting state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setIsCommentPosted = {
      type: ActionType.SET_IS_COMMENT_POSTED,
      payload: false,
    };

    expect(data(state, setIsCommentPosted)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: false,
      isDataLoadingError: false,
    });
  });

  it('should set offer favorite state by action payload', () => {
    const state = {
      offers: [{
        id: 1,
        isFavorite: false,
      }],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setOfferIsFavorite = {
      type: ActionType.SET_OFFER_IS_FAVORITE,
      payload: {
        id: 1,
        isFavorite: true,
      },
    };

    expect(data(state, setOfferIsFavorite)).toEqual({
      offers: [{
        id: 1,
        isFavorite: true,
      }],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    });
  });

  it('should set data loading error state by action payload', () => {
    const state = {
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: false,
    };

    const setIsCommentPosted = {
      type: ActionType.SET_DATA_LOADING_ERROR,
      payload: true,
    };

    expect(data(state, setIsCommentPosted)).toEqual({
      offers: [],
      favoriteOffers: [],
      currentOffer: DEFAULT_OFFER,
      reviews: [],
      nearbyOffers: [],
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isCommentsLoaded: false,
      isNearbyOffersLoaded: false,
      isFavoriteOffersLoaded: false,
      isCommentPosted: true,
      isDataLoadingError: true,
    });
  });
});
