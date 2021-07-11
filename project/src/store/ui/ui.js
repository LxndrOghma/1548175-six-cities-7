import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../const';
import { changeCity, changeSortType } from '../action';

const initialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export default ui;
