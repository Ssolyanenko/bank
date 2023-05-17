import React from 'react';
import * as Formik from 'formik';
import { shallow } from 'enzyme';
import { PhoneFieldValidation } from 'components';
import { useTypedDispatch } from 'hooks';

jest.mock('formik', () => ({
  useFormikContext: jest.fn(),
}));

jest.mock('hooks', () => ({ useTypedDispatch: jest.fn() }));

jest.mock('react-redux');

jest.mock('store', () => ({ requestPhoneFieldValidation: jest.fn() }));

const mockSetFieldError = jest.fn();

describe('PhoneFieldValidation Component', (): void => {
  const useFormikContextSpy = jest.spyOn(Formik, 'useFormikContext');
  const dispatchMock = jest.fn();

  beforeEach((): void => {
    (useTypedDispatch as jest.Mock).mockReturnValue(dispatchMock);
    useFormikContextSpy.mockReturnValue({
      values: { phoneNumber: '+45999929299' },
      errors: { phoneNumber: null },
      setFieldError: mockSetFieldError,
    } as unknown as never);

    (useTypedDispatch as jest.Mock).mockReturnValue(dispatchMock);
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });

  test('should call useEffect', (): void => {
    (useTypedDispatch as jest.Mock).mockReturnValue(dispatchMock);
    const useEffectMock = jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    shallow(<PhoneFieldValidation />);
    expect(useEffectMock).toBeCalled();
  });
});
