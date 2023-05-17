import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ExclamationMarkIcon } from 'assets';
import { CloseButton, Modal, PrimaryButton, SecondaryButton } from 'components/_basic';
import { Size } from 'interfaces/common/componentsSettings';
import { ModalWrapper } from 'interfaces/ModalWrapper';
import classes from './ResetFormsConfirmModal.module.scss';

interface Props extends ModalWrapper {
  handleFormReset(): void;
}

export const ResetFormsConfirmModal: FC<Props> = ({ isOpen, handleClose, handleFormReset }): ReactElement => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={classes.modalContentWrapper}>
        <CloseButton className={classes.closeButton} onClick={handleClose} size={Size.MEDIUM} />
        <ExclamationMarkIcon />
        <div className={classes.textWrapper}>
          {t('resetFormsModalContent', { joinArrays: '|' })
            .split('|')
            .map(
              (text: string): ReactElement => (
                <p key={text} className={classes.text}>
                  {text}
                </p>
              )
            )}
        </div>
        <div className={classes.buttonsWrapper}>
          <SecondaryButton className={classes.button} onClick={handleFormReset} size={Size.SMALL}>
            {t('buttonNames.leave')}
          </SecondaryButton>
          <PrimaryButton className={classes.button} onClick={handleClose} size={Size.SMALL}>
            {t('buttonNames.cancel')}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};
