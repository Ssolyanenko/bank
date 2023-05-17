import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { CardManage } from 'components';

describe('<CardManage />', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CardManage hasCardStatus cardId={1} />
        </Router>
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
