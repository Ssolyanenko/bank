import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { ModalBox } from 'components/_basic';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { ButtonNames } from 'constants/text';
import * as hooks from 'hooks';

jest.mock('hooks', () => {
  return {
    __esModule: true,
    ...jest.requireActual('hooks'),
  };
});

describe('<ModalBox />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      onSend: jest.fn(),
      messageTimeOut: <div>Error</div>,
      timeBlock: '',
      setIsActiveNewRequest: jest.fn(),
      isActiveNewRequest: false,
    };
    const wrapper = shallow(
      <Provider store={store}>
        <ModalBox {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should call dispatch on click', (): void => {
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const dispatchMock = jest.fn();
    const useTypedDispatch = jest.spyOn(hooks, 'useTypedDispatch');
    useTypedDispatch.mockImplementation(() => dispatchMock);

    const store = mockStore(mockInitialState);

    const props = {
      onSend: jest.fn(),
      messageTimeOut: <div>Error</div>,
      setIsActiveNewRequest: jest.fn(),
      timeBlock: '',
      isActiveNewRequest: false,
    };
    const wrapper = mount(
      <Provider store={store}>
        <ModalBox {...props} />
      </Provider>
    );

    wrapper.find(`button[children="${ButtonNames.SEND_AGAIN}"]`).simulate('click');
    expect(dispatchMock).toBeCalledTimes(1);

    jest.clearAllTimers();
    setTimeoutSpy.mockReset();
    setTimeoutSpy.mockRestore();
  });
});
