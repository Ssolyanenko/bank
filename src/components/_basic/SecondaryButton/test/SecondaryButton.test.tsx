import React from 'react';
import { shallow } from 'enzyme';

import { SecondaryButton } from 'components/_basic';
import { Default } from 'components/_basic/SecondaryButton/SecondaryButton.stories';

describe('<SecondaryButton />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      children: 'test',
      onClick: jest.fn(),
      className: 'button',
    };
    const wrapper = shallow(<SecondaryButton {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render SecondaryButton from storybook', (): void => {
    const props = {
      children: 'test',
      onClick: jest.fn(),
      className: 'button',
    };
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(SecondaryButton).length).toBe(1);
  });
});
