import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';

import { ChangePINCodeIcon } from 'assets';
import { ResetFormsConfirmModal, SetPinCodeFormModal, SetPinSuccessModal } from 'components';
import { CardManageNames } from 'constants/cardManageText';
import { CHANGE_PIN_CODE_FORM_CONTENT } from 'constants/pinCodeFormContent';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getChangeCardPinCode, requestPinCodeChange } from 'store';
import { PIN_CODE_FORM_INITIAL_VALUES } from 'constants/setPinCodeForm';
import { pinCodeMask } from 'helpers';
import { PinCodeFormInitialValues } from 'interfaces/setPinCodeForm';
import classes from './ChangePINCode.module.scss';

interface Props {
  cardId: number;
}

const { title, buttonName } = CHANGE_PIN_CODE_FORM_CONTENT;

export const ChangePINCode: FC<Props> = ({ cardId }): ReactElement => {
  const dispatch = useTypedDispatch();

  const [isPinChangeModalOpen, setIsPinChangeModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [{ newPin, newPinConfirm }, setPinValues] = useState(PIN_CODE_FORM_INITIAL_VALUES);
  const { status } = useTypedSelector(getChangeCardPinCode);

  const handlePinChangeModal = (newPinCode: string): void => {
    dispatch(requestPinCodeChange({ cardId, newPinCode }));
    setIsPinChangeModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleChangePinModalClose = (): void => {
    if (newPin || newPinConfirm) {
      setIsResetModalOpen(true);
    }

    setIsPinChangeModalOpen(false);
  };

  const handleResetModalClose = (): void => {
    setIsResetModalOpen(false);
    setIsPinChangeModalOpen(true);
  };

  const handleFormReset = (): void => {
    setIsPinChangeModalOpen(false);
    setIsResetModalOpen(false);
    setPinValues(PIN_CODE_FORM_INITIAL_VALUES);
  };

  const handleValueChange = (name: string, value: string): void => {
    setPinValues(
      (prevValues: PinCodeFormInitialValues): PinCodeFormInitialValues => ({
        ...prevValues,
        [name]: pinCodeMask(value),
      })
    );
  };

  return (
    <>
      <Box className={classes.changePinWrapper} onClick={(): void => setIsPinChangeModalOpen(true)}>
        <Box className={classes.iconContainer}>
          <ChangePINCodeIcon />
        </Box>
        <Box className={classes.text}>{CardManageNames.CHANGE_PIN_CODE}</Box>
      </Box>
      <SetPinCodeFormModal
        isOpen={isPinChangeModalOpen}
        handleClose={handleChangePinModalClose}
        handlePinChangeModal={handlePinChangeModal}
        title={title}
        buttonName={buttonName}
        values={{ newPin, newPinConfirm }}
        handleValueChange={handleValueChange}
      />
      {isResetModalOpen && (
        <ResetFormsConfirmModal
          isOpen={isResetModalOpen}
          handleClose={handleResetModalClose}
          handleFormReset={handleFormReset}
        />
      )}
      <SetPinSuccessModal
        isOpen={isSuccessModalOpen}
        handleClose={(): void => setIsSuccessModalOpen(false)}
        status={status}
      />
    </>
  );
};
