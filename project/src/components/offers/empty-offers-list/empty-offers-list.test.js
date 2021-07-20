import React from 'react';
import { render } from '@testing-library/react';

import EmptyOffersList from './empty-offers-list';

describe('Component: EmptyOffersList', () => {
  it('should render correctly', () => {
    const {getByText} = render(<EmptyOffersList city={'Paris'}/>);
    const citiesStatusElement = getByText('No places to stay available');
    const citiesStatusDescriptionElement = getByText('We could not find any property available at the moment in Paris');

    expect(citiesStatusElement).toBeInTheDocument();
    expect(citiesStatusDescriptionElement).toBeInTheDocument();
  });
});
