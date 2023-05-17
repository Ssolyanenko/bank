import React from 'react';
import { shallow } from 'enzyme';

import { ModalSuccess } from 'components/_basic';

describe('<ModalSuccess />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      text: 'Some dummy text',
    };
    const wrapper = shallow(<ModalSuccess {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
