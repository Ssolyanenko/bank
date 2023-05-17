import React from 'react';
import { shallow } from 'enzyme';

import { TransferIcon } from 'assets';
import { MapButton } from 'components';

describe('<MapButton />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      icon: <TransferIcon className="" />,
      text: 'Transfer',
    };
    const wrapper = shallow(<MapButton {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
