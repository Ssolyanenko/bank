import React from 'react';
import { shallow } from 'enzyme';

import { ResponseModal } from 'components';
import { ERROR, SUCCESS } from 'constants/text';
import { ERROR_MESSAGE } from 'constants/errors';
import { Default } from 'components/ResponseModal/ResponseModal.stories';

describe('<ResponseModal />', (): void => {
  test('should make shapshot of default modal', (): void => {
    const props = {
      isOpened: true,
      modalCloseHandler: jest.fn(),
      content: ERROR_MESSAGE.somethingWentWrong,
      status: ERROR as 'error',
    };

    const wrapper = shallow(<ResponseModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot of error modal', (): void => {
    const props = {
      isOpened: true,
      modalCloseHandler: jest.fn(),
      content: 'Invalid phone number. Try again.',
      status: ERROR as 'error',
    };

    const wrapper = shallow(<ResponseModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot of success modal', (): void => {
    const props = {
      isOpened: true,
      modalCloseHandler: jest.fn(),
      content: 'Your card order is received.',
      status: SUCCESS as 'success',
    };

    const wrapper = shallow(<ResponseModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render ResponseModal from storybook', (): void => {
    const props = {
      isOpened: true,
      modalCloseHandler: jest.fn(),
      content: 'Your card order is received.',
      status: SUCCESS as 'success',
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(ResponseModal).length).toBe(1);
  });
});
