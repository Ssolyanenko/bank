import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import { Loader } from 'components/_basic';
import { CardDetails } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(jest.fn()),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

describe('<CardDetails />', (): void => {
  jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ cardId: '234' }),
  }));

  beforeEach(() => (window.scrollTo = jest.fn()));

  afterEach(() => jest.clearAllMocks());

  test('should show Loader if there is no userCardData', async (): Promise<void> => {
    const store = mockStore(mockInitialState);

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails />
        </Provider>
      </BrowserRouter>
    );

    await act(() => wrapper.update());

    expect(wrapper.find(<Loader />)).toBeTruthy();
    wrapper.unmount();
  });

  test('should contain cardContainer if there exists userCardData', (): void => {
    const store = mockStore({
      ...mockInitialState,
      cardsData: {
        ...mockInitialState.cardsData,
        userCard: {
          activationTime: '04.03.2023',
          amount: 3000,
          formattedAmount: '3,000',
          cardHolder: 'Name Surname',
          cardNumber: '4000000000001111',
          cardProductName: 'Debit Smart card',
          transactionLimit: '5,000.00',
          currency: 'GBP',
          cvv: '192',
          expirationDate: '08/24',
          id: 103,
          fullAccountNumber: '',
          isActive: true,
          isBlocked: false,
          shortAccountNumber: '',
          paymentSystem: 'Visa',
        },
      },
    });

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find('.cardContainer')).toBeTruthy();
    wrapper.unmount();
  });

  test('should make request of card data on cardId change', (): void => {
    const store = mockStore(mockInitialState);
    const useEffectMock = jest.spyOn(React, 'useEffect').mockImplementation((func) => func());

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails />
        </Provider>
      </BrowserRouter>
    );

    act(() => wrapper.update());

    expect(useEffectMock).toHaveBeenCalled();
    wrapper.unmount();
  });

  test('should reset card data on component unmount', (): void => {
    const store = mockStore(mockInitialState);
    const useEffectMock = jest.spyOn(React, 'useEffect').mockImplementation((func) => func());

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails />
        </Provider>
      </BrowserRouter>
    );

    act(() => wrapper.update());
    act(() => wrapper.unmount());

    expect(useEffectMock).toHaveBeenCalledTimes(1);
  });

  test('should have BLOCKED status', (): void => {
    const store = mockStore({
      ...mockInitialState,
      cardsData: {
        ...mockInitialState.cardsData,
        userCard: {
          activationTime: '04.03.2023',
          amount: 3000,
          formattedAmount: '3,000',
          cardHolder: 'Name Surname',
          cardNumber: '4000000000001111',
          cardProductName: 'Debit Smart card',
          transactionLimit: '5,000.00',
          currency: 'GBP',
          cvv: '192',
          expirationDate: '08/24',
          id: 103,
          fullAccountNumber: '',
          isActive: true,
          isBlocked: true,
          shortAccountNumber: '',
          paymentSystem: 'Visa',
        },
      },
    });

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find('span.blocked').text()).toEqual(' Blocked ');
    wrapper.unmount();
  });
});
