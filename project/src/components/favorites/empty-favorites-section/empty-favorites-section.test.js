import React from 'react';
import { render } from '@testing-library/react';

import EmptyFavoritesSection from './empty-favorites-section';

describe('Component: EmptyFavoritesSection', () => {
  it('should render correctly', () => {
    const {getByText} = render(<EmptyFavoritesSection />);
    const statusElement = getByText('Nothing yet saved.');
    const statusDescriptionElement = getByText('Save properties to narrow down search or plan your future trips.');

    expect(statusElement).toBeInTheDocument();
    expect(statusDescriptionElement).toBeInTheDocument();
  });
});
