import 'jsdom-global/register';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { OrderDebitTravelCard } from 'components';

const store = mockStore({
  ...mockInitialState,
  cardsData: {
    ...mockInitialState.cardsData,
    cards: {
      ...mockInitialState.cardsData.cards,
      debit: {
        ...mockInitialState.cardsData.cards.debit,
        cardsInfo: [
          {
            id: 2,
            cardProductName: 'Debit Travel card',
            cardType: 'DEBIT',
            productInfo: 'Free air transportation|5 years miles retention period|Free card service',
            vipOnly: false,
            paymentSystem: 'VISA',
          },
        ],
      },
    },
  },
});

describe('<OrderDebitTravelCard />', (): void => {
  test('should render without fallout', (): void => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <OrderDebitTravelCard />
        </Provider>
      </Router>
    );

    expect(wrapper.find('form').length).toBe(1);
    wrapper.unmount();
  });
});
