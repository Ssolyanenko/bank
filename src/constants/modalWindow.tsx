import { CheckmarkIcon, ExclamationMarkIcon, BulbIcon } from 'assets';
import { SUCCESS, ERROR, PENDING } from 'constants/text';

export const ICON_VALUES: { [field: string]: JSX.Element } = {
  [ERROR]: <ExclamationMarkIcon />,
  [SUCCESS]: <CheckmarkIcon />,
  [PENDING]: <BulbIcon />,
};

export const PIN_CODE_MODAL_ERROR: string[] = [
  'Something went wrong.',
  'Please, try again or contact the support service.',
];

export const SET_PIN_CODE_MODAL_CONTENT: string[] = [
  'Success! Your card is active now.',
  'Card details can be found in the My Cards section.',
];

export const PENDING_MODAL_CONTENT: string[] = [
  'Something exciting is coming soon!',
  'Stay tuned to learn about the new goodies first.',
];

export const CHANGE_PIN_CODE_MODAL_CONTENT: string[] = ['Your pin code has been changed successfully'];
