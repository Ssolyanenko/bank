import { FC, useState, ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { StatusTag, SetPinSuccessModal, SetPinCodeFormModal } from 'components';
import { PrimaryButton } from 'components/_basic';
import { Size } from 'interfaces/common/componentsSettings';
import { activateButton } from 'helpers';
import { COLUMN, ROW, SUCCESS } from 'constants/text';
import { SET_PIN_CODE_FORM_CONTENT } from 'constants/pinCodeFormContent';
import { СardApplicationStatusses } from 'interfaces/cardApplications';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getCardActivated, requestCardActivation } from 'store';
import { RoutingPaths } from 'constants/routingPaths';
import classes from './ApplicationStatus.module.scss';

interface Props {
  status: СardApplicationStatusses;
  cardId: number;
}

const { title, buttonName } = SET_PIN_CODE_FORM_CONTENT;

export const ApplicationStatus: FC<Props> = ({ status, cardId }): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { activationStatus } = useTypedSelector(getCardActivated);

  const [isOpenPinModal, setIsOpenPinModal] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccessModalClose = (): void => {
    activationStatus === SUCCESS && navigate(`/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.CARDS}`);
    setIsSuccessModalOpen(false);
  };

  const handlePinChangeModal = (pinValue: string): void => {
    dispatch(requestCardActivation({ cardId, pinCode: pinValue }));
    setIsOpenPinModal(false);
    setIsSuccessModalOpen(true);
  };

  const isActivatedButton = activateButton(status);
  const statusDirection = isActivatedButton ? COLUMN : ROW;

  return (
    <>
      <div className={classes.statusWrapper}>
        <div className={`${classes.direction} ${classes[statusDirection]}`}>
          <span className={classes.statusTitle}>Status:</span>
          <StatusTag status={status} />
        </div>
        {isActivatedButton && (
          <PrimaryButton
            className={classes.activateButton}
            size={Size.SMALL}
            onClick={(): void => setIsOpenPinModal(true)}
          >
            {t('buttonNames.activate')}
          </PrimaryButton>
        )}
      </div>
      <SetPinCodeFormModal
        handlePinChangeModal={handlePinChangeModal}
        title={title}
        buttonName={buttonName}
        isOpen={isOpenPinModal}
        handleClose={(): void => setIsOpenPinModal(false)}
      />
      <SetPinSuccessModal
        isOpen={isSuccessModalOpen}
        handleClose={(): void => setIsSuccessModalOpen(false)}
        handleRedirectClick={handleSuccessModalClose}
        status={activationStatus}
        hasRedirectButton
      />
    </>
  );
};
