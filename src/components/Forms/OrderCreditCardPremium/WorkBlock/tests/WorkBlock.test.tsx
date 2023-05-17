import { shallow } from 'enzyme';
import { Formik } from 'formik';

import { WorkBlock } from 'components';

describe('<WorkBlock />', (): void => {
  test('should check a snapshot', (): void => {
    const wrapper = shallow(
      <Formik initialValues={{ work: '' }} onSubmit={jest.fn()}>
        <WorkBlock setFieldValue={jest.fn()} dropdownError="" />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
