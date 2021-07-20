import React from 'react';
import { render } from '@testing-library/react';

import GoodsItem from './goods-item';

describe('Component: GoodsItem', () => {
  it('should render correctly', () => {
    const {getByText} = render(<GoodsItem good={'Kitchen'}/>);
    const goodElement = getByText('Kitchen');

    expect(goodElement).toBeInTheDocument();
  });
});
