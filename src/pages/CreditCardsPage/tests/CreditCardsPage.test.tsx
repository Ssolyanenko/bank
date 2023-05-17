import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router';

import { ModalConfirmation } from 'components/_basic';
import { CreditCardsPage } from 'pages';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<CreditCardsPage />', () => {
  const store = mockStore(mockInitialState);

  test('should check a snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <CreditCardsPage />
        </Router>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should check snapshot modal with initial state', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CreditCardsPage />
      </Provider>
    );
    const component = wrapper.getElement();
    const modal = wrapper.find(ModalConfirmation);

    expect(component).not.toContain(modal);
  });

  test('should check snapshot component with isOpened modal', () => {
    const setHookState = (newState: { isOpened: boolean }) => jest.fn().mockImplementation(() => [newState, () => {}]);
    const reactMock = require('react');
    reactMock.useState = setHookState({ isOpened: true });

    const wrapper = shallow(
      <Provider store={store}>
        <CreditCardsPage />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
