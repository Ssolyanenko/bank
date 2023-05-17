import { cardApplicationStatusClasses } from 'helpers';
import { CardApplicationClasses, CardApplicationStatusText } from 'interfaces/cardApplications';

const {
  UNDER_CONSIDERATION,
  APPROVED,
  IN_PROGRESS,
  ON_THE_WAY,
  READY_FOR_PICK_UP,
  REJECTED,
  CANCELLED_AUTOMATICALLY,
  COLLECTED,
  FINALIZED,
} = CardApplicationStatusText;
const { PURPLE_STATUS, YELLOW_STATUS, BLUE_STATUS, RED_STATUS, GREEN_STATUS } = CardApplicationClasses;

describe('cardApplicationStatusClasses', (): void => {
  test('should return purpleStatus class in case of "Under consideration" status', (): void => {
    expect(cardApplicationStatusClasses(UNDER_CONSIDERATION)).toEqual(PURPLE_STATUS);
  });

  test('should return yellowStatus class in case of "Approved" status', (): void => {
    expect(cardApplicationStatusClasses(APPROVED)).toEqual(YELLOW_STATUS);
  });

  test('should return yellowStatus class in case of "In progress" status', (): void => {
    expect(cardApplicationStatusClasses(IN_PROGRESS)).toEqual(YELLOW_STATUS);
  });

  test('should return blueStatus class in case of "On the way" status', (): void => {
    expect(cardApplicationStatusClasses(ON_THE_WAY)).toEqual(BLUE_STATUS);
  });

  test('should return blueStatus class in case of "Ready for pick up" status', (): void => {
    expect(cardApplicationStatusClasses(READY_FOR_PICK_UP)).toEqual(BLUE_STATUS);
  });

  test('should return redStatus class in case of "Rejected" status', (): void => {
    expect(cardApplicationStatusClasses(REJECTED)).toEqual(RED_STATUS);
  });

  test('should return redStatus class in case of "Cancelled automatically" status', (): void => {
    expect(cardApplicationStatusClasses(CANCELLED_AUTOMATICALLY)).toEqual(RED_STATUS);
  });

  test('should return greenStatus class in case of "Collected" status', (): void => {
    expect(cardApplicationStatusClasses(COLLECTED)).toEqual(GREEN_STATUS);
  });

  test('should return greenStatus class in case of "Finalized" status', (): void => {
    expect(cardApplicationStatusClasses(FINALIZED)).toEqual(GREEN_STATUS);
  });
});
