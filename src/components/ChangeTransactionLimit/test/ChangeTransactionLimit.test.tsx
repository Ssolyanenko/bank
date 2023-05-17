import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { ChangeTransactionLimit } from 'components';

describe('<ChangeTransactionLimit />', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ChangeTransactionLimit />
        </Router>
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
