import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { CreditCardPremiumPage } from 'pages';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<CreditCardPremiumPage />', () => {
  test('should check a snapshot', () => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <CreditCardPremiumPage />
        </MemoryRouter>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
