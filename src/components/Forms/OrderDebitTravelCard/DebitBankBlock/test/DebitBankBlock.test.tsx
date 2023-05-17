import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { Provider } from 'react-redux';

import { DebitBankBlock } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<DebitBankBlock />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <Formik initialValues={{ city: 'something' }} onSubmit={jest.fn()}>
          <DebitBankBlock setFieldValue={jest.fn()} setFieldTouched={jest.fn()} branchError="" cityError="" />
        </Formik>
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
