import React from 'react';
import { shallow } from 'enzyme';

import { ModalConfirmation } from 'components/_basic';

describe('<ModalConfirmation />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      isOpened: true,
      onClose: jest.fn(),
      children: <div>Hello world</div>,
    };
    const wrapper = shallow(<ModalConfirmation {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
