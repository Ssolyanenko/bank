import React from 'react';
import { shallow } from 'enzyme';

import { BranchContainer } from 'components';
import { mockBranch } from 'constants/branch';

describe('<BranchContainer />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      branch: mockBranch,
      selectBranch: jest.fn(),
      distance: '100m',
    };
    const wrapper = shallow(<BranchContainer {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
