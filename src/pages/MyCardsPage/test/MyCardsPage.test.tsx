import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import { MyCardsPage } from 'pages/MyCardsPage';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { BrowserRouter } from 'react-router-dom';

describe('<MyCardsPage />', (): void => {
  const store = mockStore(mockInitialState);

  test('should contain text block if there is no cards', (): void => {
    const wrapper = shallow(
      <Provider store={store}>
        <MyCardsPage />
      </Provider>
    );

    expect(wrapper.render().find('.blockText').text()).toEqual(
      "You don't have any cards to display for now. You may check our Card products and Order a card online"
    );
  });

  test('should contain Card List of the cards', (): void => {
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
      <BrowserRouter>
        <Provider store={store}>
          <MyCardsPage />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find('ul.myCardsBlock').length).toEqual(1);
    wrapper.unmount();
  });

  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <Provider store={store}>
        <MyCardsPage />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
