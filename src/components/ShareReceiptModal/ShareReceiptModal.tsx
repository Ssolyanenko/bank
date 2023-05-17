import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CloseButton, ModalConfirmation } from 'components/_basic';
import { SocialMedia } from 'components';
import { Size } from 'interfaces/common/componentsSettings';
import { MAX_WIDTH_TRANSFER_MODAL } from 'constants/numbers';
import classes from './ShareReceiptModal.module.scss';

interface Props {
  isOpen: boolean;
  handleClose(): void;
}

export const ShareReceiptModal: FC<Props> = ({ isOpen, handleClose }): ReactElement => {
  const { t } = useTranslation();

  return (
    <ModalConfirmation isOpened={isOpen} onClose={handleClose} maxWidth={MAX_WIDTH_TRANSFER_MODAL}>
      <div className={classes.modalContainer}>
        <div className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={handleClose} />
        </div>
        <div className={classes.contentWrapper}>
          <p className={classes.title}>{t('buttonNames.shareReceipt')}</p>
          <SocialMedia />
        </div>
      </div>
    </ModalConfirmation>
  );
};
