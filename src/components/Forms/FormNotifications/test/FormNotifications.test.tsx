import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { FormNotifications } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

const store = mockStore(mockInitialState);

describe('<FormNotifications />', (): void => {
  it('should contain Formik in the component', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <FormNotifications />
        </Router>
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
