import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SortingOptionsItem from './sorting-options-item';

let store;

describe('Component: SortingOptionsItem', () => {

  it('should render correctly', () => {
    const mockStore = configureStore({});
    store = mockStore({
      UI: {
        sortType: 'Popular',
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <SortingOptionsItem label={'Popular'} changeOpenedState={() => {}} isOpened/>
      </Provider>,
    );

    expect(getByText(/Popular/i)).toBeInTheDocument();
  });
});
