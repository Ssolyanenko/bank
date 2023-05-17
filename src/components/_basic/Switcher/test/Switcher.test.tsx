import React from 'react';
import { shallow } from 'enzyme';

import { Switcher } from 'components/_basic/Switcher';
import { Default } from 'components/_basic/Switcher/Switcher.stories';

describe('<Switcher />', (): void => {
  test('should make a snapshot of component', (): void => {
    const wrapper = shallow(<Switcher />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Switcher from storybook', (): void => {
    const wrapper = shallow(<Default />);

    expect(wrapper.find(Switcher).length).toBe(1);
  });
});
