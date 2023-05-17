import i18next from 'i18n';
import { StepItem } from 'interfaces/common/stepForm';

export const STEPS: StepItem[] = [
  {
    stepTitle: i18next.t('stepForm.stepTitles.enterID'),
    isCompleted: true,
    stepId: 0,
  },
  {
    stepTitle: i18next.t('stepForm.stepTitles.enterSMSCode'),
    isCompleted: false,
    stepId: 1,
  },
  {
    stepTitle: i18next.t('stepForm.stepTitles.createPassword'),
    isCompleted: false,
    stepId: 2,
  },
];

export const BASE_TIMER = 30;
