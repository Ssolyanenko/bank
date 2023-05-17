import { FC } from 'react';
import { Box, Modal as ModalMUI } from '@mui/material';

import classes from './Modal.module.scss';

interface Props {
  isOpen: boolean;
  handleClose(): void;
  children: React.ReactNode;
  ariaLabelledBy?: string;
  ariaLabelDescribedBy?: string;
}

export const Modal: FC<Props> = ({ isOpen, handleClose, children, ariaLabelledBy = '', ariaLabelDescribedBy = '' }) => (
  <ModalMUI
    open={isOpen}
    onClose={handleClose}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaLabelDescribedBy}
  >
    <Box className={classes.modalWrapper}>{children}</Box>
  </ModalMUI>
);
