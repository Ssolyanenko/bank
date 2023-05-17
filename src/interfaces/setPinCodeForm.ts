export interface PinCodeFormInitialValues {
  newPin: string;
  newPinConfirm: string;
}

export interface PinCodeFormLabels {
  newPinLabel(isFieldClicked: boolean): string;
  newPinConfirmLabel: string;
}
