import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { ChangeSecurityQuestion } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<ChangeSecurityQuestion />', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <Formik initialValues={{ securityQuestion: '', yourSecurityQuestion: '', answer: '' }} onSubmit={jest.fn()}>
        <ChangeSecurityQuestion />
      </Formik>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render ChangeSecurityQuestion', async (): Promise<void> => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <ChangeSecurityQuestion />
        </Provider>
      </Router>
    );

    expect(wrapper.find('form').length).toBe(1);
    await wrapper.unmount();
  });
});
