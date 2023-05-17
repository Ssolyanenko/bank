import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { Provider } from 'react-redux';

import { DeliveryBankBlock } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<DeliveryBankBlock />', (): void => {
  test('should check a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <Formik initialValues={{ bankCity: 'something' }} onSubmit={jest.fn()}>
          <DeliveryBankBlock setFieldValue={jest.fn()} bankBranchIdError="" bankCityError="" />
        </Formik>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
