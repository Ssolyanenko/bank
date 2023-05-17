import React from 'react';
import { shallow } from 'enzyme';

import { SetPinCodeFormModal } from 'components';
import { ButtonNames } from 'constants/text';

describe('<SetPinCodeFormModal', (): void => {
  it('should make a snapshot of the component', (): void => {
    const props = {
      handlePinChangeModal: jest.fn(),
      title: 'change pin code',
      buttonName: ButtonNames.CHANGE,
      isOpen: false,
      handleClose: jest.fn(),
    };

    const wrapper = shallow(<SetPinCodeFormModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
