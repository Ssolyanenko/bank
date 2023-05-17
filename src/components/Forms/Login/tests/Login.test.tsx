// import 'jsdom-global/register';
import React from 'react';
import {
  fireEvent,
  getByLabelText,
  getByPlaceholderText,
  getByText,
  render,
  screen,
  waitFor
} from "@testing-library/react";

import { Form, Formik } from "formik";

import { login, mockStore, SMSValidation } from "helpers";
import { mockInitialState } from 'constants/mockInitialState';
import { Provider } from 'react-redux';
import { ModalForm } from "../ModalForm";
import {
  loginError,
  loginSuccess,
  requestSmsDataLogin,
  requestUserLogin,
  setSMSErrorMessage,
  setSMSSuccess
} from "../../../../store";
import { LOGIN_URL, SMS_URL } from "../../../../constants/requestUrls";


const store = mockStore(mockInitialState);

// describe('<Login />', (): void => {
//   const props = {
//     openModal: jest.fn(),
//     onOpenFinallyPopup: jest.fn(),
//   };
//
//   test('should render component without error', (): void => {
//     const wrapper = mount(
//       <Router>
//         <Provider store={store}>
//           <Login {...props} />
//         </Provider>
//       </Router>
//     );
//
//     expect(wrapper.find('form').length).toBe(1);
//   });
// });

describe('Formik onSubmit', () => {
  test('should dispatch requestUserLogin with correct parameters on form submission', async () => {
    const initialValues = { login: '', password: '' };
    const validationSchema = { login };
    const onSubmitMock = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitMock}>
          {({ isSubmitting, isValid }) => (
            <form>
              <input type="text" name="login" placeholder="Login" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Provider>
    );
    const loginInput = getByPlaceholderText('Enter your login');
    const passwordInput = getByPlaceholderText('Enter your password');
    const submitButton = getByText('Submit');

    fireEvent.change(loginInput, { target: { value: 'user123' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
      expect(onSubmitMock).toHaveBeenCalledWith(
        { login: 'testUser', password: 'testPassword' },
        expect.objectContaining({ setSubmitting: expect.any(Function) })
      );
      expect(store.getActions()).toEqual([
        requestUserLogin({
          body: { login: 'testUser1', password: 'testPassword1' },
          url: LOGIN_URL,
          actionSuccess: loginSuccess,
          actionError: loginError,
        }),
      ]);
    });
  });
})
