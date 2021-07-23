import React from 'react';
import {render} from '@testing-library/react';

import ImagesList from './images-list';

const mockImages = [ 'img/test1.jpg', 'img/test2.jpg'];

describe('Component: ImagesList', () => {

  it('should render correctly', () => {
    const { getByTestId } = render(
      <ImagesList images={mockImages} />,
    );

    mockImages.forEach((mockImage) => {
      expect(getByTestId(mockImage)).toBeInTheDocument();
    });
  });
});
