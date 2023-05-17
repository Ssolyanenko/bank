import React from 'react';
import { shallow } from 'enzyme';

import { SetPinSuccessModal } from 'components';
import { ERROR, PENDING, SUCCESS } from 'constants/text';

const commonProps = {
  isOpen: true,
  handleClose: jest.fn(),
  status: SUCCESS as 'success',
};

describe('<SetPinSuccessModal />', (): void => {
  test('should make a snapshot SUCCESS status of change pin code modal', (): void => {
    const wrapper = shallow(<SetPinSuccessModal {...commonProps} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot ERROR status of change pin code modal', (): void => {
    const props = {
      ...commonProps,
      status: ERROR as 'error',
    };
    const wrapper = shallow(<SetPinSuccessModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot SUCCESS status of set pin code modal', (): void => {
    const props = {
      ...commonProps,
      hasRedirectButton: true,
    };
    const wrapper = shallow(<SetPinSuccessModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot ERROR status of set pin code modal', (): void => {
    const props = {
      ...commonProps,
      status: ERROR as 'error',
      hasRedirectButton: true,
    };
    const wrapper = shallow(<SetPinSuccessModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should not containt hasRedirectButton class', (): void => {
    const wrapper = shallow(<SetPinSuccessModal {...commonProps} />);

    expect(wrapper.find('div.hasRedirectButton')).toHaveLength(0);
  });
});
