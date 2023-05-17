export type AvailableTabs = 0 | 1;

export interface Categories {
  id: AvailableTabs;
  tabTitle: string;
}

export interface SecurityQuestionValues {
  securityQuestion: string;
  yourSecurityQuestion: string;
  answer: string;
}
