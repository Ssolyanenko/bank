import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { OrderCreditCardBillable } from 'components';

const store = mockStore({
  ...mockInitialState,
  cardsData: {
    ...mockInitialState.cardsData,
    cards: {
      ...mockInitialState.cardsData.cards,
      credit: {
        ...mockInitialState.cardsData.cards.credit,
        cardsInfo: [
          {
            id: 3,
            cardProductName: 'Credit Card Billable',
            cardType: 'CREDIT',
            productInfo:
              '2% of Cashback for the 3 categories that You select|1% of Cashback for all remaining categories|Free card service',
            vipOnly: false,
            paymentSystem: 'VISA',
          },
        ],
      },
    },
  },
});

describe('<OrderCreditCardBillable />', (): void => {
  test('should render without fallout', async (): Promise<void> => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <OrderCreditCardBillable />
        </Provider>
      </Router>
    );

    expect(wrapper.find('form').length).toBe(1);
    await wrapper.unmount();
  });
});
