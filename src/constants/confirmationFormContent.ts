export enum ConfirmationFormNames {
  SMS_CODE = 'smsCode',
}

export const confirmationFormLabel = (isFieldClicked: boolean): string =>
  isFieldClicked ? 'Enter the code' : '4-digit session key';
