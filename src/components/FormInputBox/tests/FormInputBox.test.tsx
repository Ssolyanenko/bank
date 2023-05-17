import { shallow } from 'enzyme';
import { Formik } from 'formik';

import { FormInputBox } from 'components';

describe('<FormInputBox />', (): void => {
  test('should check default props', (): void => {
    const props = {
      name: 'amount',
    };
    const wrapper = shallow(
      <Formik initialValues={{ amount: '' }} onSubmit={jest.fn()}>
        <FormInputBox {...props} />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
