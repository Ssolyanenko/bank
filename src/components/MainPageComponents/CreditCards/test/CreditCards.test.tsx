import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import { CreditCards } from 'components/MainPageComponents/CreditCards';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers/mockStore';

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

describe('<CreditCards />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CreditCards />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render credit cards', (): void => {
    const store = mockStore({
      ...mockInitialState,
      cardsData: {
        ...mockInitialState.cardsData,
        userCards: [
          {
            id: 1,
            cardProductName: 'Credit card',
            formattedAmount: '2,000',
            cardExpirationDate: '05/24',
            cardNumber: '4000000000001111',
            paymentSystem: 'VISA',
            transactionLimit: 5000,
            cvv: '192',
            currency: 'GBP',
            isActive: true,
            cardType: '',
          },
        ],
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <CreditCards />
      </Provider>
    );

    expect(wrapper.find('ul.cardsWrapper').length).toEqual(1);
  });

  test('should render Information Block if there are no cards', (): void => {
    const store = mockStore(mockInitialState);

    const wrapper = mount(
      <Provider store={store}>
        <CreditCards />
      </Provider>
    );

    expect(wrapper.find('div.infoBlockWrapper').length).toEqual(1);
  });
});
