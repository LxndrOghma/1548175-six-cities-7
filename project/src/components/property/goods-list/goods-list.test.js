import React from 'react';
import { render } from '@testing-library/react';

import GoodsList from './goods-list';

describe('Component: GoodsList', () => {
  it('should render correctly', () => {
    const {getByText} = render(<GoodsList goods={['Kitchen', 'Washing machine']}/>);
    const titleElement = getByText('What\'s inside');

    expect(titleElement).toBeInTheDocument();
  });
});
