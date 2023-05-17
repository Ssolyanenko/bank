import React from 'react';
import { shallow } from 'enzyme';

import { CityModal } from 'components';

describe('<CityModal />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      selectedCity: 'London',
      popularCities: [
        { id: 1, city: 'Mexico' },
        { id: 1, city: 'Roma' },
      ],
      closeModal: jest.fn(),
      changeCity: jest.fn(),
    };
    const wrapper = shallow(<CityModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
