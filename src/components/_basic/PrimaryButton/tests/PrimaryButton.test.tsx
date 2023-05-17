import React from 'react';
import { shallow } from 'enzyme';

import { PrimaryButton } from 'components/_basic';
import { Default } from 'components/_basic/PrimaryButton/PrimaryButton.stories';

describe('<PrimaryButton />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      children: 'test',
      onClick: jest.fn(),
      className: 'button',
    };
    const wrapper = shallow(<PrimaryButton {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render PrimaryButton from storybook', (): void => {
    const props = {
      children: 'test',
      onClick: jest.fn(),
      className: 'button',
    };
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(PrimaryButton).length).toBe(1);
  });
});
