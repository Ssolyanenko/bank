import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Formik } from 'formik';

import { AdditionalPhoneBlock } from 'components';

describe('<AdditionalPhoneBlock />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const wrapper = shallow(
      <Formik
        initialValues={{ additionalPhoneNumber: '', additionalPhoneOwner: '', additionalPhoneOwnerName: '' }}
        onSubmit={jest.fn()}
      >
        <AdditionalPhoneBlock setFieldValue={jest.fn()} additionalPhoneOwnerError="" />
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should display error message', (): void => {
    let isPhoneOwnerClickedMock: boolean = false;
    const setIsPhoneOwnerClickedMock = jest.fn((x) => (isPhoneOwnerClickedMock = x));
    jest.spyOn(React, 'useState').mockImplementation(() => [isPhoneOwnerClickedMock, setIsPhoneOwnerClickedMock]);

    const wrapper = mount(
      <Formik
        initialValues={{ additionalPhoneNumber: '', additionalPhoneOwner: '', additionalPhoneOwnerName: '' }}
        onSubmit={jest.fn()}
      >
        <AdditionalPhoneBlock setFieldValue={jest.fn()} additionalPhoneOwnerError="error message" />
      </Formik>
    );
    wrapper.find('label.elementWrapper').at(0).simulate('click');

    expect(wrapper.find('.error')).toBeInTheDocument;
  });

  test('should have owner name field', (): void => {
    const wrapper = mount(
      <Formik
        initialValues={{
          additionalPhoneNumber: '',
          additionalPhoneOwner: "My relative's phone number",
          additionalPhoneOwnerName: '',
        }}
        onSubmit={jest.fn()}
      >
        <AdditionalPhoneBlock setFieldValue={jest.fn()} additionalPhoneOwnerError="error message" />
      </Formik>
    );

    expect(wrapper.find('label.elementWrapper')).toHaveLength(3);
  });
});
