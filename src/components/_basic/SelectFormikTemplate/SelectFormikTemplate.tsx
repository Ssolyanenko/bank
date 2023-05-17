import React, { FC, useState } from 'react';
import {
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  StyledEngineProvider,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Size } from 'interfaces/common/componentsSettings';
import classes from './SelectFormikTemplate.module.scss';

interface Props {
  placeholder: string;
  options: { [name: string]: string };
}

export const SelectFormikTemplate: FC<Props> = ({ options, placeholder }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setDeliveryMethod(event.target.value as string);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Box className={classes.inputWrapper}>
        <InputLabel className={classes.inputLabel} id="Delivery">
          Delivery method *
        </InputLabel>
        <Select
          className={classes.inputField}
          name="Delivery"
          labelId="Delivery"
          id="Delivery"
          IconComponent={KeyboardArrowDownIcon}
          value={deliveryMethod}
          fullWidth
          displayEmpty
          renderValue={deliveryMethod !== '' ? undefined : (): string => placeholder}
          onChange={handleChange}
        >
          {Object.keys(options).map((value) => (
            <MenuItem selected={false} key={options[value]} value={options[value]}>
              <ListItemIcon>
                <ListItemText primary={options[value]} />
                <CheckIcon fontSize={Size.SMALL} />
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
      </Box>
    </StyledEngineProvider>
  );
};
