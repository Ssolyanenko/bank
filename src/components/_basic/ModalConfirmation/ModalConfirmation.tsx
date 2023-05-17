import { FC } from 'react';
import { Dialog } from '@mui/material';

interface Props {
  isOpened: boolean;
  onClose(): void;
  children: JSX.Element | JSX.Element[];
  maxWidth?: string;
}

export const ModalConfirmation: FC<Props> = ({ onClose, isOpened, children, maxWidth = '300px' }) => (
  <Dialog
    open={isOpened}
    onClose={onClose}
    sx={{
      '& .MuiDialog-container': {
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: { maxWidth },
          padding: '20px',
        },
      },
    }}
  >
    {children}
  </Dialog>
);
