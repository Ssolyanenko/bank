import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { SuccessIcon } from 'assets/SuccessIcon';
import { PrimaryButton } from 'components/_basic';
import classes from './ModalWrapper.module.scss';

interface Props {
  open?: boolean;
  onClose(): void;
  id: string;
  subTitle: string;
  textButton: string;
}

export const ModalWrapper: FC<Props> = ({ open = false, onClose, id, subTitle, textButton }) => (
  <Modal onClose={onClose} open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box id={id} className={classes.popup}>
      <Typography className={classes.title} id="modal-modal-title">
        Congratulations!
      </Typography>
      <Typography className={classes.main} id="modal-modal-description" sx={{ mt: 2 }}>
        {subTitle}
      </Typography>
      <SuccessIcon className={classes.successIcon} />
      <PrimaryButton onClick={onClose}>{textButton}</PrimaryButton>
    </Box>
  </Modal>
);
