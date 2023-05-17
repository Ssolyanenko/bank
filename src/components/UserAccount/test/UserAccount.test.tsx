import React from 'react';
import { shallow } from 'enzyme';

import { UserAccount } from 'components';

describe('<UserAccount />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<UserAccount />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
