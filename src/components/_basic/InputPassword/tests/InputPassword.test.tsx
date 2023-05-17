import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { InputAdornment } from '@mui/material';

import { InputPassword } from 'components/_basic/InputPassword';
import { Default } from 'components/_basic/InputPassword/InputPassword.stories';
import { STATUS_ICONS } from 'constants/statusIcons';
import { AdorPosition } from 'constants/formInputs';

describe('<InputPassword />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      labelText: 'Password',
      name: 'password',
      value: 'password',
      isError: false,
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };
    const wrapper = shallow(<InputPassword {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render InputPassword from storybook', (): void => {
    const props = {
      labelText: 'Password',
      name: 'password',
      value: 'password',
      isError: false,
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(InputPassword).length).toBe(1);
  });

  test('should show warning icon when validation doesn`t pass', (): void => {
    const props = {
      labelText: 'Password',
      name: 'password',
      value: 'password',
      isError: true,
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };
    const wrapper = shallow<typeof InputPassword>(<InputPassword {...props} />);
    const visibleIcon = wrapper.find('.passwordInput').prop('InputProps');
    const warningIcon = {
      endAdornment: <InputAdornment position={AdorPosition.END}>{STATUS_ICONS.error}</InputAdornment>,
    };

    expect(visibleIcon).toStrictEqual(warningIcon);
  });

  test('should change state on show password', (): void => {
    const props = {
      labelText: 'Password',
      name: 'password',
      value: 'password',
      isError: false,
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };

    const setStateMock = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((initialState: boolean = false) => [initialState, setStateMock]);

    const wrapper = mount(<InputPassword {...props} />);

    wrapper.find('.showPassword').simulate('click');
    expect(setStateMock).toBeCalledWith(true);
  });
});
