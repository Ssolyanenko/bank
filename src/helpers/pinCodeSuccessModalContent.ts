import { CHANGE_PIN_CODE_MODAL_CONTENT, PIN_CODE_MODAL_ERROR, SET_PIN_CODE_MODAL_CONTENT } from 'constants/modalWindow';
import { ERROR, SUCCESS } from 'constants/text';
import { PostRequestStatus } from 'interfaces/myCard';

export const pinCodeSuccessModalContent = (hasRedirectButton: boolean, status: PostRequestStatus): string[] => {
  if (status === ERROR) return PIN_CODE_MODAL_ERROR;

  if (hasRedirectButton && status === SUCCESS) return SET_PIN_CODE_MODAL_CONTENT;

  if (!hasRedirectButton && status === SUCCESS) return CHANGE_PIN_CODE_MODAL_CONTENT;

  return PIN_CODE_MODAL_ERROR;
};
