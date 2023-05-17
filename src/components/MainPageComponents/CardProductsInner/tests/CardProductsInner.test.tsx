import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { CardProductsInner } from 'components';

describe('<CardProductsInner />', (): void => {
  it('should make a snapshot component', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <CardProductsInner />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
