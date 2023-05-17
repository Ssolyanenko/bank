import { ChangeEvent, MouseEvent, FC, ReactElement } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useField } from 'formik';

import { STATUS_ICONS } from 'constants/statusIcons';
import { AdorPosition } from 'constants/formInputs';
import { AdornmentStatuses } from 'constants/text';
import { toDo } from 'helpers';
import colors from 'styles/variables.module.scss';

interface Props {
  placeholder?: string;
  labelText?: string;
  name: string;
  value?: React.ReactNode;
  type?: string;
  isShowSuccess?: boolean;
  hasError?: boolean;
  onChange?(event?: ChangeEvent): void;
  onBlur?(event?: ChangeEvent): void;
  onClick?(event: MouseEvent): void;
  isDisabled?: boolean;
  InputLabelProps?: object;
}

export const Input: FC<Props> = ({
  labelText = '',
  type = 'text',
  name,
  onChange = toDo,
  onBlur = toDo,
  onClick = toDo,
  value = '',
  isShowSuccess = false,
  hasError = false,
  isDisabled = false,
  placeholder = '',
  InputLabelProps = {},
}): ReactElement => {
  const [, meta] = useField(name);

  const hasTouched = meta.touched;
  const validationFailed = meta.error;
  const hasValue = meta.value && !isDisabled;
  const showSuccess = !hasError && isShowSuccess;

  let endAd = null;

  if (hasTouched) {
    if (validationFailed) {
      endAd = AdornmentStatuses.ERROR;
    } else if (hasValue && showSuccess) {
      endAd = AdornmentStatuses.SUCCESS;
    }
  }

  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': {
            borderColor: colors.orange,
          },
        },
        '& label': {
          '&.Mui-focused': {
            color: colors.grayDark_7,
          },
        },
        '& .MuiOutlinedInput-root.Mui-error': {
          '& > fieldset': {
            borderColor: colors.grayDark_7,
          },
        },
      }}
      placeholder={placeholder}
      variant="outlined"
      label={labelText}
      name={name}
      type={type}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      value={value}
      disabled={isDisabled}
      InputLabelProps={InputLabelProps}
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position={AdorPosition.END}>{endAd && STATUS_ICONS[endAd]}</InputAdornment>,
      }}
    />
  );
};
