import React from 'react';
import { render } from '@testing-library/react';

import ProMark from './pro-mark';

describe('Component: PremiumMark', () => {
  it('should render correctly', () => {
    const {getByText} = render(<ProMark />);
    const markElement = getByText('Pro');

    expect(markElement).toBeInTheDocument();
  });
});
