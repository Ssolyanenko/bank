import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { LandingPage } from 'pages';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { ButtonNames } from 'constants/text';
import { act } from 'react-dom/test-utils';

describe('<LandingPage />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should switch index on click', (): void => {
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const switchIndexMock = jest.fn();

    const store = mockStore(mockInitialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    wrapper.find('.sliderButton').at(1).simulate('click');
    setImmediate(() => {
      act(() => wrapper.update());
      expect(switchIndexMock).toBeCalledWith(33);
    });

    jest.clearAllTimers();
    setTimeoutSpy.mockReset();
    setTimeoutSpy.mockRestore();
  });

  test('should open modal on click on Forgot password', (): void => {
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const openModalMock = jest.fn();

    const store = mockStore(mockInitialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    wrapper.find(`button[children="${ButtonNames.FORGOT_PASSWORD}"]`).simulate('click');
    setImmediate((): void => {
      act(() => wrapper.update());
      expect(openModalMock).toBeCalled();
    });

    jest.clearAllTimers();
    setTimeoutSpy.mockReset();
    setTimeoutSpy.mockRestore();
  });

  test('should call setInterval callback after 5 seconds', (): void => {
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const setTimeoutCallbackMock = jest.fn();

    const store = mockStore(mockInitialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    act(() => jest.advanceTimersByTime(5000));
    setImmediate(() => {
      act(() => wrapper.update());
      expect(setTimeoutCallbackMock).toBeCalled();
    });

    jest.clearAllTimers();
    setTimeoutSpy.mockReset();
    setTimeoutSpy.mockRestore();
  });

  test('should remove setInterval on component unmount', (): void => {
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

    const componentUnmountMock = jest.fn();

    const store = mockStore(mockInitialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    );

    setImmediate(() => {
      act(() => wrapper.unmount());
      expect(componentUnmountMock).toBeCalledTimes(1);
    });

    jest.clearAllTimers();
    setTimeoutSpy.mockReset();
    setTimeoutSpy.mockRestore();
  });
});
