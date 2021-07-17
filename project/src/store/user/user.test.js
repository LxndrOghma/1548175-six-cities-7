import { AuthorizationStatus } from '../../const';
import { ActionType } from '../action';
import user from './user';

describe('Reducer: user', () => {
  it('without additional parameters should reurn initial state', () => {
    expect(user(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: '',
        name: '',
      },
    });
  });

  it('should update authorization status by action payload', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: '',
        name: '',
      },
    };

    const changeSortType = {
      type: ActionType.REQUIED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, changeSortType)).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: '',
        name: '',
      },
    });
  });

  it('should set user by loaded data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: '',
        name: '',
      },
    };

    const setUser = {
      type: ActionType.SET_USER,
      payload: {
        avatarUrl: 'img/test',
        email: 'test@test.ru',
        id: 1,
        isPro: false,
        name: 'John',
      },
    };

    expect(user(state, setUser)).toEqual({
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        avatarUrl: 'img/test',
        email: 'test@test.ru',
        id: 1,
        isPro: false,
        name: 'John',
      },
    });
  });
});
