import React from 'react';
import { render } from '@testing-library/react';

import PropertyHost from './property-host';

const testUser = {
  avatarUrl: 'img/test.jpg',
  name: 'John',
  isPro: false,
};

const testDescription = 'Test description';

describe('Component: PropertyHost', () => {
  it('should render correctly', () => {
    const {getByText, getByRole} = render(<PropertyHost description={testDescription} host={testUser} />);
    const hostTitleElement = getByText('Meet the host');
    const userNameElement = getByText('John');
    const textElement = getByText('Test description');
    const imageElement = getByRole('img', 'img/test.jpg');

    expect(hostTitleElement).toBeInTheDocument();
    expect(userNameElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'img/test.jpg');
  });
});
