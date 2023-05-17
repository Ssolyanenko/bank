import React, { FC } from 'react';

import { Modal, CloseButton } from 'components/_basic';
import { ModalWrapper } from 'interfaces/ModalWrapper';
import { Size } from 'interfaces/common/componentsSettings';
import { CheckmarkIcon } from 'assets';
import classes from './ModalSuccess.module.scss';

interface Props extends ModalWrapper {
  text: string;
}

export const ModalSuccess: FC<Props> = ({ isOpen, handleClose, text }) => (
  <Modal isOpen={isOpen} handleClose={handleClose}>
    <div className={classes.successModalWrapper}>
      <CloseButton className={classes.closeButton} onClick={handleClose} size={Size.MEDIUM} />
      <div className={classes.contentWrapper}>
        <CheckmarkIcon />
        <p className={classes.contentText}>{text}</p>
      </div>
    </div>
  </Modal>
);
