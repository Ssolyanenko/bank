import { activateButton } from 'helpers/activateButton';
import { CardApplicationStatus } from 'constants/cardApplicationStatus';

describe('shouldApplicationBtnAppear', () => {
  test('shouldActivateBtnAppear returns true', () => {
    expect(activateButton(CardApplicationStatus.COLLECTED)).toBeTruthy();
  });

  test('activateButton returns false', () => {
    expect(activateButton(CardApplicationStatus.APPLICATION_RECEIVED)).toBeFalsy();
  });
});
