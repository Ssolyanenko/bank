import React from 'react';
import { shallow } from 'enzyme';

import { Slider } from 'components/Slider/Slider';

describe('<Slider />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      slides: [
        'images/landingBack.png',
        'images/landingBack2.png',
        'images/landingBack3.png',
        'images/landingBack4.png',
      ],
      activeSlide: 0,
    };
    const wrapper = shallow(<Slider {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
