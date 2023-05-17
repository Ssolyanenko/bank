import React from 'react';
import { shallow } from 'enzyme';

import { ModalWrapper } from 'components/_basic/ModalWrapper';

describe('<ModalWrapper />', () => {
  test('should make a snapshot', () => {
    const props = {
      text: 'test',
      onClick: jest.fn(),
      onClose: jest.fn(),
      id: 'testId',
      subTitle: 'Login',
      textButton: 'textButton',
    };
    const wrapper = shallow(<ModalWrapper {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
