import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import CitiesListItem from './cities-list-item';

describe('Component: CitiesListItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const onCityChange = jest.fn();

    const {container} = render(
      <Router history={history}>
        <CitiesListItem city={'Paris'} onCityChange={onCityChange} activeCity={'Paris'} />
      </Router>,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).toBeInTheDocument();
    userEvent.click(screen.getByText('Paris'));
    expect(onCityChange).toBeCalled();
  });
});
