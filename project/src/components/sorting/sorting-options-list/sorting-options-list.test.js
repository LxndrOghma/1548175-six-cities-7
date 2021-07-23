import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SortingOptionsList from './sorting-options-list';

const mockSortingOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

let store;

describe('Component: SortingOptionsList', () => {

  it('should render correctly', () => {
    const mockStore = configureStore({});
    store = mockStore({
      UI: {
        sortType: 'Popular',
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <SortingOptionsList onSortTypeChange={() => {}} changeOpenedState={() => {}} isOpened/>
      </Provider>,
    );

    mockSortingOptions.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
