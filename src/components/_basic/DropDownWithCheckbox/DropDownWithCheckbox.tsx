import { FC, useState, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Enumeration } from 'interfaces/creditCardPremium';
import { DropDown } from 'interfaces/dropDown';
import { toDo } from 'helpers';
import colors from 'styles/variables.module.scss';
import classes from './DropDownWithCheckbox.module.scss';

interface Props extends DropDown {
  enumerations: Enumeration[];
  isRequired?: boolean;
  setFieldValue?(field: string, value?: string | string[], shouldValidate?: boolean): void;
}

export const DropDownWithCheckbox: FC<Props> = ({
  enumerations,
  placeholder = '',
  name,
  label = '',
  isRequired = false,
  onClick = toDo,
  setFieldValue,
}): ReactElement => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleChange = ({ target: { value } }: SelectChangeEvent<typeof categories>): void => {
    setCategories(typeof value === 'string' ? value.split(',') : value);
    setFieldValue && setFieldValue(name, typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        displayEmpty
        notched
        multiple
        required={isRequired}
        name={name}
        label={label}
        IconComponent={KeyboardArrowDownIcon}
        value={categories}
        onClick={onClick}
        onChange={handleChange}
        renderValue={(selected: string[]): string | ReactElement =>
          selected.length === 0 ? <span className={classes.placeholder}>{placeholder}</span> : selected.join(', ')
        }
      >
        {enumerations.map(
          ({ id, text }): ReactElement => (
            <MenuItem key={id} value={text} className={classes.dropDownItem}>
              <Checkbox checked={categories.indexOf(text) > -1} sx={{ '&.Mui-checked': { color: colors.orange } }} />
              <ListItemText primary={text} className={classes.text} />
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
