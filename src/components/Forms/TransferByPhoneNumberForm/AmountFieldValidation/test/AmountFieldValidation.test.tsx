import React from 'react';
import { shallow } from 'enzyme';
import * as Formik from 'formik';

import { useTypedDispatch } from 'hooks';
import { AmountFieldValidation } from 'components';

jest.mock('formik', () => ({
  useFormikContext: jest.fn(),
}));

jest.mock('hooks', () => ({ useTypedDispatch: jest.fn() }));

jest.mock('react-redux');

jest.mock('store', () => ({ requestCardAmountFieldValidation: jest.fn() }));

const mockSetFieldError = jest.fn();

describe('AmountFieldValidation Component', (): void => {
  const useFormikContextSpy = jest.spyOn(Formik, 'useFormikContext');
  const dispatchMock = jest.fn();

  beforeEach(() => {
    (useTypedDispatch as jest.Mock).mockReturnValue(dispatchMock);

    useFormikContextSpy.mockReturnValue({
      values: { paymentAmount: '', cardInformation: { id: 0 } },
      errors: { paymentAmount: null },
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

    shallow(<AmountFieldValidation />);
    expect(useEffectMock).toBeCalled();
  });
});
