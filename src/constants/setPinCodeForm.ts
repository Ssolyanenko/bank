import { PinCodeFormInitialValues, PinCodeFormLabels } from 'interfaces/setPinCodeForm';

export const PIN_CODE_FORM_INITIAL_VALUES: PinCodeFormInitialValues = {
  newPin: '',
  newPinConfirm: '',
};

export enum PinCodeFormFieldNames {
  newPin = 'newPin',
  newPinConfirm = 'newPinConfirm',
}

export const PIN_CODE_FORM_LABELS: PinCodeFormLabels = {
  newPinLabel: (isFieldClicked: boolean): string => `Set ${isFieldClicked ? '' : '4 digits'} pin code`,
  newPinConfirmLabel: 'Confirm pin code',
};
