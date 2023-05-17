export type СardApplicationStatusses =
  | 'Under consideration'
  | 'Approved'
  | 'Rejected'
  | 'In progress'
  | 'On the way'
  | 'Ready for pick up'
  | 'Cancelled automatically'
  | 'Collected'
  | 'Finalized';

export enum CardApplicationStatusText {
  UNDER_CONSIDERATION = 'Under consideration',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  IN_PROGRESS = 'In progress',
  ON_THE_WAY = 'On the way',
  READY_FOR_PICK_UP = 'Ready for pick up',
  CANCELLED_AUTOMATICALLY = 'Cancelled automatically',
  COLLECTED = 'Collected',
  FINALIZED = 'Finalized',
}

export enum CardApplicationClasses {
  BLUE_STATUS = 'blueStatus',
  PURPLE_STATUS = 'purpleStatus',
  RED_STATUS = 'redStatus',
  GREEN_STATUS = 'greenStatus',
  YELLOW_STATUS = 'yellowStatus',
}
