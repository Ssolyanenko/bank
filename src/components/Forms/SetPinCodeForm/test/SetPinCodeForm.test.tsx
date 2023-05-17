import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';

import { SetPinCodeForm } from 'components';
import { ButtonNames } from 'constants/text';

describe('<SetPinCodeForm />', (): void => {
  test('should make snapshot of the component', (): void => {
    const props = {
      handlePinChangeModal: jest.fn(),
      title: 'Some title',
      buttonName: ButtonNames.SET_PIN_CODE,
    };

    const wrapper = shallow(<SetPinCodeForm {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should change field label on click', (): void => {
    let isFieldClickedMock = false;
    const setIsFieldClickedMock = jest.fn((x) => (isFieldClickedMock = x));
    jest.spyOn(React, 'useState').mockImplementation(() => [isFieldClickedMock, setIsFieldClickedMock]);

    const props = {
      handlePinChangeModal: jest.fn(),
      title: 'Some title',
      buttonName: ButtonNames.SET_PIN_CODE,
    };

    const wrapper = mount(<SetPinCodeForm {...props} />);

    wrapper.find('label.inputLabel').at(0).simulate('click');
    expect(setIsFieldClickedMock).toHaveBeenCalled();
  });

  test('should change newPin value', (): void => {
    const handleValueChange = jest.fn();

    const props = {
      handlePinChangeModal: jest.fn(),
      title: 'Some title',
      buttonName: ButtonNames.SET_PIN_CODE,
      handleValueChange: handleValueChange,
    };

    const wrapper = mount(<SetPinCodeForm {...props} />);

    wrapper.find('input[name="newPin"]').simulate('change', { target: { value: '1111' } });
    expect(handleValueChange).toHaveBeenCalled();
  });

  test('should change newPinConfirm value', (): void => {
    const handleValueChange = jest.fn();

    const props = {
      handlePinChangeModal: jest.fn(),
      title: 'Some title',
      buttonName: ButtonNames.SET_PIN_CODE,
      handleValueChange: handleValueChange,
    };

    const wrapper = mount(<SetPinCodeForm {...props} />);

    wrapper.find('input[name="newPinConfirm"]').simulate('change', { target: { value: '1111' } });
    expect(handleValueChange).toHaveBeenCalled();
  });
});
