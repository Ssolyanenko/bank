import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { ModalForm } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

const store = mockStore(mockInitialState);

describe('<ModalForm />', (): void => {
  test('renders without error', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );

    expect(wrapper.find(ModalForm).length).toBe(1);
  });

  test('should not submit on empty input field', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
    const onSubmit = jest.fn();
    const form = wrapper.find('form');
    form.simulate('submit');

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('should not submit onClick on empty input field', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
    const onSubmit = jest.fn();
    const btn = wrapper.find('button[type="submit"]');
    btn.simulate('click');

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('should render SMS error message', (): void => {
    const state = {
      ...mockInitialState,
      userData: {
        ...mockInitialState.userData,
        errorMessage: 'error',
      },
    };

    const store = mockStore(state);

    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );

    expect(wrapper.find('span.formInputSMSMessage')).toHaveLength(1);
  });

  test('should render SMS ban Login timer', (): void => {
    jest.useFakeTimers();
    const state = {
      ...mockInitialState,
      userData: {
        ...mockInitialState.userData,
        userLogin: {
          ...mockInitialState.userData.userLogin,
          isSMSBanState: true,
        },
      },
    };

    const store = mockStore(state);

    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );

    expect(wrapper.find('button[type="submit"]').text()).toEqual(' 30:00 ');
    jest.useRealTimers();
  });
});
