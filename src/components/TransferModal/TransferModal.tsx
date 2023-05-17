import { FC, ReactElement } from 'react';

import { CloseButton, ModalConfirmation } from 'components/_basic';
import { ReceiptButtons } from 'components';
import { CheckmarkIcon, ExclamationMarkIcon } from 'assets';
import { Size } from 'interfaces/common/componentsSettings';
import { TRANSFER_FAILURE, TRANSFER_SUCCESS } from 'constants/text';
import { MAX_WIDTH_TRANSFER_MODAL } from 'constants/numbers';
import classes from './TransferModal.module.scss';

interface Props {
  isOpen: boolean;
  handleClose(): void;
  handleClickShareModal(): void;
  isTransferSuccessful: boolean;
}

export const TransferModal: FC<Props> = ({
  isOpen,
  handleClose,
  isTransferSuccessful,
  handleClickShareModal,
}): ReactElement => {
  const text = isTransferSuccessful ? TRANSFER_SUCCESS : TRANSFER_FAILURE;

  const successContent = (
    <div className={classes.successContentWrapper}>
      <CheckmarkIcon className={classes.modalIcon} />
      <p className={classes.successTitle}>{text}</p>
      <ReceiptButtons handleClickShareModal={(): void => handleClickShareModal()} />
    </div>
  );

  const failureContent = (
    <div className={classes.failureContentWrapper}>
      <ExclamationMarkIcon className={classes.modalIcon} />
      <p className={classes.failureTitle}>{text}</p>
      <div className={classes.modalText}>
        Unfortunately, there is an issue on the recepient's side.
        <br />
        For more information, please, contact the support service.
      </div>
    </div>
  );

  const content = isTransferSuccessful ? successContent : failureContent;

  return (
    <ModalConfirmation isOpened={isOpen} onClose={handleClose} maxWidth={MAX_WIDTH_TRANSFER_MODAL}>
      <div className={`${isTransferSuccessful ? classes.successContainer : classes.failureContainer}`}>
        <div className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={handleClose} />
        </div>
        {content}
      </div>
    </ModalConfirmation>
  );
};
