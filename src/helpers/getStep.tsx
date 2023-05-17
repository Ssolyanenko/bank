import { FirstStepForm, SecondStepForm, ThirdStepForm } from 'components/Forms/PasswordRecoveryForm';

export const getStepContent = (
  stepIndex: number,
  handleNextStep: () => void,
  handleSubmit: () => void
): JSX.Element | null => {
  switch (stepIndex) {
    case 0:
      return <FirstStepForm handleNextStep={handleNextStep} />;
    case 1:
      return <SecondStepForm handleNextStep={handleNextStep} />;
    case 2:
      return <ThirdStepForm handleSubmit={handleSubmit} />;
    default:
      return null;
  }
};
