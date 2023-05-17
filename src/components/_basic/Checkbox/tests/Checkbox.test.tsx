import 'jsdom-global/register';
import React, { ChangeEvent } from 'react';
import { mount, shallow } from 'enzyme';
import { Checkbox as CheckboxMUI } from '@mui/material';

import { Checkbox } from 'components/_basic';
import { Default } from 'components/_basic/Checkbox/Checkbox.stories';

describe('<Checkbox />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      name: 'checkbox',
      onChange: jest.fn(),
    };
    const wrapper = shallow(<Checkbox {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should change check', (): void => {
    const onCheckMock = jest.fn();
    const props = {
      name: 'checkbox',
      onChange: onCheckMock,
    };
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find(CheckboxMUI).simulate('change', {});

    expect(onCheckMock).toHaveBeenCalled();
  });

  test('should render Checkbox from storybook', (): void => {
    const props = {
      name: 'checkbox',
      onChange: jest.fn(),
      value: true,
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(Checkbox).length).toBe(1);
  });

  test('should handle storybook checkbox change', (): void => {
    let valueMock = false;
    const setValueMock = jest.fn((value) => {
      valueMock = value;
    });
    jest.spyOn(React, 'useState').mockImplementation(() => [valueMock, setValueMock]);

    const props = {
      name: 'checkbox',
      onChange: ({ target: { checked } }: ChangeEvent<HTMLInputElement>): void => setValueMock(checked),
      value: valueMock,
    };

    const wrapper = mount(<Default {...props} />);
    wrapper.find('input').simulate('change', { target: { checked: true } });

    expect(valueMock).toEqual(true);
  });
});
