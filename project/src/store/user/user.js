import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { logout, requiredAuthorization, setUser } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: '',
    name: '',
  },
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requiredAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.user = {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: '',
        name: '',
      };
    })
    .addCase(setUser, (state, action) => {
      state.user = {
        avatarUrl: action.payload.avatarUrl,
        email: action.payload.email,
        id: action.payload.id,
        isPro: action.payload.isPro,
        name: action.payload.name,
      };
    });
});

export default user;
