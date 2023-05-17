import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';

import { ChangeTransactionLimitIcon } from 'assets';
import { useTypedSelector } from 'hooks';
import { CardManageNames } from 'constants/cardManageText';
import { CloseButton, ModalConfirmation, ModalSuccess } from 'components/_basic';
import { ResetFormsConfirmModal } from 'components';
import { getCurrentTransactionLimit } from 'store';
import { formatNumberToStringLimit } from 'helpers';
import { CARD_DEFAULT_LIMIT } from 'constants/formInputs';
import { TransactionLimit } from 'components/TransactionLimit';
import { MAX_WIDTH } from 'constants/numbers';
import { Size } from 'interfaces/common/componentsSettings';
import classes from './ChangeTransactionLimit.module.scss';

export const ChangeTransactionLimit: FC = (): ReactElement => {
  const { message, transactionLimit: storeCardLimit } = useTypedSelector(getCurrentTransactionLimit);

  const cardDefaultLimitString = formatNumberToStringLimit(storeCardLimit || CARD_DEFAULT_LIMIT);

  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenResetModal, setOpenResetModal] = useState(false);
  const [isOpenModalSuccess, setOpenModalSuccess] = useState(false);
  const [defaultLimit, setDefaultLimit] = useState(cardDefaultLimitString);

  const handleIsOpenModal = (): void => {
    if (defaultLimit !== cardDefaultLimitString) {
      setOpenResetModal(true);
    }

    setOpenModal((prevIsOpenModal): boolean => !prevIsOpenModal);
  };

  const handleLeaveModal = (): void => {
    setDefaultLimit(cardDefaultLimitString);
    setOpenModal(false);
    setOpenResetModal(false);
  };

  const handleCloseResetModal = (isCloseModal?: boolean): void => {
    setOpenResetModal(false);
    isCloseModal && setOpenModal(true);
  };

  const handleOpenModalSuccess = (newLimit: string): void => {
    setDefaultLimit(newLimit);
    setOpenModal(false);
    setOpenModalSuccess(true);
  };

  return (
    <>
      <Box onClick={handleIsOpenModal}>
        <Box className={classes.iconContainer}>
          <ChangeTransactionLimitIcon />
        </Box>
        <Box className={classes.text}>{CardManageNames.CHANGE_TRANSACTION_LIMIT}</Box>
      </Box>

      <ModalConfirmation isOpened={isOpenModal} maxWidth={MAX_WIDTH} onClose={handleIsOpenModal}>
        <Box className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={handleIsOpenModal} />
        </Box>
        <TransactionLimit
          defaultLimit={defaultLimit}
          setDefaultLimit={setDefaultLimit}
          handleOpenModalSuccess={handleOpenModalSuccess}
        />
      </ModalConfirmation>

      {isOpenResetModal && (
        <ResetFormsConfirmModal
          isOpen={isOpenResetModal}
          handleFormReset={handleLeaveModal}
          handleClose={handleCloseResetModal}
        />
      )}

      <ModalSuccess text={message} isOpen={isOpenModalSuccess} handleClose={() => setOpenModalSuccess(false)} />
    </>
  );
};
