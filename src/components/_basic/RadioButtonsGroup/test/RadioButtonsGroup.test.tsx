import React from 'react';
import { shallow } from 'enzyme';

import { RadioButtonsGroup } from 'components/_basic';
import { Default } from 'components/_basic/RadioButtonsGroup/RadioButtonsGroup.stories';

describe('<RadioButtonsGroup />', (): void => {
  test('should make a snapshot component', (): void => {
    const onChangeMock = jest.fn();
    const props = {
      name: 'radio',
      radioGroupArray: [{ id: 11, value: 'pensioner', label: 'Pensioner' }],
      onChange: onChangeMock,
      defaultChecked: 'pensioner',
    };
    const wrapper = shallow(<RadioButtonsGroup {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render RadioButtonsGroup from storybook', (): void => {
    const onChangeMock = jest.fn();
    const props = {
      name: 'radio',
      radioGroupArray: [{ id: 11, value: 'pensioner', label: 'Pensioner' }],
      onChange: onChangeMock,
      defaultChecked: 'pensioner',
    };
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(RadioButtonsGroup).length).toBe(1);
  });
});
