import { shallow } from 'enzyme';
import { Formik } from 'formik';

import { AddressBlock } from 'components';

describe('<AddressBlock />', (): void => {
  test('should check snapshot with selected region', (): void => {
    const wrapper = shallow(
      <Formik initialValues={{ address: 'something' }} onSubmit={jest.fn()}>
        <AddressBlock setFieldValue={jest.fn()} dropdownError="" />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
