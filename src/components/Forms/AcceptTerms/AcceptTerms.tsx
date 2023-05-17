import React, { FC, MouseEvent } from 'react';
import { Box } from '@mui/material';
import { Field } from 'formik';

import { OFFER_PATH } from 'constants/requestUrls';
import { Checkbox } from 'components/_basic';
import { AcceptTermsNames } from 'constants/acceptTerms';

import classes from './AcceptTerms.module.scss';

interface Props {
  isTermsAgreedClicked: boolean;
  isAccuracyConfirmedClicked: boolean;
  setIsTermsAgreedClicked(isChecked: boolean): void;
  setIsAccuracyConfirmedClicked(isChecked: boolean): void;
  isSendButtonClicked?: boolean;
}

const { IS_TERMS_AGREED, IS_ACCURACY_CONFIRMED, INPUT } = AcceptTermsNames;

export const AcceptTerms: FC<Props> = ({
  isSendButtonClicked = false,
  setIsTermsAgreedClicked,
  isTermsAgreedClicked,
  setIsAccuracyConfirmedClicked,
  isAccuracyConfirmedClicked,
}) => {
  const handleTermsAgreedClick = ({ target }: MouseEvent<HTMLDivElement>) => {
    if ((target as HTMLInputElement).tagName === INPUT) {
      setIsTermsAgreedClicked(!isTermsAgreedClicked);
    }
  };

  const handleAccuracyConfirmedClick = ({ target }: MouseEvent<HTMLDivElement>) => {
    if ((target as HTMLInputElement).tagName === INPUT) {
      setIsAccuracyConfirmedClicked(!isAccuracyConfirmedClicked);
    }
  };

  return (
    <>
      <Box
        component="label"
        className={`${classes.checkboxLabel} ${
          isSendButtonClicked && !isAccuracyConfirmedClicked && classes.checkboxLabelError
        }`}
        onClick={handleTermsAgreedClick}
      >
        <Field as={Checkbox} name={IS_TERMS_AGREED} checked={isAccuracyConfirmedClicked}>
          <Box component="span">
            I agree to the terms and conditions of the
            <a className={classes.termsLink} href={OFFER_PATH} target="_blank" rel="noreferrer" download>
              offer
            </a>
          </Box>
        </Field>
      </Box>
      <Box
        component="label"
        className={`${classes.checkboxLabel} ${
          isSendButtonClicked && !isTermsAgreedClicked && classes.checkboxLabelError
        }`}
        onClick={handleAccuracyConfirmedClick}
      >
        <Field as={Checkbox} name={IS_ACCURACY_CONFIRMED} checked={isTermsAgreedClicked}>
          <Box component="span">I confirm the accuracy of the information provided</Box>
        </Field>
      </Box>
    </>
  );
};
