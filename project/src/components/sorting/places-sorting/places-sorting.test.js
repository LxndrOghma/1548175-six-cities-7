import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import PlacesSorting from './places-sorting';

let store;

describe('Component: PlacesSorting', () => {

  it('should render correctly', () => {
    const onSortTypeChange = jest.fn();

    const mockStore = configureStore({});
    store = mockStore({
      UI: {
        sortType: 'Popular',
      },
    });
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <PlacesSorting onSortTypeChange={onSortTypeChange} />
      </Provider>,
    );

    expect(getByText(/Sort by/i)).toBeInTheDocument();
    expect(getByTestId('places__sorting-type').textContent).toBe('Popular');
  });
});
