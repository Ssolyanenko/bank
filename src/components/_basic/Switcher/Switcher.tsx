import React, { FC } from 'react';
import { alpha, styled, Switch } from '@mui/material';

import classes from './Switcher.module.scss';

interface Props {
  handleChange?(): void;
  isChecked?: boolean;
}

const OrangeSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#ffd600',
    '&:hover': {
      backgroundColor: alpha('#ffd600', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#ffd600',
  },
}));

export const Switcher: FC<Props> = ({ handleChange, isChecked }) => (
  <div className={classes.switcher}>
    <OrangeSwitch inputProps={{ 'aria-label': 'primary checkbox' }} onChange={handleChange} checked={isChecked} />
  </div>
);
