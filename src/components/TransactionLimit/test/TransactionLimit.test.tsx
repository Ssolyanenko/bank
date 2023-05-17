import 'jsdom-global/register';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { TransactionLimit } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<TransactionLimit />', (): void => {
  const store = mockStore(mockInitialState);

  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <Provider store={store}>
        <TransactionLimit defaultLimit="5,000.00" setDefaultLimit={jest.fn()} handleOpenModalSuccess={jest.fn()} />
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
