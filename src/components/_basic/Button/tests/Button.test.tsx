import React from 'react';
import { shallow } from 'enzyme';

import { ButtonType } from 'interfaces/common/componentsSettings';
import { Button } from 'components/_basic';
import { Default } from 'components/_basic/Button/Button.stories';

describe('<Button />', () => {
  test('should make a snapshot', () => {
    const props = {
      children: 'test',
      type: ButtonType.SUBMIT,
      name: 'submit',
      onClick: jest.fn(),
      className: 'button',
    };
    const wrapper = shallow(<Button {...props}>{props.children}</Button>);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Button from storybook', () => {
    const props = {
      children: "I'm a basic button",
      type: ButtonType.SUBMIT,
      name: 'button',
      onClick: jest.fn(),
      className: 'button',
    };

    const wrapper = shallow(<Default {...props}>{props.children}</Default>);

    expect(wrapper.find(Button).length).toBe(1);
  });
});
