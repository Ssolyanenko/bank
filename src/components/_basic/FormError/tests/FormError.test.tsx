import { render, shallow } from 'enzyme';

import { FormError } from 'components/_basic';
import { WithFormInputBox } from 'components/_basic/FormError/FormError.stories';
import { Formik } from 'formik';

describe('<FormError />', (): void => {
  test('should make a snapshot of component', (): void => {
    const wrapper = render(
      <Formik
        initialValues={{ amount: '' }}
        onSubmit={jest.fn()}
        initialErrors={{ amount: 'error' }}
        initialTouched={{ amount: true }}
      >
        <FormError name="amount" />
      </Formik>
    );
    const component = wrapper.get();

    expect(component).toMatchSnapshot();
  });

  test('should render FormError from storybook', (): void => {
    const props = {
      name: 'input',
    };

    const wrapper = shallow(<WithFormInputBox {...props} />);

    expect(wrapper.find(FormError).length).toBe(1);
  });
});
