import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from 'components/_basic/Modal/Modal';
import { Default } from 'components/_basic/Modal/Modal.stories';

const props = {
  isOpen: true,
  handleClose: jest.fn(),
  children: <div>Child</div>,
  ariaLabelLabeledBy: 'aria-labelledby',
  ariaLabelDescribedBy: 'aria-labeldescribedby',
};

describe('<Modal />', (): void => {
  it('should make a snapshot', (): void => {
    const wrapper = shallow(<Modal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Modal from storybook', (): void => {
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(Modal).length).toBe(1);
  });
});
