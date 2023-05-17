import { useState, FC, ChangeEvent, ReactElement } from 'react';
import { TextField, InputAdornment } from '@mui/material';

import { STATUS_ICONS } from 'constants/statusIcons';
import { AdorPosition } from 'constants/formInputs';
import { PasswordIconInvisible, PasswordIconVisible } from 'assets/loginForm';
import colors from 'styles/variables.module.scss';
import classes from './InputPassword.module.scss';

interface Props {
  labelText?: string;
  name: string;
  value: string;
  isError: boolean;
  placeholder?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  onBlur?(event: ChangeEvent): void;
  autoComplete?: string;
  InputLabelProps?: object;
}

export const InputPassword: FC<Props> = ({
  labelText = '',
  name,
  onChange,
  onBlur,
  value,
  isError,
  placeholder = '',
  autoComplete = '',
  InputLabelProps = {},
}): ReactElement => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onShowPassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={classes.formPassword}>
      <TextField
        sx={{
          '& .MuiOutlinedInput-root.Mui-focused': {
            '& > fieldset': {
              borderColor: colors.orange,
            },
          },
          '& label': {
            '&.MuiInputLabel-root': {
              color: colors.grayDark_7,
            },
          },
          '& .MuiOutlinedInput-root.Mui-error': {
            paddingRight: '30px',
            '& > fieldset': {
              borderColor: colors.grayDark_7,
            },
          },
        }}
        className={classes.passwordInput}
        variant="outlined"
        type={isShowPassword ? 'text' : 'password'}
        label={labelText}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={isError}
        placeholder={placeholder}
        fullWidth
        autoComplete={autoComplete}
        InputLabelProps={InputLabelProps}
        InputProps={{
          endAdornment: isError && <InputAdornment position={AdorPosition.END}>{STATUS_ICONS.error}</InputAdornment>,
        }}
      />
      <div aria-hidden className={classes.showPassword} onClick={onShowPassword} onKeyDown={onShowPassword}>
        {isShowPassword ? <PasswordIconVisible /> : <PasswordIconInvisible />}
      </div>
    </div>
  );
};
