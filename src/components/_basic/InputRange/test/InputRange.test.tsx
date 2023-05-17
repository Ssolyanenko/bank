import React from 'react';
import { shallow } from 'enzyme';

import { InputRange } from 'components/_basic';
import { Default } from 'components/_basic/InputRange/InputRange.stories';

describe('<InputRange />', () => {
  test('should make a snapshot of component', () => {
    const props = {
      className: '',
      count: [0, 10000],
      handleChangeCount: jest.fn(),
      min: 0,
      max: 100000,
    };
    const wrapper = shallow(<InputRange {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render InputRange from storybook', (): void => {
    const props = {
      className: '',
      count: [0, 10000],
      handleChangeCount: jest.fn(),
      min: 0,
      max: 100000,
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(InputRange).length).toBe(1);
  });
});
