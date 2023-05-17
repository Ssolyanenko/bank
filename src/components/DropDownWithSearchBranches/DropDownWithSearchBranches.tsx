import { FC, ReactElement, SyntheticEvent } from 'react';
import {
  Box,
  FormControl,
  Autocomplete,
  MenuItem,
  StyledEngineProvider,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { FormikErrors } from 'formik';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { CreditPremiumCardValues } from 'interfaces/creditCardPremium';
import { Branch } from 'interfaces/branch';
import { DropDown } from 'interfaces/dropDown';
import { getOptionLabelBranch, isOptionEqualToValue } from 'helpers';
import classes from './DropDownWithSearchBranches.module.scss';

interface Props extends DropDown {
  branches: Branch[];
  setFieldValue(
    field: string,
    value?: string,
    shouldValidate?: boolean
  ): Promise<void> | Promise<FormikErrors<CreditPremiumCardValues>>;
  errorBankBranchesFound?: string;
}

export const DropDownWithSearchBranches: FC<Props> = ({
  branches,
  name,
  setFieldValue,
  onClick,
  label = '',
  placeholder = '',
  errorBankBranchesFound = 'Something went wrong',
}): ReactElement => {
  const onChange = (event: SyntheticEvent<Element, Event>, value: Branch | null): void => {
    setFieldValue(name, value?.id.toString());
  };

  const renderInput = ({ id, inputProps, ...params }: JSX.IntrinsicAttributes & TextFieldProps): ReactElement => (
    <TextField
      label={label}
      placeholder={placeholder}
      name={name}
      key={id}
      {...params}
      inputProps={{ ...inputProps }}
      InputLabelProps={{ shrink: true }}
    />
  );

  const renderOption = (props: object, { address, number }: Branch): ReactElement => (
    <MenuItem key={number} {...props}>
      {address ? `${address.trim()}, ${number}` : ''}
    </MenuItem>
  );

  return (
    <StyledEngineProvider injectFirst>
      <Box onClick={onClick}>
        <FormControl fullWidth>
          <Autocomplete
            noOptionsText={errorBankBranchesFound}
            classes={{ option: classes.menuItem }}
            onChange={onChange}
            options={branches}
            isOptionEqualToValue={(option, value): boolean => isOptionEqualToValue(option.address, value.address)}
            placeholder={placeholder}
            autoHighlight
            popupIcon={<KeyboardArrowDownIcon />}
            getOptionLabel={(option): string => getOptionLabelBranch(option)}
            renderOption={renderOption}
            renderInput={renderInput}
          />
        </FormControl>
      </Box>
    </StyledEngineProvider>
  );
};
