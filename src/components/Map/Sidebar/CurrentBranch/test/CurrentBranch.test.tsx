import React from 'react';
import { shallow } from 'enzyme';

import { CurrentBranch } from 'components';
import { mockBranch } from 'constants/branch';

describe('<CurrentBranch />', (): void => {
  test('should make a snapshot', (): void => {
    const props = { branch: mockBranch, calculateRoute: jest.fn(), distance: '100m', handleActiveMarker: jest.fn() };
    const wrapper = shallow(<CurrentBranch {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
