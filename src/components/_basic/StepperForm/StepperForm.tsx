import React, { FC, useState, useCallback, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { Step, StepLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { Size } from 'interfaces/common/componentsSettings';
import { START_STEP_VALUE, FINAL_STEP_VALUE } from 'constants/numbers';
import { StepperLabel, BackButton, CloseButton } from 'components/_basic';
import { getStepContent } from 'helpers/getStep';
import { STEPS } from 'constants/stepForm';
import { postSaveMessageError } from 'store/user';
import { StepItem } from 'interfaces/common/stepForm';

import classes from './StepperForm.module.scss';

interface Props {
  onCloseModal(): void;
  onOpenFinallyPopup(): void;
}

export const StepperForm: FC<Props> = ({ onCloseModal, onOpenFinallyPopup }): ReactElement => {
  const [activeStep, setActiveStep] = useState(START_STEP_VALUE);

  const [firstStep, secondStep, thirdStep] = STEPS;

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleNextStep = (): void => {
    setActiveStep((prevActiveStep: number): number => prevActiveStep + 1);
    STEPS[activeStep + 1].isCompleted = true;
  };

  const handleBackStep = (): void => {
    if (activeStep === START_STEP_VALUE) {
      onCloseModal();

      return;
    }

    dispatch(postSaveMessageError(''));
    STEPS[activeStep].isCompleted = false;
    setActiveStep((prevActiveStep: number): number => prevActiveStep - 1);
  };

  const handleSubmit = useCallback((): void => {
    firstStep.isCompleted = true;
    secondStep.isCompleted = false;

    if (thirdStep.isCompleted) {
      thirdStep.isCompleted = false;
      setActiveStep(FINAL_STEP_VALUE);
      onCloseModal();
      onOpenFinallyPopup();
    }
  }, [firstStep, onCloseModal, onOpenFinallyPopup, secondStep, thirdStep]);

  return (
    <>
      <Box className={classes.header}>
        <BackButton handleBack={handleBackStep}>{t('buttonNames.back')}</BackButton>
        <CloseButton onClick={onCloseModal} size={Size.MEDIUM} />
      </Box>
      <Box className={classes.root}>
        <Typography component="h3" className={classes.title}>
          {t('stepperForm.title')}
        </Typography>
        <Box className={classes.boxLabel}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<span />} className={classes.stepper}>
            {STEPS.map(
              ({ stepTitle, stepId, isCompleted }: StepItem): ReactElement => (
                <Step className={classes.stepItem} key={stepId}>
                  <Box component="p" className={`${classes.stepLabelText} ${isCompleted ? classes.active : ''}`}>
                    {stepTitle}
                  </Box>
                  <StepLabel className={classes.stepLabel} icon={<StepperLabel isCompleted={isCompleted} />} />
                </Step>
              )
            )}
          </Stepper>
        </Box>
      </Box>
      <Box className={classes.forwWrapper}>{getStepContent(activeStep, handleNextStep, handleSubmit)}</Box>
    </>
  );
};
