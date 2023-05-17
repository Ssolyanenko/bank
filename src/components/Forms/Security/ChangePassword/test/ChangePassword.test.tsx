import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { ChangePassword } from 'components';

describe('<ChangePassword/>', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <Formik
        initialValues={{
          currentPassword: '',
          createNewPassword: '',
          confirmNewPassword: '',
        }}
        onSubmit={jest.fn()}
      >
        <ChangePassword />
      </Formik>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render ChangePassword', async (): Promise<void> => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <ChangePassword />
        </Provider>
      </Router>
    );

    expect(wrapper.find('form').length).toBe(1);
    await wrapper.unmount();
  });
});
