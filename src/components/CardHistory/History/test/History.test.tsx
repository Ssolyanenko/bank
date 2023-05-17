import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { History } from 'components';
import { HISTORY_DATA } from 'constants/historyData';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

const store = mockStore(mockInitialState);

describe('<History />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      transactions: HISTORY_DATA,
      isLoading: false,
    };

    const wrapper = shallow(
      <Provider store={store}>
        <History {...props} />
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
