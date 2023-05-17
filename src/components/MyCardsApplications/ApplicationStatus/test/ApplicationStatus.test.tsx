import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { ApplicationStatus } from 'components';
import { CardApplicationStatus } from 'constants/cardApplicationStatus';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

const store = mockStore(mockInitialState);

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

describe('<ApplicationStatus />', (): void => {
  test('should render component with the Activate button', (): void => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <ApplicationStatus cardId={1} status={CardApplicationStatus.COLLECTED} />
        </Provider>
      </MemoryRouter>
    );
    const component = wrapper.find('button.activateButton');

    expect(component.text()).toEqual('buttonNames.activate');
  });

  test('should render component without the Activate button', (): void => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <ApplicationStatus cardId={1} status={CardApplicationStatus.ON_THE_WAY} />
        </Provider>
      </MemoryRouter>
    );
    const component = wrapper.find('button.activateButton');

    expect(component).not.toBeInTheDocument;
  });

  test('should open the Pin Code modal form', (): void => {
    const isOpenPinModalMock = false;
    const setIsOpenPinModalMock = jest.fn((x) => {});
    jest.spyOn(React, 'useState').mockReturnValue([isOpenPinModalMock, setIsOpenPinModalMock]);

    const history = createMemoryHistory({ initialEntries: ['/main-page/cards/card-applications'] });

    const wrapper = mount(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <ApplicationStatus cardId={1} status={CardApplicationStatus.COLLECTED} />
        </Provider>
      </Router>
    );
    wrapper.find('button.activateButton').simulate('click');

    expect(setIsOpenPinModalMock).toHaveBeenCalled();
  });
});
