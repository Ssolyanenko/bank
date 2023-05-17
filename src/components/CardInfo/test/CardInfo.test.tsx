import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { CardInfo } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<CardInfo />', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CardInfo />
        </Router>
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
