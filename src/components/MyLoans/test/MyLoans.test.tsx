import React from 'react';
import { shallow } from 'enzyme';

import { MyLoans } from 'components/MyLoans';

describe('<MyLoans />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<MyLoans />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
