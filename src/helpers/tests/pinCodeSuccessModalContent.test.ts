import {
  PIN_CODE_MODAL_ERROR,
  SET_PIN_CODE_MODAL_CONTENT,
  CHANGE_PIN_CODE_MODAL_CONTENT,
  PENDING_MODAL_CONTENT,
} from 'constants/modalWindow';
import { ERROR, PENDING, SUCCESS } from 'constants/text';
import { pinCodeSuccessModalContent } from 'helpers';

describe('pinCodeSuccessModalContent', (): void => {
  test('should return PIN_CODE_MODAL_ERROR array in case of ERROR status and redirect button', (): void => {
    expect(pinCodeSuccessModalContent(true, ERROR)).toEqual(PIN_CODE_MODAL_ERROR);
  });

  test('should return PIN_CODE_MODAL_ERROR array in case of ERROR status', (): void => {
    expect(pinCodeSuccessModalContent(false, ERROR)).toEqual(PIN_CODE_MODAL_ERROR);
  });

  test('should return SET_PIN_CODE_MODAL_CONTENT array in case of SUCCESS status and redirect button', (): void => {
    expect(pinCodeSuccessModalContent(true, SUCCESS)).toEqual(SET_PIN_CODE_MODAL_CONTENT);
  });

  test('should return CHANGE_PIN_CODE_MODAL_CONTENT array in case of SUCCESS status', (): void => {
    expect(pinCodeSuccessModalContent(false, SUCCESS)).toEqual(CHANGE_PIN_CODE_MODAL_CONTENT);
  });
});
