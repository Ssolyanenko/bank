import { shallow } from 'enzyme';
import { Formik } from 'formik';

import { TransferByPhoneNumberForm } from 'components';

describe('<TransferByPhoneNumberForm />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const wrapper = shallow(
      <Formik initialValues={{ myCard: '', amount: '', recipientPhone: '' }} onSubmit={jest.fn()}>
        <TransferByPhoneNumberForm />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
