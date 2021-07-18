import React from 'react';
import { render } from '@testing-library/react';

import PropertyImage from './property-image';

describe('Component: PropertyImage', () => {
  it('should render correctly', () => {
    const {getByRole} = render(<PropertyImage imageUrl={'img/test.jpg'}/>);
    const imageElement = getByRole('img', 'img/test.jpg');

    expect(imageElement).toHaveAttribute('src', 'img/test.jpg');
  });
});
