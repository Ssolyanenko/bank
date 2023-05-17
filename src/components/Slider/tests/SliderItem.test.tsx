import React from 'react';
import { shallow } from 'enzyme';

import { SliderItem } from 'components/Slider/SliderItem';

describe('<SliderItem />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      slide: 'images/landingBack.png',
    };
    const wrapper = shallow(<SliderItem {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
