import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import CitiesListItem from './cities-list-item';

describe('Component: CitiesListItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history} >
        <CitiesListItem city={'Paris'} onCityChange={() => {}} activeCity={'Paris'} />
      </Router>,
    );
    const cityElement = getByText('Paris');

    expect(cityElement).toBeInTheDocument();
  });
});
