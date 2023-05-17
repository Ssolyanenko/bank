import React from 'react';
import { shallow } from 'enzyme';

import { InputConverter } from 'components';

describe('<InputConverter />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      rate: 'USD',
      value: '100',
      text: 'Amount',
      setValue: jest.fn(),
    };
    const wrapper = shallow(<InputConverter {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
