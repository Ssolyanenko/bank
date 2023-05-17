import 'jsdom-global/register';
import React, { ReactElement } from 'react';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';
import { act } from 'react-dom/test-utils';

import { DebitAddressBlock } from 'components';
import { ERROR_MESSAGE } from 'constants/errors';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(jest.fn()),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

describe('<DebitAddressBlock />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const wrapper = shallow(
      <Formik
        initialValues={{ city: '', house: '', street: '', unit: '', apartment: '', postCode: '' }}
        onSubmit={jest.fn()}
      >
        {({ errors, touched }): ReactElement => (
          <DebitAddressBlock
            setFieldValue={jest.fn()}
            setFieldTouched={jest.fn()}
            isSendButtonClicked={false}
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should call Delivery Address useEffect change', (): void => {
    const useEffectMock = jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    const setFieldValue = jest.fn();
    const setFieldTouched = jest.fn();

    const wrapper = mount(
      <Formik
        initialValues={{ city: '', house: '', street: '', unit: '', apartment: '', postCode: '' }}
        onSubmit={jest.fn()}
      >
        {({ errors, touched }): ReactElement => (
          <DebitAddressBlock
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            isSendButtonClicked={false}
            errors={errors}
            touched={touched}
          />
        )}
      </Formik>
    );

    wrapper.find('input[name="street"]').simulate('change', { target: { name: 'street', value: 'London' } });
    wrapper.update();
    expect(useEffectMock).toHaveBeenCalled();
  });

  test('should show errors', (): void => {
    const wrapper = mount(
      <Formik
        initialValues={{ city: '', house: '', street: '', unit: '', apartment: '', postCode: '' }}
        onSubmit={jest.fn()}
      >
        {({ errors, touched }): ReactElement => (
          <DebitAddressBlock
            setFieldValue={jest.fn()}
            setFieldTouched={jest.fn()}
            isSendButtonClicked={true}
            errors={{
              ...errors,
              street: ERROR_MESSAGE.required,
              city: ERROR_MESSAGE.required,
              postCode: ERROR_MESSAGE.required,
              house: ERROR_MESSAGE.required,
            }}
            touched={touched}
          />
        )}
      </Formik>
    );

    expect(wrapper.find('.error').length).toBe(4);
  });
});
