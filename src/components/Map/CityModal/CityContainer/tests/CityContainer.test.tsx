import React from 'react';
import { shallow } from 'enzyme';

import { CityContainer } from 'components';

describe('<CityContainer />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      cities: ['Mexico', 'Roma'],
      selectItem: jest.fn(),
      closeModal: jest.fn(),
    };
    const wrapper = shallow(<CityContainer {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
