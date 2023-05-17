import React from 'react';
import { shallow } from 'enzyme';

import { StepperLabel } from 'components/_basic';
import { Default } from 'components/_basic/StepperLabel/StepperLabel.stories';

describe('<StepperLabel />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      isCompleted: false,
    };
    const wrapper = shallow(<StepperLabel {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('renders StepperLabel without crashing', (): void => {
    const props = {
      isCompleted: false,
    };
    const wrapper = shallow(<StepperLabel {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  test('should render StepperLabel from storybook', (): void => {
    const props = {
      isCompleted: false,
    };
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(StepperLabel).length).toBe(1);
  });
});
