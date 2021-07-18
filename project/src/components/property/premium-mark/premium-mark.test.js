import React from 'react';
import { render } from '@testing-library/react';

import PremiumMark from './premium-mark';

describe('Component: PremiumMark', () => {
  it('should render correctly', () => {
    const {getByText} = render(<PremiumMark />);
    const markElement = getByText('Premium');

    expect(markElement).toBeInTheDocument();
  });
});
