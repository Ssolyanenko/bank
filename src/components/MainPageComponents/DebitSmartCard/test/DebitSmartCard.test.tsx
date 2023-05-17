import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import { DebitSmartCard } from 'components/MainPageComponents/DebitSmartCard';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<DebitSmartCard />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <DebitSmartCard />
        </MemoryRouter>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
