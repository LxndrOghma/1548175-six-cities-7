import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../const';
import { ActionType } from '../action';
import ui from './ui';

describe('Reducer: ui', () => {
  it('without additional parameters should reurn initial state', () => {
    expect(ui(undefined, {})).toEqual({
      city: DEFAULT_CITY,
      sortType: DEFAULT_SORT_TYPE,
    });
  });

  it('should update city by action payload', () => {
    const state = {
      city: DEFAULT_CITY,
      sortType: DEFAULT_SORT_TYPE,
    };

    const changeCity = {
      type: ActionType.CHANGE_CITY,
      payload: 'Amsterdam',
    };

    expect(ui(state, changeCity)).toEqual({
      city: 'Amsterdam',
      sortType: DEFAULT_SORT_TYPE,
    });
  });

  it('should update sort type by action payload', () => {
    const state = {
      city: DEFAULT_CITY,
      sortType: DEFAULT_SORT_TYPE,
    };

    const changeSortType = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: 'Top rated first',
    };

    expect(ui(state, changeSortType)).toEqual({
      city: DEFAULT_CITY,
      sortType: 'Top rated first',
    });
  });
});
