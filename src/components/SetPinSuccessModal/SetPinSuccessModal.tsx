import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CloseButton, Modal, PrimaryButton } from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { ModalWrapper } from 'interfaces/ModalWrapper';
import { ERROR } from 'constants/text';
import { PostRequestStatus } from 'interfaces/myCard';
import { ICON_VALUES } from 'constants/modalWindow';
import { toDo } from 'helpers';
import { pinCodeSuccessModalContent } from 'helpers/pinCodeSuccessModalContent';
import classes from './SetPinSuccessModal.module.scss';

interface Props extends ModalWrapper {
  status: PostRequestStatus;
  hasRedirectButton?: boolean;
  handleRedirectClick?(): void;
}

export const SetPinSuccessModal: FC<Props> = ({
  isOpen,
  handleClose,
  status,
  hasRedirectButton = false,
  handleRedirectClick = toDo,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={classes.pinCodeSuccessModal}>
        <CloseButton className={classes.closeButton} onClick={handleClose} size={Size.MEDIUM} />
        <div className={classes.icon}>{ICON_VALUES[status]}</div>
        <div className={`${classes.modalTextWrapper} ${hasRedirectButton ? classes.hasRedirectButton : ''}`}>
          {pinCodeSuccessModalContent(hasRedirectButton, status).map(
            (item: string): ReactElement => (
              <p className={classes.textItem} key={item}>
                {item}
              </p>
            )
          )}
        </div>
        {hasRedirectButton && status !== ERROR && (
          <PrimaryButton
            className={classes.redirectButton}
            type={ButtonType.BUTTON}
            onClick={handleRedirectClick}
            size={Size.SMALL}
          >
            {t('buttonNames.goToMyCards')}
          </PrimaryButton>
        )}
      </div>
    </Modal>
  );
};
