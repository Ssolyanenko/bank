import React from 'react';
import { shallow } from 'enzyme';

import { SecurityForm } from 'components';

describe('<SecurityForm/>', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<SecurityForm />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
