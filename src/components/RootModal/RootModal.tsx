import React, { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { StepperForm } from 'components/_basic';
import classes from './RootModal.module.scss';

interface Props {
  onOpen: boolean;
  onCloseModal(): void;
  onOpenFinallyPopup(): void;
}

export const RootModal: FC<Props> = ({ onOpen, onCloseModal, onOpenFinallyPopup }): ReactElement => (
  <Modal
    open={onOpen}
    onClose={onCloseModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className={classes.popup}>
      <StepperForm onOpenFinallyPopup={onOpenFinallyPopup} onCloseModal={onCloseModal} />
    </Box>
  </Modal>
);
