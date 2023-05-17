import React from 'react';
import { shallow } from 'enzyme';

import { InputSearchCity } from 'components';

describe('<InputSearchCity />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      cities: ['Mexico', 'Roma'],
      closeModal: jest.fn(),
      selectCity: jest.fn(),
      placeholder: 'Enter city name',
    };
    const wrapper = shallow(<InputSearchCity {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
