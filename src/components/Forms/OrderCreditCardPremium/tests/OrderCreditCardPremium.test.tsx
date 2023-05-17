import 'jsdom-global/register';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { OrderCreditCardPremium } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

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
            id: 4,
            cardProductName: 'Credit Card Billable Premium',
            cardType: 'CREDIT',
            productInfo:
              '3% of Cashback for all the categories for the first 5 000 GBP in online purchases in the first 90 days of the opening account|After 90 days the cashback is 2% for all the categories|Free card service',
            vipOnly: true,
            paymentSystem: 'VISA',
          },
        ],
      },
    },
  },
});

describe('<OrderCreditCardPremium />', (): void => {
  test('should render without error', async (): Promise<void> => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <OrderCreditCardPremium />
        </Provider>
      </Router>
    );

    expect(wrapper.find('form').length).toBe(1);
    await wrapper.unmount();
  });
});
