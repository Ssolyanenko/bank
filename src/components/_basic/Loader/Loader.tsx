import { FC, ReactElement } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import colors from 'styles/variables.module.scss';

export const Loader: FC = (): ReactElement => (
  <Backdrop sx={{ color: colors.white_1, zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
    <CircularProgress color="inherit" />
  </Backdrop>
);
