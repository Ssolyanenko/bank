import React from 'react';
import { Formik } from 'formik';
import { shallow } from 'enzyme';

import { Input } from 'components/_basic';
import { Default } from 'components/_basic/Input/Input.stories';

const props = {
  labelText: 'Login',
  name: 'login',
  value: 'login',
  type: 'text',
  isError: false,
  onBlur: jest.fn(),
  onChange: jest.fn(),
  children: 'login',
  disabled: false,
};

describe('<Input />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      name: 'login',
    };
    const wrapper = shallow(
      <Formik initialValues={{ login: '' }} onSubmit={jest.fn()}>
        <Input {...props} />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Input from storybook', (): void => {
    const wrapper = shallow(
      <Formik initialValues={{ login: '' }} onSubmit={jest.fn()}>
        <Input {...props} />
      </Formik>
    );

    expect(wrapper.find(Input).length).toBe(1);
  });
});
