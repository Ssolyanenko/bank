import { ChangeEvent, FC, ReactElement } from 'react';
import { Checkbox as CheckboxMUI } from '@mui/material';

import classes from './Checkbox.module.scss';

interface Props {
  name: string;
  onChange(event: ChangeEvent<HTMLInputElement>, isChecked: boolean): void;
  value?: boolean;
  children?: ReactElement | string;
  classTitle?: string;
}

export const Checkbox: FC<Props> = ({ name, onChange, value = false, children = '', classTitle = '' }) => (
  <div className={`${classes.checkboxWrapper} ${classTitle}`}>
    <CheckboxMUI value={value} onChange={onChange} name={name} checked={!!value} />
    {children}
  </div>
);
