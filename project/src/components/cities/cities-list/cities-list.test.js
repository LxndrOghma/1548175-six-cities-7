import React from 'react';
import { render, screen } from '@testing-library/react';

import CitiesList from './cities-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const cities = [
  {
    name: 'Paris',
    id: 'city-1',
  },
  {
    name: 'Cologne',
    id: 'city-2',
  },
  {
    name: 'Brussels',
    id: 'city-3',
  },
  {
    name: 'Amsterdam',
    id: 'city-4',
  },
  {
    name: 'Hamburg',
    id: 'city-5',
  },
  {
    name: 'Dusseldorf',
    id: 'city-6',
  },
];
let history;

describe('Component: CitiesList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CitiesList onCityChange={() => {}} activeCity={'Amsterdam'}/>
      </Router>,
    );

    cities.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
  });
});
