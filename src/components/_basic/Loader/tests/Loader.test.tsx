import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from 'components/_basic';
import { Default } from 'components/_basic/Loader/Loader.stories';

describe('<Loader />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<Loader />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Loader from storybook', (): void => {
    const wrapper = shallow(<Default />);

    expect(wrapper.find(Loader).length).toBe(1);
  });
});
