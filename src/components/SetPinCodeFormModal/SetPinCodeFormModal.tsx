import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal, BackButton } from 'components/_basic';
import { SetPinCodeForm } from 'components';
import { ModalWrapper } from 'interfaces/ModalWrapper';
import { PinCodeFormInitialValues } from 'interfaces/setPinCodeForm';
import classes from './SetPinCodeFormModal.module.scss';

interface Props extends ModalWrapper {
  handlePinChangeModal(pinValues: string): void;
  title: string;
  buttonName: string;
  values?: PinCodeFormInitialValues;
  handleValueChange?(name: string, value: string): void;
}

export const SetPinCodeFormModal: FC<Props> = ({
  isOpen,
  handleClose,
  handlePinChangeModal,
  title,
  buttonName,
  values,
  handleValueChange,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={classes.setPinCodeFormWrapper}>
        <BackButton className={classes.backButton} handleBack={handleClose}>
          {t('buttonNames.back')}
        </BackButton>
        <SetPinCodeForm
          handlePinChangeModal={handlePinChangeModal}
          title={title}
          buttonName={buttonName}
          values={values}
          handleValueChange={handleValueChange}
        />
      </div>
    </Modal>
  );
};
