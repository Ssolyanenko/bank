import { FC, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputAdornment, StyledEngineProvider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Enumeration } from 'interfaces/creditCardPremium';
import { DropDown as DropDownCommon } from 'interfaces/dropDown';
import { Size } from 'interfaces/common/componentsSettings';
import { AdorPosition } from 'constants/formInputs';
import classes from './DropDown.module.scss';

interface Props extends DropDownCommon {
  enumerations: Enumeration[];
  onChange(e: SelectChangeEvent): void;
  value?: string;
  hasLastChild?: boolean;
}

export const DropDown: FC<Props> = ({
  enumerations,
  placeholder = '',
  onChange,
  onClick,
  value = '',
  name = 'dropDown',
  label = '',
  hasLastChild = false,
}) => (
  <StyledEngineProvider injectFirst>
    <FormControl fullWidth>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        displayEmpty
        notched
        name={name}
        value={value}
        label={label}
        IconComponent={KeyboardArrowDownIcon}
        onChange={onChange}
        onClick={onClick}
        renderValue={(selected): string | ReactElement =>
          selected === '' ? <span className={classes.placeholder}>{placeholder}</span> : selected
        }
      >
        {enumerations.map(
          ({ text, id }): ReactElement => (
            <MenuItem
              className={hasLastChild ? `${classes.dropDownItemLastChild}` : `${classes.dropDownItem}`}
              value={text}
              key={id}
            >
              {text}
              <InputAdornment position={AdorPosition.END} className={classes.endAdornment}>
                <CheckIcon fontSize={Size.SMALL} className={classes.endAdornment} />
              </InputAdornment>
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  </StyledEngineProvider>
);
